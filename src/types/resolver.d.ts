import { Prisma, Account_myuser } from "../../generated/prisma-client";

export interface Context {
  request: any;
  prisma: Prisma;
  user: Account_myuser | undefined;
}

interface ContextWithUser {
  request: any;
  prisma: Prisma;
  user: Account_myuser;
}

export interface QueryParams {
  inputperson: { id_in: number[] };
  effectiveDate_gte: string;
  effectiveDate_lte: string;
  [propTypes: string]: any;
}

interface newRateSelectedField {
  value: number;
  label: string;
}
