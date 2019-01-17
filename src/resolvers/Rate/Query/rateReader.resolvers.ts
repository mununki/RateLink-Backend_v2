import { Context } from "../../../types/resolver";
import { Account_myuser } from "../../../../generated/prisma-client";

export default {
  Query: {
    getReaders: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Account_myuser[]> => {
      if (!ctx.user) throw new Error("Log in required");
      const readers = await ctx.prisma.account_myusers({
        where: {
          account_ratereaders_readers_some: { shower: { id: ctx.user.id } }
        },
        orderBy: "nickname_ASC"
      });
      return readers;
    },
    getShowers: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Account_myuser[]> => {
      if (!ctx.user) throw new Error("Log in required");
      const showers = await ctx.prisma.account_myusers({
        where: {
          account_ratereaders_showers_some: { reader: { id: ctx.user.id } }
        },
        orderBy: "nickname_ASC"
      });
      return showers;
    }
  }
};
