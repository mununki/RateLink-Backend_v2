"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const prisma_client_1 = require("../generated/prisma-client");
const prisma = new prisma_client_1.Prisma();
const resolvers = {
    Query: {
        liners: (root, args, context) => {
            return context.prisma.countrycity_liners();
        }
    }
};
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers,
    context: { prisma }
});
server.start(() => console.log("Server is running on localhost:4000"));
