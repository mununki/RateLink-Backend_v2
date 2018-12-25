import { Context } from "../index";

export const user = {
  me: async (root: any, args: any, ctx: Context) => {
    if (ctx.user) {
      return ctx.user;
    } else {
      throw new Error("Not logged in");
    }
  }
};
