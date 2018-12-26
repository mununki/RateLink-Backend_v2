import { Context } from "../../types/resolver";

export const liners = {
  getLiners: (root: any, args: any, context: Context) => {
    return context.prisma.countrycity_liners();
  }
};
