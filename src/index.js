/* eslint-disable import/first */
/* eslint-disable import/no-unresolved */
import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";
import graphqlHTTP from "express-graphql";
import { Prisma } from "../generated/prisma-client";
import decodeJWT from "./util/decodeJWT";
import schema from "./schema";

const prisma = new Prisma();

const app = express();

app.use(cors());

app.use(
  "/",
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP(async request => {
    let user;
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
