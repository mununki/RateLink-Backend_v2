import { Context } from "../../types/resolver";
import { Account_myuser } from "../../../generated/prisma-client";

export const mutationRateReader = {
  addRateReader: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<Account_myuser> => {
    if (!ctx.user) throw new Error("Log in required");

    const readers = await ctx.prisma.account_myusers({
      where: {
        account_ratereaders_readers_some: { shower: { id: ctx.user.id } }
      }
    });
    if (readers.find(reader => reader.id === args.userId))
      throw new Error("Already added");

    const newRateReader = await ctx.prisma.createAccount_ratereader({
      shower: { connect: { id: ctx.user.id } },
      reader: { connect: { id: args.userId } },
      relationship_date: new Date() // 2015-11-22T13:57:31.123Z
    });

    return ctx.user; // await Prisma bug fix relating `connect`
  }
  // removeRateReader: async (
  //   root: any,
  //   args: any,
  //   ctx: Context
  // ): Promise<Account_myuser> => {}
};
