import { Rate_clientConnection, Rate_clientOrderByInput } from "../../../../generated/prisma-client";
import { GetMyClientsQueryArgs } from "../../../types/graph";
import { ClientsResponse, ContextWithUser } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

interface IClientQueryParams {
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  orderBy: Rate_clientOrderByInput;
  where: {
    name_starts_with: string;
    salesman: { id_in: number };
  };
}

export default {
  Query: {
    getMyClients: privateResolver(
      async (_: any, args: GetMyClientsQueryArgs, ctx: ContextWithUser): Promise<ClientsResponse> => {
        const queryParams: IClientQueryParams = {
          orderBy: "recordedDate_DESC",
          where: {
            name_starts_with: args.search ? args.search.toUpperCase() : "",
            salesman: { id_in: ctx.user.id }
          }
        };
        if (args.skip) {
          queryParams.skip = args.skip;
        }
        if (args.after) {
          queryParams.after = args.after;
        }
        if (args.before) {
          queryParams.before = args.before;
        }
        if (args.first) {
          queryParams.first = args.first;
        }
        if (args.last) {
          queryParams.last = args.last;
        }

        let clients: any;
        let aggregate: any;
        try {
          clients = await ctx.prisma.rate_clientsConnection(queryParams);
          aggregate = await ctx.prisma.rate_clients({
            where: {
              name_starts_with: args.search ? args.search.toUpperCase() : "",
              salesman: { id_in: ctx.user.id }
            }
          });

          return {
            count: aggregate.length,
            data: clients,
            error: null,
            ok: true
          };
        } catch (e) {
          return {
            count: 0,
            data: null,
            error: "Failed to read clients",
            ok: false
          };
        }
      }
    )
  }
};
