import { Context, LoginResponse } from "../../../types/resolver";
import createJWT from "../../../util/createJWT";
import { comparePW, generatePW } from "../../../util/password";

export default {
  Mutation: {
    login: async (root: any, args: any, ctx: Context): Promise<LoginResponse> => {
      const user = await ctx.prisma.account_myuser({ email: args.email });

      if (!user) {
        return {
          data: {
            token: null,
            user: null
          },
          error: `No such user found for email: ${args.email}`,
          ok: false
        };
      }

      const valid = await comparePW(user.password, args.password);

      if (!valid) {
        return {
          data: {
            token: null,
            user: null
          },
          error: "Invalid Password",
          ok: false
        };
      }

      const token = await createJWT(user.id);

      return {
        data: {
          token,
          user
        },
        error: null,
        ok: true
      };
    },
    signup: async (root: any, args: any, ctx: Context): Promise<LoginResponse> => {
      if (args.email === "" || args.password === "" || args.nickname === "") {
        return {
          data: { token: null, user: null },
          error: "Required input missing!",
          ok: false
        };
      }
      // check if user is already existing
      const existingUser = await ctx.prisma.account_myuser({
        email: args.email
      });
      if (existingUser) {
        return {
          data: { token: null, user: null },
          error: "Already signed up",
          ok: false
        };
      }

      const hashedPassword = await generatePW(args.password);
      if (hashedPassword) {
        const user = await ctx.prisma.createAccount_myuser({
          account_myuserprofiles: {
            create: {
              company: args.company ? args.company : "",
              image: args.image ? args.image : "",
              job_boolean: args.job_boolean ? args.job_boolean : "",
              profile_name: args.nickname
            }
          },
          email: args.email,
          is_active: true,
          is_admin: false,
          nickname: args.nickname,
          password: hashedPassword
        });

        const token = await createJWT(user.id);

        return {
          data: {
            token,
            user
          },
          error: null,
          ok: true
        };
      } else {
        return {
          data: {
            token: null,
            user: null
          },
          error: "Password not hashed!",
          ok: false
        };
      }
    }
  }
};
