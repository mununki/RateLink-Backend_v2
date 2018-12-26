import { user } from "./Query/user";
import { liners } from "./Query/liners";
import { auth } from "./Mutaion/auth";
import { User } from "./User";
import { profile } from "./Mutaion/profile";

export const resolvers = {
  Query: {
    ...user,
    ...liners
  },
  Mutation: {
    ...auth,
    ...profile
  },
  User
};
