import React from "react";

import { ProductSection } from "./ProductSection";
import { ProductsService } from "@/services";
import { Product } from "@/model";
import { ProductsSwiper } from "@/app/_home-sections/ProductsSiwper";
import { ProductCategoriesSectionHeader } from "@/app/_components";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await ProductsService.getProductById(Number(params.id));

  if (result.error !== undefined) {
    return <>Not Found</>;
  }
  const data = result.data!;

  return (
    <>
      <section className="overflow-x-hidden mt-[3rem] mb-[6rem] md:container md:mx-auto xs:max-md:px-8 h-[100%] flex flex-col justify-start items-stretch gap-[4rem]">
        <ProductSection product={data.product} />
        <SimilarProductsSection products={data.similarProducts} />
      </section>
    </>
  );
}

const SimilarProductsSection: React.FC<{ products: Array<Product> }> = ({
  products,
}) => {
  return (
    <section className="flex flex-col items-stretch gap-[2.5rem]">
      <ProductCategoriesSectionHeader
        header={"منتجات أخرى من المتجر"}
        href={"/products"}
        linkText={"إلى المتجر"}
      />
      <ProductsSwiper products={products} />
    </section>
  );
};
