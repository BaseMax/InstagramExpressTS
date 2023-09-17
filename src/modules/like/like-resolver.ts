import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { LikeService } from "./liker-service";
import { PostService } from "../post/post-service";
import { InputId } from "../../utils/Id-validation";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { LikePost } from "./entity/liker-post";
import { injectable } from "tsyringe";

@Resolver()
@injectable()
export class LikeResolver {
  constructor(
    private readonly likeService: LikeService,
    private readonly postService: PostService
  ) {}

  @Mutation(() => LikePost)
  @Authorized()
  async likePost(
    @Arg("input") inputId: InputId,
    @getCurrentUserId() userId: number
  ) {
    const post = await this.postService.findByIdOrThrow(inputId.id);

    const isLiked = await this.likeService.isLikedPost(userId, inputId.id);

    return isLiked
      ? await this.likeService.unlikePost(userId, inputId.id)
      : await this.likeService.likePost(userId, inputId.id);
  }

  @Query(() => [LikePost])
  async getAllLikes() {
    return await this.likeService.getAllLikes();
  }
}
