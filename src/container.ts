import { S3Client } from "@aws-sdk/client-s3";
import { container } from "tsyringe";
import { PrismaService } from "./utils/prisma-service";
import { PrismaClient } from "@prisma/client";
import { S3 } from "./modules/file/s3";

container.register("jwt-secret", {
  useValue: assertString(process.env.SECRET_KEY),
});
container.register("jwt-expireTime", { useValue: 3600 * 24 });
container.register("accessKeyId", {
  useValue: assertString(process.env.S3_ACCESS_KEY),
});
container.register("secretAccessKey", {
  useValue: assertString(process.env.S3_SECRET_KEY),
});

container.register("S3_URI", { useValue: assertString(process.env.S3_URI) });

container.register("BUCKET_NAME" , {useValue : assertString(process.env.BUCKET_NAME)} )
container.register(PrismaService, { useValue: new PrismaClient() });

function assertString(s: string | undefined): string {
  if (!s) {
    throw new Error("expected string");
  }
  return s;
}
export { container } from "tsyringe";
