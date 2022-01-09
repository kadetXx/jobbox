import React from "react";
import type { ReactElement } from "react";

import dynamic from "next/dynamic";

const [FrontLayout, Hero, Belief, Features, Cta] = [
  dynamic(() => import("@/layouts/frontLayout/FrontLayout")),
  dynamic(() => import("@/components/landing/hero/Hero")),
  dynamic(() => import("@/components/landing/belief/Belief")),
  dynamic(() => import("@/components/landing/features/Features")),
  dynamic(() => import("@/components/landing/cta/Cta")),
];

const Index = () => {
  return (
    <div data-page="home">
      <Hero />
      <Belief />
      <Features />
      <Cta />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout page="home">{page}</FrontLayout>;
};
