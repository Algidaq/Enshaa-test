import React from "react";
import { ProductCategoriesSectionHeader } from "../_components";
import { Icon, LoadingIndicator } from "@/components";
import { ProductCard } from "@/ui";
import { HttpService } from "@/services";
import { ProductsSwiper } from "./ProductsSiwper";

async function getHomeProducts(): Promise<Array<any>> {
  try {
    const res = await HttpService.get("/api/home");
    const data = res.data;
    return data["newProducts"] ?? [];
  } catch (e) {
    return [];
  }
}

export const ProductsSection: React.FC<{}> = (props) => {
  return (
    <section className="lg:py-[128px] xs:py-8">
      <div className="lg:container lg:mx-auto flex flex-col justify-start items-stretch lg:gap-[2.5rem] xs:gap-8">
        <div className="xs:p-8">
          <ProductCategoriesSectionHeader
            header="منتجات جديدة"
            linkText="إلى المتجر"
            href="/products"
          />
        </div>
        <React.Suspense fallback={<LoadingIndicator />}>
          <ProductsList />
        </React.Suspense>
      </div>
    </section>
  );
};

const ProductsList: React.FC<{}> = async () => {
  const products = await getHomeProducts();

  return (
    <div className="xs:px-8">
      <ProductsSwiper products={products} />
    </div>
  );
};
