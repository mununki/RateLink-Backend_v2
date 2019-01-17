import {
  Context,
  ContextWithUser,
  RateResponse,
  QueryParams,
  InputQueryParams
} from "../../../types/resolver";
import {
  Rate_rateConnection,
  Account_myuser,
  Rate_client,
  Countrycity_liner,
  Countrycity_location,
  Rate_cntrtype
} from "../../../../generated/prisma-client";
import moment from "moment";
import getShowers from "../../../util/getShowers";
import privateResolver from "../../../util/privateResolver";

export default {
  Query: {
    getRates: privateResolver(
      async (
        root: any,
        args: any,
        ctx: ContextWithUser
      ): Promise<RateResponse> => {
        let inputQueryParams: InputQueryParams = {
          selectedIp: [],
          selectedCt: [],
          selectedLn: [],
          selectedPl: [],
          selectedPd: [],
          selectedTy: [],
          initialSF: "",
          initialST: ""
        };

        try {
          inputQueryParams = JSON.parse(args.queryParams);
        } catch (err) {
          return { ok: false, data: null, error: "queryParams is invalid" };
        }

        const selectedIp = await getShowers(ctx);

        let queryParams: QueryParams = {
          inputperson: { id_in: selectedIp },
          effectiveDate_gte: moment()
            .startOf("month")
            .format(),
          effectiveDate_lte: moment().format(),
          deleted: false
        };

        if (
          inputQueryParams.selectedIp &&
          inputQueryParams.selectedIp.length > 0
        ) {
          queryParams.inputperson.id_in = inputQueryParams.selectedIp.map(
            ip => ip.value
          );
        }
        if (
          inputQueryParams.selectedCt &&
          inputQueryParams.selectedCt.length > 0
        ) {
          queryParams = {
            ...queryParams,
            account: {
              id_in: inputQueryParams.selectedCt.map(client => client.value)
            }
          };
        }
        if (
          inputQueryParams.selectedLn &&
          inputQueryParams.selectedLn.length > 0
        ) {
          queryParams = {
            ...queryParams,
            liner: {
              id_in: inputQueryParams.selectedLn.map(liner => liner.value)
            }
          };
        }
        if (
          inputQueryParams.selectedPl &&
          inputQueryParams.selectedPl.length > 0
        ) {
          queryParams = {
            ...queryParams,
            pol: { id_in: inputQueryParams.selectedPl.map(pol => pol.value) }
          };
        }
        if (
          inputQueryParams.selectedPd &&
          inputQueryParams.selectedPd.length > 0
        ) {
          queryParams = {
            ...queryParams,
            pod: { id_in: inputQueryParams.selectedPd.map(pod => pod.value) }
          };
        }
        if (
          inputQueryParams.selectedTy &&
          inputQueryParams.selectedTy.length > 0
        ) {
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
            where: queryParams,
            first: args.first,
            last: args.last,
            orderBy: "id_DESC",
            before: args.before,
            after: args.after
          });
        } catch (err) {
          return { ok: false, data: null, error: err };
        }

        return { ok: true, data: rates, error: null };
      }
    ),
    getInputpersons: privateResolver(
      async (
        root: any,
        args: any,
        ctx: ContextWithUser
      ): Promise<Account_myuser[]> => {
        const showers = await ctx.prisma.account_myusers({
          where: {
            OR: [
              {
                account_ratereaders_showers_some: {
                  reader: { id: ctx.user.id }
                },
                account_myuserprofiles_some: {
                  profile_name_starts_with: args.search
                }
              },
              {
                account_ratereaders_showers_some: {
                  reader: { id: ctx.user.id }
                },
                account_myuserprofiles_some: {
                  profile_name_starts_with: args.search.toUpperCase()
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
    getClients: privateResolver(
      async (root: any, args: any, ctx: Context): Promise<Rate_client[]> => {
        const selectedIp = await getShowers(ctx);

        const clients = await ctx.prisma.rate_clients({
          where: {
            salesman: { id_in: selectedIp },
            name_starts_with: args.search.toUpperCase()
          },
          orderBy: "name_ASC"
        });

        return clients;
      }
    ),
    getLiners: privateResolver(
      async (
        root: any,
        args: any,
        ctx: ContextWithUser
      ): Promise<Countrycity_liner[]> => {
        if (args.showOurs) {
          const selectedIp = await getShowers(ctx);

          const liners = await ctx.prisma.countrycity_liners({
            where: {
              rate_rates_some: { inputperson: { id_in: selectedIp } },
              OR: [
                { name_starts_with: args.search.toUpperCase() },
                { label_starts_with: args.search.toUpperCase() }
              ]
            },
            orderBy: "label_ASC"
          });

          return liners;
        } else {
          const liners = await ctx.prisma.countrycity_liners({
            where: {
              OR: [
                { name_starts_with: args.search.toUpperCase() },
                { label_starts_with: args.search.toUpperCase() }
              ]
            },
            orderBy: "label_ASC"
          });

          return liners;
        }
      }
    ),
    getLocations: privateResolver(
      async (
        root: any,
        args: any,
        ctx: ContextWithUser
      ): Promise<Countrycity_location[]> => {
        if (args.showOurs) {
          const selectedIp = await getShowers(ctx);

          if (args.polOrPod === "pol") {
            // query POLs
            const locations = await ctx.prisma.countrycity_locations({
              where: {
                rate_rates_pols_some: { inputperson: { id_in: selectedIp } },
                name_starts_with: args.search.toUpperCase()
              },
              orderBy: "name_ASC"
            });

            return locations;
          } else {
            // query PODs
            const locations = await ctx.prisma.countrycity_locations({
              where: {
                rate_rates_pods_some: { inputperson: { id_in: selectedIp } },
                name_starts_with: args.search.toUpperCase()
              },
              orderBy: "name_ASC"
            });

            return locations;
          }
        } else {
          // query all locations
          const locations = await ctx.prisma.countrycity_locations({
            where: {
              name_starts_with: args.search.toUpperCase()
            },
            orderBy: "name_ASC"
          });

          return locations;
        }
      }
    ),
    getCNTRtypes: privateResolver(
      async (
        root: any,
        args: any,
        ctx: ContextWithUser
      ): Promise<Rate_cntrtype[]> => {
        const selectedIp = await getShowers(ctx);

        if (args.showOurs) {
          const types = await ctx.prisma.rate_cntrtypes({
            where: {
              rate_rates_some: { inputperson: { id_in: selectedIp } },
              name_starts_with: args.search.toUpperCase()
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
    )
  }
};