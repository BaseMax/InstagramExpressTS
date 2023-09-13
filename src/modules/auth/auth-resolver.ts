import { Arg, Mutation, Resolver } from "type-graphql";
import { AuthService } from "./auth-service";
import { AuthPayload } from "./entity/auth-payload";
import { CreateUserInput } from "./Dto/create-user-input";
import { injectable } from "tsyringe";

@injectable()
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload, { nullable: true })
  async signup(
    @Arg("input", () => CreateUserInput) createUserInput: CreateUserInput
  ) {
    await this.authService.signup(createUserInput);
    console.log(createUserInput);
  }
}
