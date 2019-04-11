import { Rate_client } from "../../../../generated/prisma-client";
import { GetMyClientsQueryArgs } from "../../../types/graph";
import { ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

export default {
  Query: {
    getMyClients: privateResolver(
      async (_: any, args: GetMyClientsQueryArgs, ctx: ContextWithUser): Promise<Rate_client[]> => {
        try {
          const clients = await ctx.prisma.rate_clients({
            orderBy: "name_ASC",
            where: {
              name_starts_with: args.search ? args.search.toUpperCase() : "",
              salesman: { id_in: ctx.user.id }
            }
          });

          return clients;
        } catch (e) {
          return [];
        }
      }
    )
  }
};
