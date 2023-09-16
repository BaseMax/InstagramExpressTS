import { injectable } from "tsyringe";
import { ICreateUserInput } from "../interfaces/create-user";
import { User } from "@prisma/client";
import { PrismaService } from "../../utils/prisma-service";
import argon2 from "argon2";
import { GraphQLError } from "graphql";

@injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserInput: ICreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: {
        name: createUserInput.name,
        email: createUserInput.email,
        password: await argon2.hash(createUserInput.password),
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findByIdOrThrow(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) throw new GraphQLError("there is no user with this id");

    return user;
  }
}
