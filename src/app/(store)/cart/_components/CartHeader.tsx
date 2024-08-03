"use client";
import React from "react";
import { useCartPageCtx } from "./CartPageProvider";
import { Icon } from "@/components";

export const CartHeader: React.FC<{}> = () => {
  const ctx = useCartPageCtx();
  return (
    <div className="flex flex-row justify-start items-start gap-[0.5rem]">
      <span className="w-[1.75rem] h-[1.75rem] flex justify-center items-center bg-[#E9E9E9] bg-opacity-[0.5] rounded-[100%]">
        <Icon icon="Receipt" />
      </span>
      <h1 className="heading_4 self-center flex-[1]">ملخص الطلبات</h1>
      <span className="heading_3 self-center text-tertiary-600">
        عدد العناصر {`(${ctx.state.items.length})`}
      </span>
    </div>
  );
};
