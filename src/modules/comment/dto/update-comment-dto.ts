import { IsNumber, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UpdateCommentInput {
  @Field()
  @IsString()
  message: string;

  @Field(() => Int)
  @IsNumber()
  commentId: number;
}
