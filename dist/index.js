"use strict";
const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("../generated/prisma-client");
const prisma = new Prisma();
const resolvers = {
    Query: {
        liners: (root, args, context) => {
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
