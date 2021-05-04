import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import dbConnect from "./lib/mongodb";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

dbConnect();

export default apolloServer.createHandler({ path: "/api/graphql" });
