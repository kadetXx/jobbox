import React from "react";
import type { ReactElement } from "react";

import { FrontLayout } from "@/layouts";
import { Hero } from "@/components/landing";

const Index = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
