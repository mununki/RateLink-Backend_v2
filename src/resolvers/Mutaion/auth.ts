import { Context, LoginResponse } from "../../types/resolver";
import { comparePW, generatePW } from "../../util/password";
import createJWT from "../../util/createJWT";

export const auth = {
  signup: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<LoginResponse> => {
    if (args.email === "" || args.password === "" || args.nickname === "")
      return {
        ok: false,
        data: { token: null, user: null },
        error: "Required input missing!"
      };
    // check if user is already existing
    const existingUser = await ctx.prisma.account_myuser({ email: args.email });
    if (existingUser)
      return {
        ok: false,
        data: { token: null, user: null },
        error: "Already signed up"
      };

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
        ok: true,
        data: {
          token,
          user
        },
        error: null
      };
    } else {
      return {
        ok: false,
        data: {
          token: null,
          user: null
        },
        error: "Password not hashed!"
      };
    }
  },
  login: async (root: any, args: any, ctx: Context): Promise<LoginResponse> => {
    const user = await ctx.prisma.account_myuser({ email: args.email });

    if (!user) {
      return {
        ok: false,
        data: {
          token: null,
          user: null
        },
        error: `No such user found for email: ${args.email}`
      };
    }

    const valid = await comparePW(user.password, args.password);

    if (!valid) {
      return {
        ok: false,
        data: {
          token: null,
          user: null
        },
        error: "Invalid Password"
      };
    }

    const token = await createJWT(user.id);

    return {
      ok: true,
      data: {
        token,
        user
      },
      error: null
    };
  }
};
