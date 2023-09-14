import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "./modules/interfaces/jwt-payload";
import { FastifyReply, FastifyRequest } from "fastify";
import { ApolloFastifyContextFunction } from "@as-integrations/fastify";

export type ContextType = {
  req: FastifyRequest;
  rep: FastifyReply;
  jwtPayload?: JwtPayload;
};
  
export  const myContextFunction: ApolloFastifyContextFunction<ContextType> = async (
  request,
  reply
) => ({
  req: request,
  rep: reply,
});
