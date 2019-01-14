// import { GraphQLServer } from "graphql-yoga";
import express from "express";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { Prisma } from "../generated/prisma-client";
import dotenv from "dotenv";
import { resolvers } from "./resolvers";
import decodeJWT from "./util/decodeJWT";

dotenv.config();

const prisma = new Prisma();

const schema = makeExecutableSchema({
  typeDefs:
    "type Mutation {\n  signup(email: String!, password: String!, nickname: String!): LoginResponse\n  login(email: String!, password: String!): LoginResponse\n  updateProfile(company: String, image: String, job_boolean: String, profile_name: String): UserResponse!\n  updateProfileImage(file: Upload!): UserResponse!\n  addRateReader(userId: Int!): User!\n  removeRateReader(userId: Int!): User!\n  setRate(rateId: Int, newRate: String, handler: String!): [Rate]\n}\n\ntype LoginResponse {\n  ok: Boolean\n  data: TokenResponse\n  error: String\n}\n\ntype TokenResponse {\n  token: String\n  user: User\n}\n\nscalar Upload\n\ntype Query {\n  getReaders: [User]!\n  getShowers: [User]!\n  getRates(before: String, last: Int, after: String, first: Int, queryParams: String): RateResponse\n  getInputpersons(search: String): [User]\n  getClients(search: String): [Client]\n  getLiners(search: String, showOurs: Boolean): [Liner]\n  getLocations(search: String, showOurs: Boolean, polOrPod: String): [Location]\n  getCNTRtypes(search: String, showOurs: Boolean): [CNTRtype]\n  me: UserResponse!\n  findUsers(email: String, nickname: String, profile_name: String, company: String): [User]\n  checkIfExist(email: String!): Boolean!\n}\n\ntype RateResponse {\n  ok: Boolean\n  data: Rate_rateConnection\n  error: String\n}\n\ntype Rate_rateConnection {\n  pageInfo: PageInfo\n  edges: [Rate_rateEdge]\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: String\n  endCursor: String\n}\n\ntype Rate_rateEdge {\n  node: Rate\n  cursor: String\n}\n\ntype Rate {\n  id: Int!\n  inputperson: User!\n  client: Client!\n  liner: Liner!\n  pol: Location!\n  pod: Location!\n  cntrtype: CNTRtype!\n  buying20: Int\n  buying40: Int\n  buying4H: Int\n  selling20: Int\n  selling40: Int\n  selling4H: Int\n  loadingFT: Int\n  dischargingFT: Int\n  offeredDate: String\n  effectiveDate: String\n  recordedDate: String\n  remark: String\n  deleted: Boolean\n}\n\ntype Client {\n  id: Int!\n  name: String!\n  salesman: User!\n  remarks: String!\n  recordedDate: String\n}\n\ntype Liner {\n  id: Int!\n  name: String!\n  label: String!\n}\n\ntype Location {\n  id: Int!\n  name: String!\n  country: String!\n  label: String!\n}\n\ntype CNTRtype {\n  id: Int!\n  name: String!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  nickname: String!\n  password: String!\n  profile: UserProfile!\n}\n\ntype UserProfile {\n  id: Int!\n  owner: User!\n  profile_name: String!\n  company: String\n  job_boolean: String\n  image: String\n}\n\ntype UserResponse {\n  ok: Boolean\n  data: User\n  error: String\n}\n",
  resolvers
});

const app = express();

app.use(cors());

app.use(
  "/",
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP(async (request, response, graphQLParams) => {
    let user = undefined;
    if (request.headers.authorization) {
      const token = request.headers.authorization || "";
      if (token) {
        const userId = await decodeJWT(token);
        if (userId) {
          user = await prisma.account_myuser({ id: parseInt(userId, 10) });
        }
      }
    }

    return {
      schema,
      graphiql: true,
      context: { request, prisma, user }
    };
  })
);

app.listen(4000, () => console.log("> http://localhost:4000 is listening"));
