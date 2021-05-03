export const CREATE_ACCOUNT = /* GraphQL */ `
  mutation createUser(
    $uid: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $accountType: String!
    $isEmailVerified: Boolean!
  ) {
    createUser(
      uid: $uid
      firstName: $firstName
      lastName: $lastName
      email: $email
      accountType: $accountType
      isEmailVerified: $isEmailVerified
    ) {
      uid
      firstName
      lastName
      email
      accountType
    }
  }
`;

export const GET_USERS = /* GraphQL */ `
  query {
    users {
      uid
      firstName
      lastName
      email
      accountType
      isEmailVerified
    }
  }
`;
