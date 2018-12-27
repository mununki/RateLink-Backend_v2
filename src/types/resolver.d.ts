import { Prisma, Account_myuser } from "../../generated/prisma-client";

export interface Context {
  request: any;
  prisma: Prisma;
  user: Account_myuser | undefined;
}

export interface QueryParams {
  inputperson: { id_in: number[] };
  effectiveDate_gte: string;
  effectiveDate_lte: string;
  [propTypes: string]: any;
}
