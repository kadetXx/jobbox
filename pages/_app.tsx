import React from "react";
import { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import Head from "next/head";
import "@/styles/index.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com/"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com/"></link>
        <link rel="preconnect" href="https://res.cloudinary.com/"></link>
        <title>Jobbox</title>
        <meta name="description" content="Find Jobs Easily" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
