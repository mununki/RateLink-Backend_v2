import { ContextWithUser, Context } from "../../types/resolver";
import privateResolver from "../../util/privateResolver";
import { UserResponse } from "../../types/resolver";
import { Account_myuser } from "../../../generated/prisma-client";

export const user = {
  me: privateResolver(
    async (
      root: any,
      args: any,
      ctx: ContextWithUser
    ): Promise<UserResponse> => {
      return { ok: true, data: ctx.user, error: null };
    }
  ),
  findUsers: async (
    root: any,
    args: any,
    ctx: ContextWithUser
  ): Promise<Account_myuser[]> => {
    if (!ctx.user) throw new Error("Login Required!");

    const users = await ctx.prisma.account_myusers({
      where: {
        AND: [
          { email: args.email },
          { nickname: args.nickname },
          {
            account_myuserprofiles_some: {
              profile_name_contains: args.profile_name
            }
          },
          { account_myuserprofiles_some: { company_contains: args.company } }
        ]
      },
      orderBy: "nickname_ASC"
    });

    const usersExceptMe = users.filter(user => user.id !== ctx.user.id);

    return usersExceptMe;
  },
  checkIfExist: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<boolean> => {
    const users = await ctx.prisma.account_myusers({
      where: { email: args.email }
    });

    return users.length > 0;
  }
};
