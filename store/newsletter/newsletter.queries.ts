export const SUBSCRIBE = /* GraphQL */ `
  mutation subscribe($email: String!) {
    subscribe(email: $email) {
      email
      message
      status
    }
  }
`;
