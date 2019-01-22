import {
  Account_myuser,
  Countrycity_liner,
  Countrycity_location,
  Rate_client,
  Rate_cntrtype
} from "../../../../generated/prisma-client";
import { Context } from "../../../types/resolver";

export default {
  Rate: {
    client: async (root: any, args: any, ctx: Context): Promise<Rate_client> => {
      const client = await ctx.prisma.rate_clients({
        where: { rate_rates_some: { id: root.id } }
      });
      return client[0];
    },
    cntrtype: async (root: any, args: any, ctx: Context): Promise<Rate_cntrtype> => {
      const cntrtype = await ctx.prisma.rate_cntrtypes({
        where: { rate_rates_some: { id: root.id } }
      });
      return cntrtype[0];
    },
    inputperson: async (root: any, args: any, ctx: Context): Promise<Account_myuser> => {
      const inputperson = await ctx.prisma.account_myusers({
        where: { rate_rates_some: { id: root.id } }
      });
      return inputperson[0];
    },
    liner: async (root: any, args: any, ctx: Context): Promise<Countrycity_liner> => {
      const liner = await ctx.prisma.countrycity_liners({
        where: { rate_rates_some: { id: root.id } }
      });
      return liner[0];
    },
    pod: async (root: any, args: any, ctx: Context): Promise<Countrycity_location> => {
      const pod = await ctx.prisma.countrycity_locations({
        where: { rate_rates_pods_some: { id: root.id } }
      });
      return pod[0];
    },
    pol: async (root: any, args: any, ctx: Context): Promise<Countrycity_location> => {
      const pol = await ctx.prisma.countrycity_locations({
        where: { rate_rates_pols_some: { id: root.id } }
      });
      return pol[0];
    }
  }
};
