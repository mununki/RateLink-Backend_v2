import { Context, ContextWithUser } from "../../types/resolver";
import { Account_myuser } from "../../../generated/prisma-client";
import privateResolver from "../../util/privateResolver";

export const user = {
  me: privateResolver(
    async (
      root: any,
      args: any,
      ctx: ContextWithUser
    ): Promise<Account_myuser> => {
      return ctx.user;
    }
  )
};
