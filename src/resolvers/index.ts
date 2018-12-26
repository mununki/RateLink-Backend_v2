import { user } from "./Query/user";
import { liners } from "./Query/liners";
import { auth } from "./Mutaion/auth";
import { User } from "./User";
import { profile } from "./Mutaion/profile";
import { queryRateReader } from "./Query/rateReader";
import { mutationRateReader } from "./Mutaion/rateReader";

export const resolvers = {
  Query: {
    ...user,
    ...liners,
    ...queryRateReader
  },
  Mutation: {
    ...auth,
    ...profile,
    ...mutationRateReader
  },
  User
};
