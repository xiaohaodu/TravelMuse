import http from "http";
import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { bodyParserMiddleware } from "./middleware/body-parser.js";
import { expressMiddleware } from "@apollo/server/express4";
import { createGraphqlServer } from "./graphql/index.js";

const app = express();
const httpServer = http.createServer(app);

const graphqlServer = createGraphqlServer(httpServer);
await graphqlServer.start();
app.use(
  corsMiddleware,
  bodyParserMiddleware,
  expressMiddleware(graphqlServer, { context: async () => ({}) })
);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000`);
});
