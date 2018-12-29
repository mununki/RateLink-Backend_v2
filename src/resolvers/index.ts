import { user } from "./Query/user";
import { auth } from "./Mutaion/auth";
import { User } from "./User";
import { profile } from "./Mutaion/profile";
import { rateReaderQuery } from "./Query/rateReader";
import { rateReaderMutation } from "./Mutaion/rateReader";
import { ratesQuery } from "./Query/rates";
import { ratesMutation } from "./Mutaion/rates";
import { Rate } from "./Rate";
import { Client } from "./Client";

export const resolvers = {
  Query: {
    ...user,
    ...rateReaderQuery,
    ...ratesQuery
  },
  Mutation: {
    ...auth,
    ...profile,
    ...rateReaderMutation,
    ...ratesMutation
  },
  User,
  Rate,
  Client
};
