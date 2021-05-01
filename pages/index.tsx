import useSWR from "swr";
import { fetcher } from "@/helpers";

import { Logo, Preloader } from "@/shared";

const Index = () => {
  const { data, error } = useSWR("{ users { firstName } }", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Preloader />;

  const { users } = data
  

  return <Logo title={users[0].firstName} />;
};

export default Index;
