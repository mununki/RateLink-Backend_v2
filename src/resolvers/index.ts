import { Prisma } from "../../generated/prisma-client";
import { user } from "./Query/user";
import { liners } from "./Query/liners";
import { auth } from "./Mutaion/auth";
import { User } from "./User";

export const resolvers = {
  Query: {
    ...user,
    ...liners
  },
  Mutation: {
    ...auth
  },
  User
};

export interface Context {
  request: any;
  prisma: Prisma;
  user: string | undefined;
}
