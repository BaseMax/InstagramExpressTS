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
}
