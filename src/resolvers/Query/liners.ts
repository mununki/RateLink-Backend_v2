export const liners = {
  getLiners: (root: any, args: any, context: any) => {
    return context.prisma.countrycity_liners();
  }
};
