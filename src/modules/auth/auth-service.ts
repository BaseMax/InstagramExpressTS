import { injectable } from "tsyringe";
import { UserService } from "../user/user-service";
import { ICreateUserInput } from "../interfaces/create-user";
import { GraphQLError } from "graphql";
import { JwtService } from "./jwt-service";
import { AuthPayload } from "./entity/auth-payload";
import { LoginInput } from "./Dto/login-input";
import argon2 from "argon2";
import { JwtPayload } from "../interfaces/jwt-payload";

@injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signup(createUserInput: ICreateUserInput): Promise<AuthPayload | null> {
    const user = await this.userService.findByEmail(createUserInput.email);
    if (user) throw new GraphQLError("a account with this email exists");
    const createdUser = await this.userService.createUser(createUserInput);
    return this.getAuthPayload({
      sub: createdUser.id,
      name: createUserInput.name,
    });
  }

  async login(loginInput: LoginInput): Promise<AuthPayload | null> {
    const user = await this.userService.findByEmail(loginInput.email);

    if (!user || !(await argon2.verify(user.password, loginInput.password)))
      throw new GraphQLError("credentials aren't correct.");

    return this.getAuthPayload({
      sub: user.id,
      name: user.name!,
    });
  }

  async getAuthPayload(jwtPayload: JwtPayload): Promise<AuthPayload> {
    const token = this.jwtService.sign(jwtPayload);

    return { token: token, name: jwtPayload.name };
  }
}
