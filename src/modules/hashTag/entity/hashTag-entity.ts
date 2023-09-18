import { Field, Int, ObjectType } from "type-graphql";
import { Post } from "../../post/entity/post-entity";

@ObjectType()
export class HashTag {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Post])
  posts: Post[];
  @Field(() => Date)
  createdAt: Date;
}
