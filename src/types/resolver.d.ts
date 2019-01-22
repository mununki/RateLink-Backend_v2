import { Account_myuser, Prisma } from "../../generated/prisma-client";
import { Rate_rateConnection } from "../../generated/prisma-client";

export interface Context {
  request: any;
  prisma: Prisma;
  user: Account_myuser | undefined;
}

export interface ContextWithUser {
  request: any;
  prisma: Prisma;
  user: Account_myuser;
}

interface InputQueryParams {
  selectedIp: Array<{ value: number; label: string }>;
  selectedCt: Array<{ value: number; label: string }>;
  selectedLn: Array<{ value: number; label: string }>;
  selectedPl: Array<{ value: number; label: string }>;
  selectedPd: Array<{ value: number; label: string }>;
  selectedTy: Array<{ value: number; label: string }>;
  initialSF: string;
  initialST: string;
}

export interface QueryParams {
  inputperson: { id_in: number[] };
  effectiveDate_gte: string;
  effectiveDate_lte: string;
  deleted: boolean;
  [propTypes: string]: any;
}

export interface newRateSelectedField {
  value: number;
  label: string;
}

export interface UserResponse {
  ok: boolean;
  data: Account_myuser | null;
  error: string | null;
}

export interface RateResponse {
  ok: boolean;
  data: Rate_rateConnection | null;
  error: string | null;
}

export interface LoginResponse {
  ok: boolean;
  data: {
    token: string | null;
    user: Account_myuser | null;
  };
  error: string | null;
}
