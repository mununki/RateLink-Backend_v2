import { Context } from "../types/resolver";

export const User = {
  profile: async (root: any, args: any, ctx: Context) => {
    const myProfile = await ctx.prisma.account_myuserprofiles({
      where: { owner: { id: root.id } }
    });
    return myProfile[0];
  }
};
