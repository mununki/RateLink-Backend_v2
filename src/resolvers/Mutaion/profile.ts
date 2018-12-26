import { Context } from "../../types/resolver";

const checkVaildJob_boolean = (inputJob: string): boolean => {
  const ENUM = ["1", "2", "3"]; // 1: 선사, 2: 포워더, 3: 기타
  return ENUM.filter(job => job === inputJob).length === 1;
};

export const profile = {
  profileUpdate: async (root: any, args: any, ctx: Context) => {
    const { company, image, job_boolean, profile_name } = args;
    if (!checkVaildJob_boolean(job_boolean))
      throw new Error("Job selection is invalid");
    if (!ctx.user) throw new Error("Log in required");
    const profile = await ctx.prisma.account_myuserprofilesConnection({
      where: { owner: { id: ctx.user.id } }
    });
    await ctx.prisma.updateAccount_myuserprofile({
      where: { id: profile.edges[0].node.id },
      data: { company, image, job_boolean, profile_name }
    });
    return ctx.user;
  }
};
