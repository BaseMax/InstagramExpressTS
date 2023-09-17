import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Resolver } from "type-graphql";
import { HashTag } from "./entity/hashTag-entity";
import { CreateTagInput } from "./dto/create-hash-tag-input";
import { HashTagService } from "./hashtag-service";
import { GraphQLError } from "graphql";

@Resolver()
@injectable()
export class HashTagResolver {
  constructor(private readonly hashTagService: HashTagService) {}
  @Authorized()
  @Mutation(() => HashTag)
  async createHashTag(@Arg("input") createTagInput: CreateTagInput) {
    const hashTag = await this.hashTagService.findTagByName(
      createTagInput.name
    );
    if (hashTag) throw new GraphQLError("There is already  a tag .");

    
    return await this.hashTagService.createTag(createTagInput);
  }
}
