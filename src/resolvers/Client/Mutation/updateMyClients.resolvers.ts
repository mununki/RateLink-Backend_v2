import moment = require("moment");
import { Rate_client } from "../../../../generated/prisma-client";
import { UpdateMyClientsMutationArgs } from "../../../types/graph";
import { ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Mutation: {
    updateMyClients: privateResolver(
      async (_: any, args: UpdateMyClientsMutationArgs, ctx: ContextWithUser): Promise<Rate_client | null> => {
        try {
          const prevClient = await ctx.prisma.rate_client({ id: args.clientId });

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

          return client;
        } catch (e) {
          return null;
        }
      }
    )
  }
};
