import moment = require("moment");
import { Rate_client } from "../../../../generated/prisma-client";
import { SaveMyClientsMutationArgs } from "../../../types/graph";
import { ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Mutation: {
    saveMyClients: privateResolver(
      async (_: any, args: SaveMyClientsMutationArgs, ctx: ContextWithUser): Promise<Rate_client | null> => {
        try {
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

          return client;
        } catch (e) {
          return null;
        }
      }
    )
  }
};
