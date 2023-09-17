import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class HashTag{

    @Field(()=>Int)
    id : number

    @Field() 
    name  : string

    @Field(()=>Date)
    createdAt :Date
    
}