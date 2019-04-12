import { Rate_clientConnection, Rate_clientOrderByInput } from "../../../../generated/prisma-client";
import { GetMyClientsQueryArgs } from "../../../types/graph";
import { ContextWithUser, ClientResponse } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

interface IClientQueryParams {
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
      async (_: any, args: GetMyClientsQueryArgs, ctx: ContextWithUser): Promise<ClientResponse> => {
        const queryParams: IClientQueryParams = {
          orderBy: "name_ASC",
          where: {
            name_starts_with: args.search ? args.search.toUpperCase() : "",
            salesman: { id_in: ctx.user.id }
          }
        };
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

        let clients: Rate_clientConnection;
        try {
          clients = await ctx.prisma.rate_clientsConnection(queryParams);

          return {
            data: clients,
            error: null,
            ok: true
          };
        } catch (e) {
          return {
            data: null,
            error: "Failed to read clients",
            ok: false
          };
        }
      }
    )
  }
};
