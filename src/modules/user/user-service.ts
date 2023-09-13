import { injectable } from "tsyringe";
import { ICreateUserInput } from "../interfaces/create-user";
import { User } from "@prisma/client";
import { PrismaService } from "../../utils/prisma-service";
import argon2 from "argon2";

@injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

    async createUser(createUserInput: ICreateUserInput): Promise<User> {
      return await this.prisma.user.create({
        data: {
          ...createUserInput,
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
}
