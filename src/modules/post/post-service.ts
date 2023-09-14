import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { Post } from "@prisma/client";
import { CreatePostInput } from "./dto/create-post-dto";
import { UpdatePostInput } from "./dto/update-post.dto";

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

  async updatePost(updatePostInput: UpdatePostInput): Promise<Post | null> {
    return await this.prisma.post.update({
      where: {
        id: updatePostInput.id,
      },
      data: {
        title: updatePostInput.title,
        content: updatePostInput.content,
      },
    });
  }
  async findById(id: number): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  async isAllowedToModify(userId: number, postId: number) {
    const post = await this.prisma.post.findFirst({
      where: {
        id: postId,
        authorId: userId,
      },
    });

    return post ? true : false;
  }
}
