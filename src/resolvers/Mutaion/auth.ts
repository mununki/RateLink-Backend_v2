import { Context } from "../index";
import { comparePW, generatePW } from "../../util/password";
import createJWT from "../../util/createJWT";
import { Account_myuser } from "../../../generated/prisma-client";

export const auth = {
  signup: async (root: any, args: any, ctx: Context) => {
    // check if user is already existing
    const existingUser = await ctx.prisma.account_myuser({ email: args.email });
    if (existingUser) throw new Error("Already Signed up!");

    const hashedPassword = await generatePW(args.password);
    if (hashedPassword) {
      const user = await ctx.prisma.createAccount_myuser({
        email: args.email,
        password: hashedPassword,
        nickname: args.nickname,
        is_active: true,
        is_admin: false,
        account_myuserprofiles: {
          create: {
            profile_name: args.nickname,
            company: args.company ? args.company : "",
            image: args.image ? args.image : "",
            job_boolean: args.job_boolean ? args.job_boolean : ""
          }
        }
      });

      const token = await createJWT(user.id);

      return {
        token,
        user
      };
    }
  },
  login: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<{ token: string; user: Account_myuser }> => {
    const user = await ctx.prisma.account_myuser({ email: args.email });

    if (!user) {
      throw new Error(`No such user found for email: ${args.email}`);
    }

    const valid = await comparePW(user.password, args.password);

    if (!valid) {
      throw new Error("Invalid password");
    }

    const token = await createJWT(user.id);

    return {
      token,
      user
    };
  }
};
