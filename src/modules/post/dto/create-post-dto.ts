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
  @Field(() => [String], { nullable: true })
  fileUrls: string[];

  @Field(() => Int, { nullable: true })
  @IsNumber()
  hashTagId: number;
}
