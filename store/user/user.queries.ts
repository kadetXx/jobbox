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

export const UPDATE_USER = /* GraphQL */ `
  mutation updateUser(
    $uid: String!
    $firstName: String
    $lastName: String
    $email: String
    $accountType: String
    $isEmailVerified: Boolean
  ) {
    updateUser(
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

export const GET_USER = /* GraphQL */ `
  query($uid: String!) {
    user(uid: $uid) {
      uid
      firstName
      lastName
      email
      accountType
      isEmailVerified
    }
  }
`;