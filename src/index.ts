import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "../generated/prisma-client";
import dotenv from "dotenv";
// import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import decodeJWT from "./util/decodeJWT";

dotenv.config();

const prisma = new Prisma();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: async (request: any) => {
    const token = request.request.get("Authorization") || "";
    let user = undefined;
    if (token) {
      const userId = await decodeJWT(token);
      if (userId) {
        user = await prisma.account_myuser({ id: parseInt(userId, 10) });
      }
    }
    return { ...request, prisma, user };
  }
});

server.start(() => console.log("Server is running on localhost:4000"));
