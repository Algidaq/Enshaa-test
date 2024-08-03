import React from "react";

import {
  CartHeader,
  CartPageProvider,
  CartSummarySection,
  CartItemSection,
  RequestQuotationDailog,
  RequestQuotationSuccessDailog,
} from "./_components";

export default function CartPage() {
  return (
    <div className="max-lg:px-4 lg:container lg:mx-auto">
      <CartPageProvider>
        <div className="">
          <CartHeader />
          <section className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-[1rem] gap-[4rem] mt-[2rem]">
            <CartItemSection />
            <CartSummarySection />
          </section>
        </div>
      </CartPageProvider>
    </div>
  );
}
