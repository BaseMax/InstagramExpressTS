import request from "supertest";
import { createServer } from "../src/server";
import { Post, User } from "@prisma/client";
import { PrismaService } from "../src/utils/prisma-service";
import { hash } from "argon2";
import { container } from "tsyringe";
import { ApolloServer } from "@apollo/server";
import { ContextType } from "../src/context";

const gql = "/graphql";

describe("AppController (e2e)", () => {
  let prisma: PrismaService;
  let users: User[];
  let posts: Post[];
  let url: string;
  let app: any;
  let apollo: ApolloServer<ContextType>;

  async function login(): Promise<string> {
    const loginMutation = `
    mutation {
      login(input: {
        email: "mikel@gmail.com",
        password:"passwordTest"
      }) {
        token
        name
      }
    }
  `;

    const response = await request(url).post(gql).send({
      query: loginMutation,
    });

    return response.body.data.login.token;
  }

  beforeAll(async () => {
    const o = await createServer();
    app = o.app;
    url = o.url;
    apollo = o.apollo;
    prisma = container.resolve(PrismaService);
    await prisma.comment.deleteMany({});
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    await prisma.user.createMany({
      data: [
        {
          name: "John",
          email: "johndoe@example.com",
          password: await hash("Password123!"),
        },
        {
          name: "Jane",
          email: "janedoe@example.com",
          password: await hash("Password123!"),
        },
      ],
    });

    users = await prisma.user.findMany();
    await prisma.user.create({
      data: {
        name: "mikel",
        email: "mikel@gmail.com",
        password: await hash("passwordTest"),
      },
    });

    await prisma.post.createMany({
      data: [
        {
          title: "first test title ",
          content: "first test content",
          authorId: users[0].id,
        },
        {
          title: "second test title ",
          content: "second test content",
          authorId: users[0].id,
        },
        {
          title: "third test title ",
          content: "third test content",
          authorId: users[1].id,
        },
        {
          title: "fourth test title ",
          content: "fourth test content",
          authorId: users[1].id,
        },
        {
          title: "fifth test title ",
          content: "fifth test content",
          authorId: users[0].id,
        },
      ],
    });
    posts = await prisma.post.findMany({});
  });

  afterAll(async () => {
    await prisma.comment.deleteMany({});
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
    await apollo.stop();
  });
  beforeEach(async () => {});

  describe("auth sign up", () => {
    it("should successfully signup a new user", async () => {
      const name = "Smith";
      const email = "alicesmith@example.com";
      const password = "Password123!";

      const response = await request(url)
        .post(gql)
        .send({
          query: `
              mutation {
                    signup(input: {
                      email: "${email}",
                      name: "${name}",
                      password: "${password}"
                    }) {
                      token
                      name
                    }
                 
                  }
        `,
        });

      expect(response.status).toBe(200);
      expect(response.body.data).not.toBeNull();
      expect(response.body.data.signup.token).toBeDefined();
      expect(response.body.data.signup.name).toBe(name);
    });
    it("should not sign up a user with an invalid email address", async () => {
      const name = "Smith";
      const email = "invalidemail";
      const password = "password123!";

      const response = await request(url)
        .post(gql)
        .send({
          query: `
          mutation {
                signup(input: {
                  email: "${email}",
                  name: "${name}",
                  password: "${password}"
                }) {
                  token
                  name
                }}   `,
        });

      expect(response.status).toBe(200);
      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message[0].constraints.isEmail).toBe(
        "email must be an email"
      );
    });

    it("should not sign up a user with an existing email address", async () => {
      const name = "smith";
      const email = users[0].email;
      const password = "password123!";

      const response = await request(url)
        .post(gql)
        .send({
          query: `
          mutation {
                signup(input: {
                  email: "${email}",
                  name: "${name}",
                  password: "${password}"
                }) {
                  token
                  name
                }}   `,
        });

      expect(response.status).toBe(200);
      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toBe(
        "a account with this email exists"
      );
    });
  });
  describe("login mutation", () => {
    const loginMutation = `
          mutation {
            login(input: {
              email: "johndoe@example.com",
              password: "Password123!"
            }) {
              token
              name
            }
          }
        `;

    it("should successfully login with valid credentials", async () => {
      const response = await request(url).post(gql).send({
        query: loginMutation,
      });

      expect(response.status).toBe(200);
      expect(response.body.data).not.toBeNull();
      expect(response.body.data.login.token).toBeDefined();
      expect(response.body.data.login.name).toBe(users[0].name);
    });

    it("should not login with invalid email address", async () => {
      // Arrange
      const email = "invalidemail@example.com";
      const password = "Password123!";

      // Act
      const response = await request(url)
        .post(gql)
        .send({
          query: `
          mutation {
            login(input: {
              email: "ivalid@example.com",
              password: "Password123!"
            }) {
              token
              name
            }
          }
        `,
        });
      expect(response.status).toBe(200);
      expect(response.body.errors).toBeDefined();
      expect(response.body.errors[0].message).toBe(
        "credentials aren't correct."
      );
    });
  });

  describe("post e2e ", () => {
    const postMutation = `mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        content
        authorId
        createdAt
      }
    }`;

    it("should create post", async () => {
      const token = await login();
      const response = await request(url)
        .post(gql)
        .set("authorization", token)
        .send({
          query: postMutation,
          variables: {
            input: {
              title: "it is title",
              content: "it is a content......",
            },
          },
        });

        console.log(response.body.errors);
        
      const post = response.body.data.createPost;
      expect(response.status).toBe(200);
      expect(post.title).toBe("it is title");
      expect(post.content).toBe("it is a content......");
    });

    it("should get a post by id", async () => {
      const findByIdQuery = `query GetPost($input: InputId!) {
            getPost(input: $input) {
              id
              title
              content
              authorId
              createdAt
            }
          }`;
      const response = await request(url)
        .post(gql)
        .send({
          query: findByIdQuery,
          variables: {
            input: {
              id: posts[0].id,
            },
          },
        });

      const post = response.body.data.getPost;

      expect(response.status).toBe(200);
      expect(post.id).toBe(posts[0].id);
      expect(post.title).toBe(posts[0].title);
      expect(post.content).toBe(posts[0].content);
    });
  });

  describe("comment e2e test", () => {
    const createCommentMutation = `mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        id
        userId
        postId
        message
        createdAt
        updatedAt
      }
    }`;

    it("should create comment", async () => {
      const token = await login();
      const response = await request(url)
        .post(gql)
        .set("authorization", token)
        .send({
          query: createCommentMutation,
          variables: {
            input: {
              postId: posts[0].id,
              message: "it was a good post :)",
            },
          },
        });

      const comment = response.body.data.createComment;

      expect(response.status).toBe(200);
      expect(comment.postId).toBe(posts[0].id);
      expect(comment.message).toBe("it was a good post :)");
    });
  });
});
