import moment = require("moment");
import { Rate_rate, Rate_ratePromise } from "../../../../generated/prisma-client";
import { ContextWithUser, newRateSelectedField } from "../../../types/resolver";
import privateResolver from "../../../util/privateResolver";

// newRate: {
//   selectedIp: [{ value: this.props.USER_ID }],
//   selectedCt: [{ value: 1, label: 'FAK'}],
//   selectedLn: [{ value: 1, label: 'HMM'}, {...}, ...],
//   selectedPl: [{ value: 1, label: 'BUSAN'}],
//   selectedPd: [{ value: 1, label: 'SHANGHAI'}],
//   selectedTy: [{ value: 1, label: 'DC'}],
//   buying20: this.props.rate ? this.props.rate.buying20 : 0,
//   buying40: this.props.rate ? this.props.rate.buying40 : 0,
//   buying4H: this.props.rate ? this.props.rate.buying4H : 0,
//   selling20: this.props.rate ? this.props.rate.selling20 : 0,
//   selling40: this.props.rate ? this.props.rate.selling40 : 0,
//   selling4H: this.props.rate ? this.props.rate.selling4H : 0,
//   loadingFT: this.props.rate ? this.props.rate.loadingFT : 0,
//   dischargingFT: this.props.rate ? this.props.rate.dischargingFT : 0,
//   initialod: this.props.rate
//     ? moment(this.props.rate.offeredDate)
//     : moment(),
//   initialed: this.props.rate
//     ? moment(this.props.rate.effectiveDate)
//     : moment().endOf("month"),
//   remark: this.props.rate ? this.props.rate.remark : ""
// }

const saveMultipleRates = async (inputNewRate: any, ctx: ContextWithUser): Promise<Rate_rate[]> => {
  const rates: Rate_rate[] = [];

  await Promise.all(
    inputNewRate.selectedCt.map(
      async (client: newRateSelectedField) =>
        await Promise.all(
          inputNewRate.selectedLn.map(
            async (liner: newRateSelectedField) =>
              await Promise.all(
                inputNewRate.selectedPl.map(
                  async (pol: newRateSelectedField) =>
                    await Promise.all(
                      inputNewRate.selectedPd.map(
                        async (pod: newRateSelectedField) =>
                          await Promise.all(
                            inputNewRate.selectedTy.map(async (type: newRateSelectedField) => {
                              const rate = await ctx.prisma.createRate_rate({
                                account: { connect: { id: client.value } },
                                buying20: parseInt(inputNewRate.buying20, 10),
                                buying40: parseInt(inputNewRate.buying40, 10),
                                buying4H: parseInt(inputNewRate.buying4H, 10),
                                deleted: false,
                                dischargingFT: parseInt(inputNewRate.dischargingFT, 10),
                                effectiveDate: moment(inputNewRate.effectiveDate).format(),
                                inputperson: { connect: { id: ctx.user.id } },
                                liner: { connect: { id: liner.value } },
                                loadingFT: parseInt(inputNewRate.loadingFT, 10),
                                offeredDate: moment(inputNewRate.offeredDate).format(),
                                pod: { connect: { id: pod.value } },
                                pol: { connect: { id: pol.value } },
                                recordedDate: moment().format(),
                                remark: inputNewRate.remark,
                                selling20: parseInt(inputNewRate.selling20, 10),
                                selling40: parseInt(inputNewRate.selling40, 10),
                                selling4H: parseInt(inputNewRate.selling4H, 10),
                                type: { connect: { id: type.value } }
                              });
                              rates.push(rate);
                            })
                          )
                      )
                    )
                )
              )
          )
        )
    )
  );
  return rates;
};

