import { IsNumber, IsOptional, IsString } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content: string;

  @IsOptional({ each: true })
  @IsString({ each: true })
  @Field(() => [String], { nullable: true })
  fileUrls: string[];

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  hashTagId: number;
}
