import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { UserService } from "../user/user-service";
import { FollowService } from "./follow-service";
import { Follow } from "./entity/follow-entity";
import { InputId } from "../../utils/Id-validation";
import { getCurrentUserId } from "../auth/getCurrentUserId";

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
    return await this.followService.follow(userId, followingIdInput.id);
  }
}
