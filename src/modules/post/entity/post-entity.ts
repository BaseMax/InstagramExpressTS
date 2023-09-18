import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [String])
  fileUrls: string[];
  
  @Field(() => Int)
  authorId: number;

  @Field(() => Date)
  createdAt: Date;
}
