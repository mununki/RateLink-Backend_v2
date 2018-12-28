import { Context } from "../types/resolver";
import { Account_myuser } from "../../generated/prisma-client";

const getShowers = async (ctx: Context): Promise<number[]> => {
  if (!ctx.user) return [];
  // query user + showers input locations
  const showers = await ctx.prisma.account_myusers({
    where: {
      account_ratereaders_showers_some: { reader: { id: ctx.user.id } }
    }
  });
  const showersIp = showers.map((shower: Account_myuser) => shower.id);
  const selectedIp = [...showersIp, ctx.user.id]; // add ctx.user.id
  return selectedIp;
};

export default getShowers;
