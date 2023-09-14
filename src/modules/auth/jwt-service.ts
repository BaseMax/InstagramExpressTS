import { JwtPayload } from "../interfaces/jwt-payload";
import { inject, injectable } from "tsyringe";
import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";

@injectable()
export class JwtService {
  constructor(
    @inject("jwt-secret") private jwtSecret: string,
    @inject("jwt-expireTime") private jwtExpireTime: number
  ) {}
  sign(jwtPayload: JwtPayload) {
    return jwt.sign(jwtPayload, this.jwtSecret, {
      expiresIn: this.jwtExpireTime,
    });
  }

  verify<P>(token: string): P {
    try {
      return jwt.verify(token, this.jwtSecret) as P;
    } catch {
      throw new GraphQLError("you should login");
    }
  }
}
