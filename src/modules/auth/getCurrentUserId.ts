import { createParamDecorator } from "type-graphql";
import { ContextType } from "../../context";

export function getCurrentUserId() {
  return createParamDecorator<ContextType>(
    ({ context }) => context.jwtPayload?.sub
  );
}
