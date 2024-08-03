import React from "react";
import { CartService } from "@/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button, Icon, RadioButton } from "@/components";
import Link from "next/link";
import { PaymentSection } from "./PaymentSection";
export default async function PaymentPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { address?: string };
}) {
  const token = cookies().get("token")?.value;
  const address = searchParams.address;

  if (!token || !address) {
    return redirect("/");
  }

  const result = await CartService.getCart(token);

  if (result.error !== undefined) {
    return redirect("/");
  }

  const cart = result.data;

  return (
    <div className="md:container md:mx-auto max-md:px-4">
      <div className="flex md2:flex-row max-md2:flex-col-reverse md2:gap-16 max-md2:gap-8">
        <div className="flex-[1]">
          <PaymentSection address={address} cartId={result.data.id} />
        </div>
        <div className="flex-[1]">
          <SummarySection
            total={cart.total_price.toFixed(2)}
            totalPlusVat={cart.total_price_including_vat.toFixed(2)}
            vat={(cart.total_price_including_vat - cart.total_price).toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
}

const SummarySection: React.FC<{
  total: string;
  totalPlusVat: string;
  vat: string;
}> = ({ total, totalPlusVat, vat }) => {
  return (
    <section className="flex flex-col items-stretch gap-[3rem]">
      <div className="bg-secondary-100 p-[1.5rem] rounded-[0.75rem] flex flex-col items-stretch gap-[1rem]">
        <span className="body_small text-primary-500 ">ملخص الدفع</span>
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <span className="body_medium text-body ">إجمالي المواد </span> 
          <span className="body_medium text-body">{total} ر.س</span>
        </div>
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <span className="body_medium text-body ">
            ضريبة القيمة المضافة (%5)
          </span>
           <span className="body_medium text-body">{vat} ر.س</span>
        </div>
        <hr className="border-body" />
        <div className="flex flex-row justify-between gap-[1rem] items-start">
          <span className="body_medium text-body ">المبلغ الإجمالي</span> 
          <span className="body_medium text-body">{totalPlusVat} ر.س</span>
        </div>
      </div>
    </section>
  );
};
