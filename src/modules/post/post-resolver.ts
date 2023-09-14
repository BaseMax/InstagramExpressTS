import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { PrismaService } from "../../utils/prisma-service";
import { Post } from "./entity/post-entity";
import { CreatePostInput } from "./dto/create-post-dto";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { PostService } from "./post-service";

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
}
