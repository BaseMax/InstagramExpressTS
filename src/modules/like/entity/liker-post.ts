import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class LikePost {
 
  @Field(() => Int)
  postId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Date)
  createdAt: Date;
}
