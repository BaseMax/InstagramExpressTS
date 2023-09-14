import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { Post } from "@prisma/client";
import { CreatePostInput } from "./dto/create-post-dto";

@injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(
    userId: number,
    createPostInput: CreatePostInput
  ): Promise<Post> {
    return this.prisma.post.create({
      data: {
        title: createPostInput.title,
        content: createPostInput.content,
        authorId: userId,
      },
    });
  }
}
