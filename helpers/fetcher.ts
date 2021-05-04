import { request } from "graphql-request";

const api = process.env.NEXT_PUBLIC_SERVER_URL

const fetcher = (query: string, variables: any) => {
  return request(api, query, variables);
};

export default fetcher;
