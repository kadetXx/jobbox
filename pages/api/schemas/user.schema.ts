import { gql } from "apollo-server-micro";

const userDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(
      uid: String!
      firstName: String!
      lastName: String!
      email: String!
      accountType: String!
      isEmailVerified: Boolean!
    ): User!
  }

  type User {
    uid: String!
    firstName: String!
    lastName: String!
    email: String!
    accountType: String!
    isEmailVerified: Boolean!
  }
`;

export default userDefs;
