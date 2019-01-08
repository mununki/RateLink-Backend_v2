import { Context, UserResponse } from "../../types/resolver";

const checkVaildJob_boolean = (inputJob: string): boolean => {
  const ENUM = ["1", "2", "3"]; // 1: 선사, 2: 포워더, 3: 기타
  return ENUM.filter(job => job === inputJob).length === 1;
};

export const profile = {
  updateProfile: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<UserResponse> => {
    const { company, image, job_boolean, profile_name } = args;
    if (!checkVaildJob_boolean(job_boolean))
      return { ok: false, data: null, error: "Invalid job selected" };

    if (!ctx.user) return { ok: false, data: null, error: "Log in required!" };

    const profile = await ctx.prisma.account_myuserprofilesConnection({
      where: { owner: { id: ctx.user.id } }
    });

    await ctx.prisma.updateAccount_myuserprofile({
      where: { id: profile.edges[0].node.id },
      data: { company, image, job_boolean, profile_name }
    });

    return { ok: true, data: ctx.user, error: null };
  }
};
