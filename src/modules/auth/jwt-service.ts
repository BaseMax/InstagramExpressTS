import { JwtPayload } from "jsonwebtoken";
import { inject } from "tsyringe";
import jwt from "jsonwebtoken";
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
}
