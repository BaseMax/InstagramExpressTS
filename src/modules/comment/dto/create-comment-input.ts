import { IsNumber, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateCommentInput {
  @Field()
  @IsString()
  message: string;

  @Field(() => Int)
  @IsNumber()
  postId: number;
}
