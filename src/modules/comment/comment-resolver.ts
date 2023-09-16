import { injectable } from "tsyringe";
import { Authorized, Resolver, Mutation, Arg, Query } from "type-graphql";
import { CommentService } from "./comment-service";
import { Comment } from "./entity/comment-entity";
import { CreateCommentInput } from "./dto/create-comment-input";
import { getCurrentUserId } from "../auth/getCurrentUserId";
import { PostService } from "../post/post-service";
import { UpdateCommentInput } from "./dto/update-comment-dto";
import { GraphQLError } from "graphql";
import { InputId } from "../../utils/Id-validation";

@injectable()
@Resolver()
export class CommentResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly postService: PostService
  ) {}

  @Authorized()
  @Mutation(() => Comment)
  async createComment(
    @Arg("input") createCommentInput: CreateCommentInput,
    @getCurrentUserId() userId: number
  ) {
    const post = await this.postService.findByIdOrThrow(
      createCommentInput.postId
    );
    return await this.commentService.createComment(userId, createCommentInput);
  }

  @Query(() => [Comment])
  async getComments() {
    return await this.commentService.getAllComments();
  }

  @Authorized()
  @Mutation(() => Comment)
  async updateComment(
    @Arg("input") updateCommentInput: UpdateCommentInput,
    @getCurrentUserId() userId: number
  ) {
    const comment = await this.commentService.isAllowedToModify(
      userId,
      updateCommentInput.commentId
    );

    if (!comment)
      throw new GraphQLError("You aren't allowed to modify this comment");
    return await this.commentService.updateComment(updateCommentInput);
  }
  @Authorized()
  @Mutation(() => Comment)
  async deleteComment(
    @Arg("input") inputId: InputId,
    @getCurrentUserId() userId: number
  ) {
    const comment = await this.commentService.isAllowedToModify(
      userId,
      inputId.id
    );
    if (!comment)
      throw new GraphQLError("You aren't allowed to modify this comment");

    console.log(comment);

    return this.commentService.deleteComment(inputId.id);
  }
}
