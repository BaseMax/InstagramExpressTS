import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { UserService } from "../user/user-service";
import { FollowService } from "./follow-service";
import { Follow } from "./entity/follow-entity";
import { InputId } from "../../utils/Id-validation";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { GraphQLError } from "graphql";

@Resolver()
@injectable()
export class FollowResolver {
  constructor(
    private readonly userService: UserService,
    private readonly followService: FollowService
  ) {}

  @Authorized()
  @Mutation(() => Follow)
  async follow(
    @Arg("input") followingIdInput: InputId,
    @getCurrentUserId() userId: number
  ) {
    const user = await this.userService.findByIdOrThrow(followingIdInput.id);
    const isFollowing = await this.followService.isFollowing(
      userId,
      followingIdInput.id
    );

    if (isFollowing)
      throw new GraphQLError("You are already following this user");

    return await this.followService.follow(userId, followingIdInput.id);
  }

  @Authorized()
  @Mutation(() => Follow)
  async unfollow(
    @Arg("input") followingIdInput: InputId,
    @getCurrentUserId() userId: number
  ) {
    const isFollowing = await this.followService.isFollowing(
      userId,
      followingIdInput.id
    );

    if (!isFollowing) throw new GraphQLError("You aren't following this user");
    return await this.followService.unfollow(userId, followingIdInput.id);
  }
}
