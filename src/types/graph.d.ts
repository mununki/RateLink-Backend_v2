export const typeDefs = ["type Mutation {\n  signup(email: String!, password: String!, nickname: String!): authResponse\n  login(email: String!, password: String!): authResponse\n  profileUpdate(company: String, image: String, job_boolean: String, profile_name: String): User!\n  addRateReader(userId: Int!): User!\n  removeRateReader(userId: Int!): User!\n}\n\ntype authResponse {\n  token: String!\n  user: User!\n}\n\ntype Query {\n  getLiners: [Liners!]!\n  getReaders: [User]!\n  getShowers: [User]!\n  me: User!\n}\n\ntype Liners {\n  id: Int!\n  label: String!\n  name: String!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  nickname: String!\n  password: String!\n  profile: UserProfile!\n}\n\ntype UserProfile {\n  id: Int!\n  owner: User!\n  profile_name: String!\n  company: String\n  job_boolean: String\n  image: String\n}\n"];
/* tslint:disable */

export interface Query {
  getLiners: Array<Liners>;
  getReaders: Array<User>;
  getShowers: Array<User>;
  me: User;
}

export interface Liners {
  id: number;
  label: string;
  name: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  profile: UserProfile;
}

export interface UserProfile {
  id: number;
  owner: User;
  profile_name: string;
  company: string | null;
  job_boolean: string | null;
  image: string | null;
}

export interface Mutation {
  signup: authResponse | null;
  login: authResponse | null;
  profileUpdate: User;
  addRateReader: User;
  removeRateReader: User;
}

export interface SignupMutationArgs {
  email: string;
  password: string;
  nickname: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface ProfileUpdateMutationArgs {
  company: string | null;
  image: string | null;
  job_boolean: string | null;
  profile_name: string | null;
}

export interface AddRateReaderMutationArgs {
  userId: number;
}

export interface RemoveRateReaderMutationArgs {
  userId: number;
}

export interface authResponse {
  token: string;
  user: User;
}
