"use client";
import { LoadingIndicator } from "@/components";
import { ProductsService } from "@/services";
import { ProductCard } from "@/ui";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ProductsList: React.FC<{
  initialState: Array<any>;
  category?: string;
}> = ({ initialState, category }) => {
  const [products, setProducts] = useState(initialState);

  const [page, setPage] = useState(1);

  const [canLoadMore, setCanLoadMore] = useState(initialState.length >= 12);

  const { ref, inView } = useInView();

  useEffect(() => {
    setProducts(initialState);
    setPage(1);
    setCanLoadMore(initialState.length >= 12);
  }, [initialState]);
  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView]);

  const loadMoreData = async () => {
    if (!canLoadMore) return;
    const result = await ProductsService.getProducts(category, page + 1);
    if (result.error !== undefined) {
      setCanLoadMore(false);
      return;
    }
    const data = result.data.rows;
    if (data.length < 1) {
      setCanLoadMore(false);
      return;
    }
    setProducts((prev) => [...prev, ...data]);
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col gap-[1rem] mt-[2rem] xs:px-8 lg:px-0">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(362px,1fr))] gap-[4rem] xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id.toString()}
            size="small"
            name={product.name_ar}
            link={`/products/${product.id}`}
            image={product.img_url}
            category={product?.category?.name_ar ?? ""}
            price={`${product.price.toFixed(2)} ر.س`}
          />
        ))}
      </div>
      {canLoadMore && (
        <div
          ref={ref}
          className="w-full flex flex-row items-center justify-center"
        >
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};
