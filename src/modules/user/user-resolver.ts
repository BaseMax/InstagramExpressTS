import { injectable } from "tsyringe";
import { Query, Resolver } from "type-graphql";
import { UserService } from "./user-service";

@Resolver()
@injectable()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async getHello() {
    return "hello there";
  }
}
