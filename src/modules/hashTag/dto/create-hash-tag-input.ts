import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTagInput {
  @Field()
  @IsString()
  name: string;
}
