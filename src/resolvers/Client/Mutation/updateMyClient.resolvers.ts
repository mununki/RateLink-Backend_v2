import moment from "moment";
import { UpdateMyClientMutationArgs } from "../../../types/graph";
import { ClientResponse, ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Mutation: {
    updateMyClient: privateResolver(
      async (_: any, args: UpdateMyClientMutationArgs, ctx: ContextWithUser): Promise<ClientResponse> => {
        try {
          const prevClient = await ctx.prisma.rate_client({ id: args.clientId });

          if (!prevClient) {
            return { ok: false, error: "Not existing client", client: null };
          }

          if (args.name) {
            const checkIfExist = await ctx.prisma.rate_clients({ where: { name: args.name } });
            if (checkIfExist.length > 0) {
              return { ok: false, error: "Already exists", client: null };
            }
          }

          const client = await ctx.prisma.updateRate_client({
            data: {
              name: args.name ? args.name : prevClient.name,
              recordedDate: moment().format(),
              remarks: args.remark ? args.remark : prevClient.remarks
            },
            where: {
              id: args.clientId
            }
          });

          return { ok: true, error: null, client };
        } catch (e) {
          return { ok: false, error: "Failed to update", client: null };
        }
      }
    )
  }
};
