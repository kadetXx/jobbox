import { gql } from "apollo-server-micro";
import userDefs from "./user.schema";
import newsletterDefs from "./newsletter.schema";

export const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${userDefs}
  ${newsletterDefs}
`;
