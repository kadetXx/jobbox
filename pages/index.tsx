import React from "react";
import type { ReactElement } from "react";

import { FrontLayout } from "@/layouts";
import { Hero, Belief, Features } from "@/components/landing";

const Index = () => {
  return (
    <div data-page="home">
      <Hero />
      <Belief />
      <Features />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout page="home">{page}</FrontLayout>;
};
