import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class HashTagName {
  @Field()
  @IsString()
  name: string;
}
