import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { PrismaService } from "../../utils/prisma-service";
import { Post } from "./entity/post-entity";
import { CreatePostInput } from "./dto/create-post-dto";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { PostService } from "./post-service";
import { InputId     } from "../../utils/Id-validation";

@Resolver()
@injectable()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Authorized()
  @Mutation(() => Post)
  async createPost(
    @Arg("input") createPostInput: CreatePostInput,
    @getCurrentUserId() userId: number
  ) {
    return await this.postService.createPost(userId, createPostInput);
  }

  @Query(() => Post, { nullable: true })
  async getPost(@Arg("input") idInput: InputId  ) {
    return this.postService.findById(idInput.id);
  }
}