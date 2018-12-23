import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "../generated/prisma-client";

const prisma = new Prisma();

const resolvers = {
  Query: {
    liners: (root: any, args: any, context: any) => {
      return context.prisma.countrycity_liners();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log("Server is running on localhost:4000"));
