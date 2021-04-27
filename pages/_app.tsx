import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/index.scss";

import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <title>Yoda</title>
        <meta name="description" content="Project Yoda" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp);
