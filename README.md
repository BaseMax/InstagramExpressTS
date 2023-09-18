# Instagram Clone with Express.js and TypeScript

Welcome to the Instagram-Clone-Express-TS repository! This project aims to replicate the core features and functionality of the popular social media platform, Instagram, using Express.js and TypeScript. By building this clone, you'll gain hands-on experience in building a modern web application with a focus on backend development and API design.

## Features

- **User Authentication:** Implement a robust user authentication system, allowing users to sign up, log in, and reset their passwords securely.
- **Profile Management:** Enable users to create and edit their profiles, including uploading profile pictures and updating personal information.
- **Image Upload and Sharing:** Implement the ability for users to upload images, and share them with their followers or the public.
- **News Feed:** Create a dynamic news feed that displays images and posts from users a person follows.
- **Comments and Likes:** Allow users to comment on posts, like posts, and see a list of their own posts, comments, and likes.
- **Responsive Design:** Ensure the application is accessible and usable on various devices, including desktop and mobile.

## Tech Stack

- **Fastify.js:** A fast and minimalist web framework for Node.js.
- **TypeScript:** A statically typed superset of JavaScript, adding robustness to your codebase.
- **Postgresql:** A NoSQL database for storing user data, posts, and other information.
- **GraphQL:** A query language for APIs that provides a flexible and efficient way to request data.
- **Apollo Server:** A GraphQL server that integ rates seamlessly with Express.
- **AWS S3:** Use Amazon S3 for storing user-uploaded images securely.
- **Authentication:** Implement authentication using JWT (JSON Web Tokens) for secure user sessions.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/BaseMax/InstagramExpressTS.git
   ```

2. Navigate to the project directory:

```bash
cd InstagramExpressTS
```

3. Install dependencies:

```bash
npm install
```

4. Set up your environment variables by creating a `.env` file in the root directory. You can use the `.env.example` file as a template.

4. You should set `DATABASE_URI` for running the app by docker:

```
DATABASE_URI = "postgresql://postgres:password@postgres:5432/Instagram?schema=public"
```

And then

```bash
docker compose build
```

and for starting the server and database in docker you should run

```bash
docker compose up -d
```

for runngin the Tests you should set DATABASE_URI = "postgresql://postgres:password@localhost:5432/InstagramTest?schema=public" in .env file and run the following command :

```bash
npm run test:e2e
```

Visit `http://localhost:3000` in your web browser to access the Instagram Clone application.

## GraphQL Queries/Mutations

| #   | Type     | Query/Mutation Name | Description                                                                              | Example Request                                                 | Example Response |
| --- | -------- | ------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| 1   | Mutation | `signup`            | Create a new user                                                                        | ![sign up](./screenshots/signup.png)                            |
| 2   | Query    | `getPost`           | Get post details by ID                                                                   | ![get post](./screenshots/getPostByID.png)                      |
| 3   | Query    | `getPosts`          | Get a list of all posts                                                                  | ![get posts](./screenshots/getPosts.png)                        |
| 8   | Mutation | `createPost`        | Create a new post                                                                        | ![create post](./screenshots/createPost.png)                    |
| 9   | Mutation | `updatePost`        | Update post information                                                                  | ![update post](./screenshots/updatePost.png)                    |
| 10  | Mutation | `deletePost`        | Delete a post                                                                            | ![delete post](./screenshots/deletePost.png)                    |
| 11  | Query    | `getComment`        | Get comment details by ID                                                                | ![get comments details by id](./screenshots/getCommentById.png) |
| 12  | Query    | `getComments`       | Get a list of all comments                                                               | ![get all comments](./screenshots/getComments.png)              |
| 13  | Mutation | `createComment`     | Create a new comment                                                                     | ![create comment](./screenshots/getComments.png)                |
| 14  | Mutation | `updateComment`     | Update comment information                                                               | ![update comment](./screenshots/updateComment.png)              |
| 15  | Mutation | `deleteComment`     | Delete a comment                                                                         | ![delete comment](./screenshots/deleteComment.png)              |
|     |
| 17  | Query    | `getLikes`          | Get a list of all likes                                                                  | ![](./screenshots/getAllLikes.png)                              |
| 18  | Mutation | `Like`              | like a post                                                                              | ![like a post](./screenshots/likePost.png)                      |
| 19  | Mutation | `deleteLike`        | if user already liked the post, and requests again it will delete the like (as insagram) | ![](./screenshots/likePost.png)                                 |
| 20  | Query    | `getFollower`       | Get followeings details by ID                                                            | ![get ollowings](./screenshots/getFollowings.png)               |
| 21  | Query    | `getFollowers`      | Get a list of all followers                                                              | ![get followers](./screenshots/getFollowers.png)                |
| 22  | Mutation | `follow`            | follow a new user                                                                        | ![follow user](./screenshots/follwo.png)                        |
| 23  | Mutation | `unfollow`          | unfollow a user                                                                          | ![unfollow a user](./screenshots/unfollow.png)                  |
| 24  | Query    | `getFollowing`      | Get a list of all users a person follows                                                 | ![get a list of followings](./screenshots/getFollowings.png)    |
| 29  | Mutation | `createHashtag`     | Create a new hashtag                                                                     | ![create hash tag](./screenshots/createHashTag.png)             |
| 27  | Query    | `getHashtag`        | Get hashtag details by name                                                              | ![get hash tag posts](./screenshots/getHashTagPosts.png)        |
| 28  | Query    | `getHashtags`       | Get a list of all hashtags                                                               | ![get all hash tags](./screenshots/getAllHashTags.png)          |                  |

Feel free to customize these queries, mutations, examples, and response outputs to match the specifics of your Instagram clone project.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please read our Contributing Guidelines for more information.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
