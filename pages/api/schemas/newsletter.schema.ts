import { gql } from "apollo-server-micro";

const newsletterDefs = gql`
  type Query {
    subscribers: [Email!]
  }

  type Mutation {
    subscribe(
      email: String!
    ): Email!
  }

  type Email {
    email: String!
  }
`;

export default newsletterDefs;
