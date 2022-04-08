import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import typeDefs from "./schema";
import resolvers from "./resolver";

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const main = async () => {
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || 4000 }, () => {})
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

main();
