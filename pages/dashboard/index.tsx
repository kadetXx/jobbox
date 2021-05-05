import useSWR from "swr";
import { fetcher } from "@/helpers";

import { Logo, Preloader } from "@/shared";

import { GET_USERS } from "@/store/user/user.queries";

import { auth } from '@/firebase'

import Router from 'next/router'

const Dashboard = (props: any) => {
  const { data, error } = useSWR(GET_USERS, fetcher, {
    initialData: props.users,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <Preloader />;

  const { users } = props;

  const logout = () => {
    auth.signOut().then(() => {
      Router.push("/")
    })
  }

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
      <div>
        <h2>Welcome to your Jobbox dashboard!</h2>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <button className="btn btn__primary" onClick={() => logout()} >Logout</button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetcher(GET_USERS, fetcher);

  return {
    props: {
      users: data.users,
    },
  };
}

export default Dashboard;
