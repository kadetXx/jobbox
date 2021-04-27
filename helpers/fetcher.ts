import { request } from "graphql-request";

const fetcher = (query: string, variables: any) => {
  return request("/api/graphql", query, variables);
};

export default fetcher;
