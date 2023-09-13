import { S3Client } from "@aws-sdk/client-s3";
import { container } from "tsyringe";
import { PrismaService } from "./utils/prisma-service";
import { PrismaClient } from "@prisma/client";

container.register("jwt-secret", {
  useValue: assertString(process.env.SECRET_KEY),
});
container.register("jwt-expireTime", { useValue: 3600 * 24 });

container.register(PrismaService, { useValue: new PrismaClient() });

function assertString(s: string | undefined): string {
  if (!s) {
    throw new Error("expected string");
  }
  return s;
}
export { container } from "tsyringe";
