import useSWR from "swr";
import { fetcher } from "@/helpers";

import { Logo, Preloader } from "@/shared";

import Link from "next/link";

import { GET_USERS } from '@/store/user/user.queries'

const Index = (props: any) => {
  const { data, error } = useSWR(GET_USERS, fetcher, { initialData: props.users });


  if (error) return <div>Failed to load</div>;
  if (!data) return <Preloader />;

  const { users } = props;

  return (
    <div
      onClick={() => console.log(users)}
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

export async function getStaticProps() {
  const data = await fetcher(GET_USERS, fetcher);
  
  return {
    props: {
      users: data.users
    }
  }
}

export default Index;
