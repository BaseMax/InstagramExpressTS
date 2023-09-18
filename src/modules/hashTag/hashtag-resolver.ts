import { injectable } from "tsyringe";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { HashTag } from "./entity/hashTag-entity";
import { CreateTagInput } from "./dto/create-hash-tag-input";
import { HashTagService } from "./hashtag-service";
import { GraphQLError } from "graphql";
import { InputId } from "../../utils/Id-validation";
import { HashTagName } from "./dto/get-hash-tag-name";

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

  @Query(() => HashTag, { nullable: true })
  async getHashTag(@Arg("input") idInput: InputId) {
    return await this.hashTagService.findByIdOrThrow(idInput.id);
  }

  @Query(() => HashTag, { nullable: true })
  async getHashTagPosts(@Arg("input") nameInout: HashTagName) {
    return await this.hashTagService.findTagByName(nameInout.name);
  }

  @Query(() => [HashTag])
  async getAllHashTags() {
    return await this.hashTagService.findAllHashTags();
  }
}
