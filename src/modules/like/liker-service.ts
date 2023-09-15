import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { LikePost } from "@prisma/client";

@injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

  async likePost(userId: number, postId: number): Promise<LikePost> {
    return this.prisma.likePost.create({
      data: {
        postId: postId,
        userId: userId,
      },
    });
  }

  async unlikePost(userId: number, postId: number): Promise<LikePost | null> {
    return await this.prisma.likePost.delete({
      where: {
        postId_userId: {
          userId: userId,
          postId: postId,
        },
      },
    });
  }

  async isLikedPost(userId: number, postId: number): Promise<boolean> {
    const isLiked = await this.prisma.likePost.findFirst({
      where: {
        userId: userId,
        postId: postId,
      },
    });

    return isLiked ? true : false;
  }
}
