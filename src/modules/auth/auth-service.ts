import { injectable } from "tsyringe";
import { UserService } from "../user/user-service";
import { ICreateUserInput } from "../interfaces/create-user";
import { GraphQLError } from "graphql";

@injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(createUserInput: ICreateUserInput) {
    const user = await this.userService.findByEmail(createUserInput.email);
    if (user) throw new GraphQLError("a account with this email exists");
  }
}