export default {
  Mutation: {
    setRate: privateResolver(
      async (root: any, args: any, ctx: ContextWithUser): Promise<Rate_rate[]> => {
        const rates: Rate_rate[] = [];
        if (args.handler === "add") {
          const inputNewRate = JSON.parse(args.newRate);
          return saveMultipleRates(inputNewRate, ctx); // add rates
        } else if (args.handler === "modify") {
          if (!args.rateId) {
            throw new Error("rateId is missing!");
          }

          const prevInputperson = await ctx.prisma.account_myusers({
            where: { rate_rates_some: { id: args.rateId } }
          });

          if (prevInputperson[0].id !== ctx.user.id) {
            throw new Error("This is not your rate.");
          }

          const inputNewRate = JSON.parse(args.newRate);
          const rate = await ctx.prisma.updateRate_rate({
            // modify rate
            data: {
              account: { connect: { id: inputNewRate.selectedCt[0].value } },
              buying20: parseInt(inputNewRate.buying20, 10),
              buying40: parseInt(inputNewRate.buying40, 10),
              buying4H: parseInt(inputNewRate.buying4H, 10),
              deleted: false,
              dischargingFT: parseInt(inputNewRate.dischargingFT, 10),
              effectiveDate: moment(inputNewRate.effectiveDate).format(),
              inputperson: { connect: { id: ctx.user.id } },
              liner: { connect: { id: inputNewRate.selectedLn[0].value } },
              loadingFT: parseInt(inputNewRate.loadingFT, 10),
              offeredDate: moment(inputNewRate.offeredDate).format(),
              pod: { connect: { id: inputNewRate.selectedPd[0].value } },
              pol: { connect: { id: inputNewRate.selectedPl[0].value } },
              recordedDate: moment().format(),
              remark: inputNewRate.remark,
              selling20: parseInt(inputNewRate.selling20, 10),
              selling40: parseInt(inputNewRate.selling40, 10),
              selling4H: parseInt(inputNewRate.selling4H, 10),
              type: { connect: { id: inputNewRate.selectedTy[0].value } }
            },
            where: { id: args.rateId }
          });
          rates.push(rate);

          return rates;
        } else if (args.handler === "duplicate") {
          if (!args.rateId) {
            throw new Error("rateId is missing!");
          }

          const targetRate = await ctx.prisma.rate_rates({
            where: { id: args.rateId }
          });
          const targetRateClient = await ctx.prisma.rate_clients({
            where: { rate_rates_some: { id: args.rateId } }
          });
          const targetRateLiner = await ctx.prisma.countrycity_liners({
            where: { rate_rates_some: { id: args.rateId } }
          });
          const targetRatePol = await ctx.prisma.countrycity_locations({
            where: { rate_rates_pols_some: { id: args.rateId } }
          });
          const targetRatePod = await ctx.prisma.countrycity_locations({
            where: { rate_rates_pods_some: { id: args.rateId } }
          });
          const targetRateCNTRtype = await ctx.prisma.rate_cntrtypes({
            where: { rate_rates_some: { id: args.rateId } }
          });
          const duplicatedRate = await ctx.prisma.createRate_rate({
            account: { connect: { id: targetRateClient[0].id } },
            buying20: targetRate[0].buying20,
            buying40: targetRate[0].buying40,
            buying4H: targetRate[0].buying4H,
            deleted: false,
            dischargingFT: targetRate[0].dischargingFT,
            effectiveDate: targetRate[0].effectiveDate,
            inputperson: { connect: { id: ctx.user.id } },
            liner: { connect: { id: targetRateLiner[0].id } },
            loadingFT: targetRate[0].loadingFT,
            offeredDate: targetRate[0].offeredDate,
            pod: { connect: { id: targetRatePod[0].id } },
            pol: { connect: { id: targetRatePol[0].id } },
            recordedDate: moment().format(),
            remark: targetRate[0].remark,
            selling20: targetRate[0].selling20,
            selling40: targetRate[0].selling40,
            selling4H: targetRate[0].selling4H,
            type: { connect: { id: targetRateCNTRtype[0].id } }
          });

          return [duplicatedRate];
        } else if (args.handler === "delete") {
          if (!args.rateId) {
            throw new Error("rateId is missing!");
          }

          const deletedRate = await ctx.prisma.updateRate_rate({
            // modify rate
            data: {
              deleted: true
            },
            where: { id: args.rateId }
          });

          return [deletedRate];
        } else {
          throw new Error("Access invalid!");
        }
      }
    )
  }
};
