import React from "react";

import {
  AboutUsSection,
  DynamicPricingSection,
  HeroSection,
  ProjectManagmentSec2,
  ProjectManagmentSec,
  CategoriesSection,
  ProductsSection,
  Footer,
  CopyRightsSection,
} from "./_home-sections";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";

export default function Home() {
  const token = cookies().get("token");

  return (
    <>
      <NavBar token={token?.value} />

      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutUsSection />
        <DynamicPricingSection />
        <ProjectManagmentSec />
        <ProjectManagmentSec2 />
        <CategoriesSection />
        <ProductsSection />
      </main>
      <div className="overflow-x-hidden">
        <Footer />
        <CopyRightsSection />
      </div>
    </>
  );
}
