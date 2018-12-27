import { Context } from "../../types/resolver";
import { Account_myuser } from "../../../generated/prisma-client";

export const user = {
  me: async (root: any, args: any, ctx: Context): Promise<Account_myuser> => {
    if (ctx.user) {
      return ctx.user;
    } else {
      throw new Error("Not logged in");
    }
  }
};
