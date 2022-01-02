import React from "react";
import type { ReactElement } from "react";

import { FrontLayout } from "@/layouts";
import { Hero } from "@/components/landing";

const Index = () => {
  return (
    <div data-page="home">
      <Hero />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout page="home">{page}</FrontLayout>;
};
