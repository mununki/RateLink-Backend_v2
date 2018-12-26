import { Prisma, Account_myuser } from "../../generated/prisma-client";

export interface Context {
  request: any;
  prisma: Prisma;
  user: Account_myuser | undefined;
}
