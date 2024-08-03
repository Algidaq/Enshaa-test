"use client";
import React from "react";
import { useCartPageCtx } from "./CartPageProvider";
import { Button, LinkButton } from "@/components";
import { useRouter } from "next/navigation";

export const CartSummarySection: React.FC<{}> = (props) => {
  const ctx = useCartPageCtx();
  const router = useRouter();

  if (ctx.state.items.length < 1) {
    return <></>;
  }

  const handleOnProceedToPayment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const quotationItems = ctx.state.items.filter((item) => item.price <= 0);
    if (quotationItems.length > 0) {
      // show quation Dialog
      ctx.showRequestQuotationDailog();
      return;
    }
    router.push(`/cart/${ctx.state.cartId}/address`);
  };

  return (
    <section className="flex flex-col items-stretch self-start gap-[3rem] lg:sticky lg:top-[2rem]">
      <div className="bg-secondary-100 p-[1.5rem] rounded-[0.75rem] flex flex-col items-stretch gap-[1rem]">
        <span className="body_small text-primary-500 ">ملخص الدفع</span>
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <span className="body_medium text-body ">إجمالي المواد </span> 
          <span className="body_medium text-body">
            {ctx.state.total.toFixed(2)} ر.س
          </span>
        </div>
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <p className="body_medium text-body flex-[1]">
            ضريبة القيمة المضافة (%5)
          </p>
           <span className="body_medium text-body">{ctx.state.vat} ر.س</span>
        </div>
        <hr className="border-body" />
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <span className="body_medium text-body ">المبلغ الإجمالي</span> 
          <span className="body_medium text-body">
            {ctx.state.totalPriceIncludingVat} ر.س
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-[1]" />
        <div className="flex-[1]">
          <Button
            text="الاستمرار للدفع"
            variant="filled"
            fullWidth
            onClick={handleOnProceedToPayment}
            // disabled={ctx.state.total <= 10}
            // href={{ pathname: `/cart/${ctx.state.cartId}/address` }}
          />
        </div>
      </div>
    </section>
  );
};
