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
import { ContextType } from "./context";
import { container } from "./container";
import { AuthResolver } from "./modules/auth/auth-resolver";
import { formatError } from "./utils/error-formater";

console.log("here");

console.log(process.env.DATABASE_URI);

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [AuthResolver,UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
    container: {
      get: (cls) => container.resolve(cls), 
    },
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
  await app.register(fastifyApollo(apollo));

  const url = await app.listen({ port: 3000, host: "0.0.0.0" });
  logger.info(` 🚀 GraphQL server ready at: ${url}`);

  return { app, url };
}
