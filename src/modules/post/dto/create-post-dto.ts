import { IsNumber, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreatePostInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  content: string;

  @IsString({ each: true })
  @Field(() => [String])
  fileUrls: string[];

  @Field(() => Int)
  @IsNumber()
  hashTagId: number;
}
