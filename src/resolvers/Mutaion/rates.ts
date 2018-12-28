import { ContextWithUser, newRateSelectedField } from "../../types/resolver";
import privateResolver from "../../util/privateResolver";
import { Rate_rate } from "../../../generated/prisma-client";
import moment = require("moment");

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

export const rates = {
  setRate: privateResolver(
    async (
      root: any,
      args: any,
      ctx: ContextWithUser
    ): Promise<Rate_rate[]> => {
      const inputNewRate = JSON.parse(args.newRate);
      let rates: Rate_rate[] = [];
      if (args.handler === "add") {
        inputNewRate.selectedCt.forEach((client: newRateSelectedField) =>
          inputNewRate.selectedLn.forEach((liner: newRateSelectedField) =>
            inputNewRate.selectedPl.forEach((pol: newRateSelectedField) =>
              inputNewRate.selectedPd.forEach((pod: newRateSelectedField) =>
                inputNewRate.selectedTy.forEach(
                  async (type: newRateSelectedField) => {
                    const rate = await ctx.prisma.createRate_rate({
                      inputperson: { connect: { id: ctx.user.id } },
                      account: { connect: { id: client.value } },
                      liner: { connect: { id: liner.value } },
                      pol: { connect: { id: pol.value } },
                      pod: { connect: { id: pod.value } },
                      type: { connect: { id: type.value } },
                      buying20: inputNewRate.buying20,
                      buying40: inputNewRate.buying40,
                      buying4H: inputNewRate.buying4H,
                      selling20: inputNewRate.selling20,
                      selling40: inputNewRate.selling40,
                      selling4H: inputNewRate.selling4H,
                      loadingFT: inputNewRate.loadingFT,
                      dischargingFT: inputNewRate.dischargingFT,
                      offeredDate: inputNewRate.offeredDate,
                      effectiveDate: inputNewRate.effectiveDate,
                      recordedDate: moment().format(),
                      remark: inputNewRate.remark,
                      deleted: false
                    });
                    rates.push(rate);
                  }
                )
              )
            )
          )
        );
        return rates;
      } else if (args.handler === "modify") {
        const rate = await ctx.prisma.createRate_rate({
          inputperson: { connect: { id: ctx.user.id } },
          account: { connect: { id: inputNewRate.selectedCt[0].value } },
          liner: { connect: { id: inputNewRate.selectedLn[0].value } },
          pol: { connect: { id: inputNewRate.selectedPl[0].value } },
          pod: { connect: { id: inputNewRate.selectedPd[0].value } },
          type: { connect: { id: inputNewRate.selectedTy[0].value } },
          buying20: inputNewRate.buying20,
          buying40: inputNewRate.buying40,
          buying4H: inputNewRate.buying4H,
          selling20: inputNewRate.selling20,
          selling40: inputNewRate.selling40,
          selling4H: inputNewRate.selling4H,
          loadingFT: inputNewRate.loadingFT,
          dischargingFT: inputNewRate.dischargingFT,
          offeredDate: inputNewRate.offeredDate,
          effectiveDate: inputNewRate.effectiveDate,
          recordedDate: moment().format(),
          remark: inputNewRate.remark,
          deleted: false
        });
        rates.push(rate);
        return rates;
      } else {
        throw new Error("Access invalid!");
      }
    }
  )
};
