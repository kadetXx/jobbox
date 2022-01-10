import { gql } from "apollo-server-micro";

const userDefs = gql`
  extend type Query {
    users: [User!]!
    user(uid: String!): User!
  }

  extend type Mutation {
    createUser(
      uid: String!
      firstName: String!
      lastName: String!
      email: String!
      accountType: String!
      isEmailVerified: Boolean!
    ): User

    updateUser(
      uid: String!
      firstName: String
      lastName: String
      email: String
      accountType: String
      isEmailVerified: Boolean
    ): User
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