import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Follow {
  @Field(() => Int)
  followingId: number;

  @Field(() => Int)
  followerId: number;

  @Field(() => Date)
  createdAt: Date;
}
