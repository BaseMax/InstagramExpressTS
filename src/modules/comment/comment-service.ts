import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { CreateCommentInput } from "./dto/create-comment-input";
import { Comment } from "@prisma/client";
import { UpdateCommentInput } from "./dto/update-comment-dto";

@injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(
    userId: number,
    createCommentInput: CreateCommentInput
  ): Promise<Comment> {
    return await this.prisma.comment.create({
      data: {
        userId: userId,
        ...createCommentInput,
      },
    });
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.prisma.comment.findMany();
  }

  async updateComment(
    updateCommentInput: UpdateCommentInput
  ): Promise<Comment | null> {
    return await this.prisma.comment.update({
      where: { id: updateCommentInput.commentId },
      data: {
        message: updateCommentInput.message,
      },
    });
  }

  async deleteComment(commentId: number): Promise<Comment> {
    return await this.prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
  }
  async isAllowedToModify(userId: number, commentId: number): Promise<boolean> {
    const isAllowed = await this.prisma.comment.findFirst({
      where: {
        id: commentId,
        userId: userId,
      },
    });

    return isAllowed ? true : false;
  }
}
