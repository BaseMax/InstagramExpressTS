import { injectable } from "tsyringe";
import { PrismaService } from "../../utils/prisma-service";
import { CreateTagInput } from "./dto/create-hash-tag-input";
import { HashTag } from "@prisma/client";
import { GraphQLError } from "graphql";

@injectable()
export class HashTagService {
  constructor(private readonly prisma: PrismaService) {}

  async createTag(createTagInput: CreateTagInput): Promise<HashTag> {
    return await this.prisma.hashTag.create({
      data: {
        name: createTagInput.name,
      },
    });
  }

  async findTagByName(name: string): Promise<HashTag | null> {
    return await this.prisma.hashTag.findUnique({
      where: {
        name,
      },
    });
  }
  async findByIdOrThrow(id: number): Promise<HashTag | null> {
    const hashTag = await this.prisma.hashTag.findUnique({
      where: {
        id,
      },
    });
    if (!hashTag)
      throw new GraphQLError("Hash tag with this credentials doesn't exist");
    return hashTag;
  }
}
