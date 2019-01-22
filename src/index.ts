import dotenv from "dotenv";

dotenv.config();

import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "../generated/prisma-client";
import schema from "./schema";
import decodeJWT from "./util/decodeJWT";

const prisma = new Prisma();

const server = new GraphQLServer({
  schema,
  context: async (request: any) => {
    const token = request.request.get("Authorization") || "";
    let user;
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
