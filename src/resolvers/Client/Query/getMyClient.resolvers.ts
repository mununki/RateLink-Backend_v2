import { Rate_client } from "../../../../generated/prisma-client";
import { GetMyClientQueryArgs } from "../../../types/graph";
import { ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Query: {
    getMyClient: privateResolver(
      async (_: any, args: GetMyClientQueryArgs, ctx: ContextWithUser): Promise<Rate_client | null> => {
        try {
          const client = await ctx.prisma.rate_client({ id: args.clientId });
          return client;
        } catch (e) {
          return null;
        }
      }
    )
  }
};
