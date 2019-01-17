import { Context } from "../../../types/resolver";
import {
  Account_myuser,
  Rate_client,
  Countrycity_liner,
  Countrycity_location,
  Rate_cntrtype
} from "../../../../generated/prisma-client";

export default {
  Rate: {
    inputperson: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Account_myuser> => {
      const inputperson = await ctx.prisma.account_myusers({
        where: { rate_rates_some: { id: root.id } }
      });
      return inputperson[0];
    },
    client: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Rate_client> => {
      const client = await ctx.prisma.rate_clients({
        where: { rate_rates_some: { id: root.id } }
      });
      return client[0];
    },
    liner: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Countrycity_liner> => {
      const liner = await ctx.prisma.countrycity_liners({
        where: { rate_rates_some: { id: root.id } }
      });
      return liner[0];
    },
    pol: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Countrycity_location> => {
      const pol = await ctx.prisma.countrycity_locations({
        where: { rate_rates_pols_some: { id: root.id } }
      });
      return pol[0];
    },
    pod: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Countrycity_location> => {
      const pod = await ctx.prisma.countrycity_locations({
        where: { rate_rates_pods_some: { id: root.id } }
      });
      return pod[0];
    },
    cntrtype: async (
      root: any,
      args: any,
      ctx: Context
    ): Promise<Rate_cntrtype> => {
      const cntrtype = await ctx.prisma.rate_cntrtypes({
        where: { rate_rates_some: { id: root.id } }
      });
      return cntrtype[0];
    }
  }
};
