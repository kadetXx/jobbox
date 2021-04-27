import { gql } from "apollo-server-micro";

const userSchema = gql`
  type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`;

export default userSchema