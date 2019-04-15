import moment from "moment";
import { SaveMyClientMutationArgs } from "../../../types/graph";
import { ClientResponse, ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Mutation: {
    saveMyClient: privateResolver(
      async (_: any, args: SaveMyClientMutationArgs, ctx: ContextWithUser): Promise<ClientResponse> => {
        try {
          const checkIfExist = await ctx.prisma.rate_clients({
            where: { name: args.name, salesman: { id_in: ctx.user.id } }
          });

          if (checkIfExist.length > 0) {
            return { ok: false, error: "Already exists", client: null };
          }

          const client = await ctx.prisma.createRate_client({
            name: args.name,
            recordedDate: moment().format(),
            remarks: args.remark ? args.remark : "",
            salesman: {
              connect: {
                id: ctx.user.id
              }
            }
          });

          return { ok: true, error: null, client };
        } catch (e) {
          return { ok: false, error: "Faied to save", client: null };
        }
      }
    )
  }
};
