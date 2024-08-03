"use client";

import { Icon } from "@/components";
import { useEffect } from "react";

import { useCartPageCtx } from "./CartPageProvider";
import { DeleteProductDialog } from "./DeleteProductDailog";
import { CartProductCard } from "./CartProductCard";

export const CartItemSection: React.FC<{}> = () => {
  const cartCtx = useCartPageCtx();
  const items = cartCtx.state.items;

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    return () => {
      // document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <section className="">
        <div className="flex flex-col items-stretch gap-[1.5rem] border-b border-b-divider">
          <div className="py-[1.5rem] px-[3rem] flex items-center gap-[1rem] bg-[#F9FAFB]">
            <Icon icon="Cart" color="#1A1A1A" />
            <span className="heading_2 text-netural-900">
              سلة التسوق الخاصة بي
            </span>
          </div>
          <div className="py-[1rem] px-[1.5rem] flex items-center gap-[1rem]">
            <Icon icon="Stack" />
            <span className="subtitle text-primary-500">
              {items.length} مادة/مواد
            </span>
          </div>
        </div>
        <div className="mt-[2rem] flex flex-col items-stretch gap-[1.5rem]">
          {items.map((item) => (
            <CartProductCard key={item.id.toString()} item={item} />
          ))}
          <div className="" />
        </div>
      </section>
      <DeleteProductDialog />
    </>
  );
};
