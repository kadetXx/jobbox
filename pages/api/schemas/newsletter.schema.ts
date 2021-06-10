import { gql } from "apollo-server-micro";

const newsletterDefs = gql`
  extend type Query {
    subscribers: [Subscriber!]
  }

  extend type Mutation {
    subscribe(
      email: String!
    ): NewSubscriber
  }

  type NewSubscriber {
    email: String!
    message: String
    status: Boolean!
  }

  type Subscriber {
    email: String!
  }
`;

export default newsletterDefs;
