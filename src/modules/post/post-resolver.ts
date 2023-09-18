import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { PrismaService } from "../../utils/prisma-service";
import { Post } from "./entity/post-entity";
import { CreatePostInput } from "./dto/create-post-dto";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { PostService } from "./post-service";
import { InputId } from "../../utils/Id-validation";
import { UpdatePostInput } from "./dto/update-post.dto";
import { GraphQLError } from "graphql";
import { HashTagService } from "../hashTag/hashtag-service";

@Resolver()
@injectable()
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly hashTagService: HashTagService
  ) {}

  @Authorized()
  @Mutation(() => Post)
  async createPost(
    @Arg("input") createPostInput: CreatePostInput,
    @getCurrentUserId() userId: number
  ) {
    if (createPostInput.hashTagId) {
      const hashTag = await this.hashTagService.findByIdOrThrow(
        createPostInput.hashTagId
      );
    }
    return await this.postService.createPost(userId, createPostInput);
  }

  @Query(() => Post, { nullable: true })
  async getPost(@Arg("input") idInput: InputId) {
    return this.postService.findById(idInput.id);
  }

  @Query(() => [Post], { nullable: true })
  async getPosts() {
    return this.postService.getPosts();
  }

  @Authorized()
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("input") updatePostInput: UpdatePostInput,
    @getCurrentUserId() userId: number
  ) {
    if (updatePostInput.hashTagId) {
      const hashTag = await this.hashTagService.findByIdOrThrow(
        updatePostInput.hashTagId
      );
    }
    const isAllowedToModify = await this.postService.isAllowedToModify(
      userId,
      updatePostInput.id
    );

    if (!isAllowedToModify)
      throw new GraphQLError("You aren't allowed to modify this post");

    return await this.postService.updatePost(updatePostInput);
  }

  @Authorized()
  @Mutation(() => Post, { nullable: true })
  async deletePost(
    @Arg("input") idInput: InputId,
    @getCurrentUserId() userId: number
  ) {
    const isAllowedToModify = await this.postService.isAllowedToModify(
      userId,
      idInput.id
    );

    if (!isAllowedToModify)
      throw new GraphQLError("You aren't allowed to modify this post");

    return await this.postService.deletePost(idInput.id);
  }
}
