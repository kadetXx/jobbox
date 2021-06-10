import { gql } from "apollo-server-micro";

const newsletterDefs = gql`
  extend type Query {
    subscribers: [Subscriber!]
  }

  extend type Mutation {
    subscribe(
      email: String!
    ): String
  }

  type Subscriber {
    email: String!
    message: String
  }
`;

export default newsletterDefs;
