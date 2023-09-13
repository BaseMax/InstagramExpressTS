import { Arg, Mutation, Resolver } from "type-graphql";
import { AuthService } from "./auth-service";
import { AuthPayload } from "./entity/auth-payload";
import { SignupInput } from "./Dto/signup-input";
import { injectable } from "tsyringe";
import { LoginInput } from "./Dto/login-input";

@injectable()
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload, { nullable: true })
  async signup(@Arg("input", () => SignupInput) createUserInput: SignupInput) {
    return await this.authService.signup(createUserInput);
  }

  @Mutation(() => AuthPayload, { nullable: true })
  async login(@Arg("input") loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}
