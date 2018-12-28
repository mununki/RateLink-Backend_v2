import { user } from "./Query/user";
import { auth } from "./Mutaion/auth";
import { User } from "./User";
import { profile } from "./Mutaion/profile";
import { queryRateReader } from "./Query/rateReader";
import { mutationRateReader } from "./Mutaion/rateReader";
import { rates } from "./Query/rates";
import { Rate } from "./Rate";
import { Client } from "./Client";

export const resolvers = {
  Query: {
    ...user,
    ...queryRateReader,
    ...rates
  },
  Mutation: {
    ...auth,
    ...profile,
    ...mutationRateReader
  },
  User,
  Rate,
  Client
};
