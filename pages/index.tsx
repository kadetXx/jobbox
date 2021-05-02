import useSWR from "swr";
import { fetcher } from "@/helpers";

import { Logo, Preloader } from "@/shared";

import Link from "next/link";

const Index = () => {
  const { data, error } = useSWR("{ users { firstName } }", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Preloader />;

  // const { users } = data;

  return (
    <div
      style={{
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F0E2D",
      }}
    >
      <Logo />
      <div style={{display: "flex", marginTop: "2rem"}}>
        <Link href="/sign-up">
          <a style={{marginRight: "0.5rem"}}>
            <button className="btn btn__primary">Get Started</button>
          </a>
        </Link>

        <Link href="/sign-in">
          <a>
            <button className="btn btn__primary">Sign In</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
