import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./modules/user/user-resolver";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import { ApolloServer } from "@apollo/server";
import { Request, Response } from "express";
import path from "path";
import { logger } from "./utils/logger";
import fastify from "fastify";
import { ContextType, myContextFunction } from "./context";
import { container } from "./container";
import { AuthResolver } from "./modules/auth/auth-resolver";
import { formatError } from "./utils/error-formater";
import { CustomAuthChecker } from "./modules/auth/auth-checker";
import { PostResolver } from "./modules/post/post-resolver";
import { LikeResolver } from "./modules/like/like-resolver";
import { CommentResolver } from "./modules/comment/comment-resolver";
import { FollowResolver } from "./modules/follow/follow-resolver";

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [
      AuthResolver,
      UserResolver,
      LikeResolver,
      PostResolver,
      CommentResolver,
      FollowResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
    container: {
      get: (cls) => container.resolve(cls),
    },
    authChecker: CustomAuthChecker,
    validate: true,
  });

  const app = fastify();
  const apollo = new ApolloServer<ContextType>({
    schema,
    introspection: true,
    formatError: formatError,
    plugins: [fastifyApolloDrainPlugin(app)],
  });

  await apollo.start();
  await app.register(fastifyApollo(apollo), {
    context: myContextFunction,
  });

  const url = await app.listen({ port: 3000, host: "0.0.0.0" });
  logger.info(` 🚀 GraphQL server ready at: ${url}`);

  return { app, url };
}
