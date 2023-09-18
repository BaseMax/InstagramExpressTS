import { FastifyInstance } from "fastify";
import { FileService } from "./file-service";
import { container } from "tsyringe";
import { JwtService } from "../auth/jwt-service";
import { JwtPayload } from "jsonwebtoken";
import { GraphQLError } from "graphql";
import fastifyMultipart from "@fastify/multipart";
export async function uploadRoutes(fastify: FastifyInstance) {
  const jwtService = container.resolve(JwtService);
  interface UploadParams {
    name: string;
  }

  fastify.addHook("preHandler", (req: any, _rep, done) => {
    if (req.headers.authorization) {
      try {
        req.user = jwtService.verify<JwtPayload>(req.headers.authorization);
      } catch {
        throw new GraphQLError("Sorry . sth went wrong on server side.");
      }
    } else {
      throw new GraphQLError("You should login to get this feature.");
    }

    done();
  });
  const fileService = container.resolve(FileService);
  fastify.register(fastifyMultipart, {
    limits: {
      fileSize: 20 * 1024 * 1024,
    },
  });

  fastify.post<{ Params: UploadParams }>("/upload/file/", {
    handler: async (req, reply) => {
      const data = await req.file();
      const name = data?.filename as string;

      const buffer = await data?.toBuffer();

      if (!buffer) {
        throw new GraphQLError("file required");
      }

      const url = await fileService.uploadPicture(name, buffer);

      reply.send({ url });
    },
  });
}
