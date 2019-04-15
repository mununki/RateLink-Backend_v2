import { GetMyClientQueryArgs } from "../../../types/graph";
import { ClientResponse, ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Query: {
    getMyClient: privateResolver(
      async (_: any, args: GetMyClientQueryArgs, ctx: ContextWithUser): Promise<ClientResponse> => {
        try {
          const client = await ctx.prisma.rate_client({ id: args.clientId });
          return { ok: true, error: null, client };
        } catch (e) {
          return { ok: false, error: "Not existing client", client: null };
        }
      }
    )
  }
};
