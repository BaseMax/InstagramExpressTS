import { IsNumber, IsString } from "class-validator";
import { InputType, Int } from "type-graphql";
import { Field } from "type-graphql";

@InputType()
export class InputId {
  @Field(() => Int)
  @IsNumber()
  id: number;
}
