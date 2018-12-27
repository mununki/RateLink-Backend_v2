import { Context } from "../../types/resolver";
import { Rate_rateConnection } from "../../../generated/prisma-client";
import moment from "moment";
import { QueryParams } from "../../types/resolver";

export const rates = {
  getRates: async (
    root: any,
    args: any,
    ctx: Context
  ): Promise<Rate_rateConnection> => {
    if (!ctx.user) throw new Error("Log in required");

    let inputQueryParams = {
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
      throw new Error("queryParams is invalid");
    }

    const showers = await ctx.prisma.account_myusers({
      where: {
        account_ratereaders_showers_some: { reader: { id: ctx.user.id } }
      }
    });

    const showersIp = showers.map(shower => shower.id);
    const selectedIp = [...showersIp, ctx.user.id]; // add ctx.user.id

    let queryParams: QueryParams = {
      inputperson: { id_in: selectedIp },
      effectiveDate_gte: moment()
        .startOf("month")
        .format(),
      effectiveDate_lte: moment().format()
    };

    if (inputQueryParams.selectedIp && inputQueryParams.selectedIp.length > 0) {
      queryParams.inputperson.id_in = inputQueryParams.selectedIp;
    }
    if (inputQueryParams.selectedCt && inputQueryParams.selectedCt.length > 0) {
      queryParams = {
        ...queryParams,
        account: { id_in: inputQueryParams.selectedCt }
      };
    }
    if (inputQueryParams.selectedLn && inputQueryParams.selectedLn.length > 0) {
      queryParams = {
        ...queryParams,
        liner: { id_in: inputQueryParams.selectedLn }
      };
    }
    if (inputQueryParams.selectedPl && inputQueryParams.selectedPl.length > 0) {
      queryParams = {
        ...queryParams,
        pol: { id_in: inputQueryParams.selectedPl }
      };
    }
    if (inputQueryParams.selectedPd && inputQueryParams.selectedPd.length > 0) {
      queryParams = {
        ...queryParams,
        pod: { id_in: inputQueryParams.selectedPd }
      };
    }
    if (inputQueryParams.selectedTy && inputQueryParams.selectedTy.length > 0) {
      queryParams = {
        ...queryParams,
        type: { id_in: inputQueryParams.selectedTy }
      };
    }
    if (inputQueryParams.initialSF) {
      queryParams.effectiveDate_gte = inputQueryParams.initialSF;
    }
    if (inputQueryParams.initialST) {
      queryParams.effectiveDate_lte = inputQueryParams.initialST;
    }

    const rates = await ctx.prisma.rate_ratesConnection({
      where: queryParams,
      first: args.first,
      last: args.last,
      orderBy: "recordedDate_DESC",
      before: args.before,
      after: args.after
    });

    return rates;
  }
};
