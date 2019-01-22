import moment from "moment";
import {
  Account_myuser,
  Countrycity_liner,
  Countrycity_location,
  Rate_client,
  Rate_cntrtype,
  Rate_rateConnection
} from "../../../../generated/prisma-client";
import { Context, ContextWithUser, InputQueryParams, QueryParams, RateResponse } from "../../../types/resolver";
import getShowers from "../../../util/getShowers";
import privateResolver from "../../../util/privateResolver";

export default {
  Query: {
    getCNTRtypes: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<Rate_cntrtype[]> => {
        const selectedIp = await getShowers(ctx);

        if (args.showOurs) {
          const types = await ctx.prisma.rate_cntrtypes({
            where: {
              name_starts_with: args.search.toUpperCase(),
              rate_rates_some: { inputperson: { id_in: selectedIp } }
            }
          });
          return types;
        } else {
          const types = await ctx.prisma.rate_cntrtypes({
            where: {
              name_starts_with: args.search.toUpperCase()
            }
          });
          return types;
        }
      }
    ),
    getClients: privateResolver(
      async (root: any, args: any, ctx: Context): Promise<Rate_client[]> => {
        const selectedIp = await getShowers(ctx);

        const clients = await ctx.prisma.rate_clients({
          orderBy: "name_ASC",
          where: {
            name_starts_with: args.search.toUpperCase(),
            salesman: { id_in: selectedIp }
          }
        });

        return clients;
      }
    ),
    getInputpersons: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<Account_myuser[]> => {
        const showers = await ctx.prisma.account_myusers({
          where: {
            OR: [
              {
                account_myuserprofiles_some: {
                  profile_name_starts_with: args.search
                },
                account_ratereaders_showers_some: {
                  reader: { id: ctx.user.id }
                }
              },
              {
                account_myuserprofiles_some: {
                  profile_name_starts_with: args.search.toUpperCase()
                },
                account_ratereaders_showers_some: {
                  reader: { id: ctx.user.id }
                }
              }
            ]
          }
        });
        if (!args.search || args.search === "") {
          showers.push(ctx.user);
        }
        return showers;
      }
    ),
    getLiners: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<Countrycity_liner[]> => {
        if (args.showOurs) {
          const selectedIp = await getShowers(ctx);

          const liners = await ctx.prisma.countrycity_liners({
            orderBy: "label_ASC",
            where: {
              OR: [{ name_starts_with: args.search.toUpperCase() }, { label_starts_with: args.search.toUpperCase() }],
              rate_rates_some: { inputperson: { id_in: selectedIp } }
            }
          });

          return liners;
        } else {
          const liners = await ctx.prisma.countrycity_liners({
            orderBy: "label_ASC",
            where: {
              OR: [{ name_starts_with: args.search.toUpperCase() }, { label_starts_with: args.search.toUpperCase() }]
            }
          });

          return liners;
        }
      }
    ),
    getLocations: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<Countrycity_location[]> => {
        if (args.showOurs) {
          const selectedIp = await getShowers(ctx);

          if (args.polOrPod === "pol") {
            // query POLs
            const locations = await ctx.prisma.countrycity_locations({
              orderBy: "name_ASC",
              where: {
                name_starts_with: args.search.toUpperCase(),
                rate_rates_pols_some: { inputperson: { id_in: selectedIp } }
              }
            });

            return locations;
          } else {
            // query PODs
            const locations = await ctx.prisma.countrycity_locations({
              orderBy: "name_ASC",
              where: {
                name_starts_with: args.search.toUpperCase(),
                rate_rates_pods_some: { inputperson: { id_in: selectedIp } }
              }
            });

            return locations;
          }
        } else {
          // query all locations
          const locations = await ctx.prisma.countrycity_locations({
            orderBy: "name_ASC",
            where: {
              name_starts_with: args.search.toUpperCase()
            }
          });

          return locations;
        }
      }
    ),
    getRates: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<RateResponse> => {
        let inputQueryParams: InputQueryParams = {
          initialSF: "",
          initialST: "",
          selectedCt: [],
          selectedIp: [],
          selectedLn: [],
          selectedPd: [],
          selectedPl: [],
          selectedTy: []
        };

        try {
          inputQueryParams = JSON.parse(args.queryParams);
        } catch (err) {
          return { ok: false, data: null, error: "queryParams is invalid" };
        }

        const selectedIp = await getShowers(ctx);

        let queryParams: QueryParams = {
          deleted: false,
          effectiveDate_gte: moment()
            .startOf("month")
            .format(),
          effectiveDate_lte: moment().format(),
          inputperson: { id_in: selectedIp }
        };

        if (inputQueryParams.selectedIp && inputQueryParams.selectedIp.length > 0) {
          queryParams.inputperson.id_in = inputQueryParams.selectedIp.map(ip => ip.value);
        }
        if (inputQueryParams.selectedCt && inputQueryParams.selectedCt.length > 0) {
          queryParams = {
            ...queryParams,
            account: {
              id_in: inputQueryParams.selectedCt.map(client => client.value)
            }
          };
        }
        if (inputQueryParams.selectedLn && inputQueryParams.selectedLn.length > 0) {
          queryParams = {
            ...queryParams,
            liner: {
              id_in: inputQueryParams.selectedLn.map(liner => liner.value)
            }
          };
        }
        if (inputQueryParams.selectedPl && inputQueryParams.selectedPl.length > 0) {
          queryParams = {
            ...queryParams,
            pol: { id_in: inputQueryParams.selectedPl.map(pol => pol.value) }
          };
        }
        if (inputQueryParams.selectedPd && inputQueryParams.selectedPd.length > 0) {
          queryParams = {
            ...queryParams,
            pod: { id_in: inputQueryParams.selectedPd.map(pod => pod.value) }
          };
        }
        if (inputQueryParams.selectedTy && inputQueryParams.selectedTy.length > 0) {
          queryParams = {
            ...queryParams,
            type: { id_in: inputQueryParams.selectedTy.map(type => type.value) }
          };
        }
        if (inputQueryParams.initialSF) {
          queryParams.effectiveDate_gte = inputQueryParams.initialSF;
        }
        if (inputQueryParams.initialST) {
          queryParams.effectiveDate_lte = inputQueryParams.initialST;
        }

        let rates: Rate_rateConnection;
        try {
          rates = await ctx.prisma.rate_ratesConnection({
            after: args.after,
            before: args.before,
            first: args.first,
            last: args.last,
            orderBy: "id_DESC",
            where: queryParams
          });
        } catch (err) {
          return { ok: false, data: null, error: err };
        }

        return { ok: true, data: rates, error: null };
      }
    )
  }
};
