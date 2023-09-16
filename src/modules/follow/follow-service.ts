import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { Follow } from "@prisma/client";

@injectable()
export class FollowService {
  constructor(private readonly prisma: PrismaService) {}

  async follow(followerId: number, followingId: number): Promise<Follow> {
    return await this.prisma.follow.create({
      data: {
        followerId: followerId,
        followingId: followingId,
      },
    });
  }

  async unfollow(
    followerId: number,
    followingId: number
  ): Promise<Follow | null> {
    return await this.prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
  }
  async isFollowing(followerId: number, followingId: number): Promise<boolean> {
    const following = await this.prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });

    return following ? true : false;
  }

  async getFollowings(followerId: number): Promise<Follow[]> {
    return await this.prisma.follow.findMany({
      where: {
        followerId: followerId,
      },
    });
  }
}
