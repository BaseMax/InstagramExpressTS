import { S3Client } from "@aws-sdk/client-s3";
import { inject } from "tsyringe";
import { container } from "tsyringe";

export class S3 {
  private static readonly s3: S3Client;

  private constructor() {}
  static getInstance() {
    if (this.s3) return this.s3;

    return new S3Client({
      credentials: {
        accessKeyId: container.resolve("accessKeyId"),
        secretAccessKey: container.resolve("secretAccessKey"),
    
      },
    
      endpoint: container.resolve("S3_URI"),
      forcePathStyle: true,
      region: "eu-west-1",
    });
  }
}
