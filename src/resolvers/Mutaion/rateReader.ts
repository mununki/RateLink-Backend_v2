import { Context } from "../../types/resolver";
import { Account_myuser } from "../../../generated/prisma-client";

export const rateReaderMutation = {
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

    // Prisma has a bug about connect to relation fields.
    // Currently, only solution is removing 'Not Null constraint' in DB.
    // If Prisma fixes the bug, it needs to add 'Not Null constraint' again.
    const newRateReader = await ctx.prisma.createAccount_ratereader({
      shower: { connect: { id: ctx.user.id } },
      reader: { connect: { id: args.userId } },
      relationship_date: new Date() // 2015-11-22T13:57:31.123Z
    });

    const newRateReaderUser = await ctx.prisma.account_myusers({
      where: { account_ratereaders_readers_some: { id: newRateReader.id } }
    });

    return newRateReaderUser[0];
  },
  removeRateReader: async (
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
    const index = readers.findIndex(reader => reader.id === args.userId);
    if (index < 0) throw new Error("Not added yet");

    await ctx.prisma.deleteManyAccount_ratereaders({
      shower: { id: ctx.user.id },
      reader: { id: args.userId }
    });

    return readers[index];
  }
};
