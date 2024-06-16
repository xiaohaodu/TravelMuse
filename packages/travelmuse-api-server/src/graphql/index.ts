import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";
import { Server } from "http";

export function createGraphqlServer(httpServer: Server): ApolloServer {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  return server;
}
