import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import cuid from "cuid";
import { GraphQLError } from "graphql";
import path from "path";
import sharp from "sharp";
import { inject, injectable } from "tsyringe";
import { S3 } from "./s3";

interface UploadInput {
  image: Buffer;
  name: string;
}

interface SizedUploadInput extends UploadInput {
  bucket: string;
  width: number;
  height: number;
}

export const sizes = {
  cover: { width: 600, height: 600 },
  avatar: { width: 600, height: 600 },
};

@injectable()
export class FileService {
  private readonly s3 = S3.getInstance();
  constructor(@inject("BUCKET_NAME") private BucketName: string) {}

  private async uploadFile(name: string, bucket: string, file: Buffer) {
    const key = this.getKey(name);

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.BucketName,
        Key: key,
        Body: file,
      })
    );

    return `/${bucket}/${key}`;
  }
  public async uploadPicture(name: string, file: Buffer) {
    return this.uploadFile(name, "Picture", file);
  }

  private getKey(name: string) {
    const extension = path.extname(name);
    const nameWithoutExt = path.basename(name, extension).replace(/\s/g, '');
    console.log(nameWithoutExt);

    return `${nameWithoutExt}-${cuid()}${extension}`;
  }
}
