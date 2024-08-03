import NavPage from "@/components/navpage";
import RequestPricingForm from "./_components/createRequestForm";
import { useState } from "react";
import { apiCreateQuotationFromTextOrFile } from "@/service";
import { cookies } from "next/headers";
import { NavBar } from "@/ui";

export default function CreateRequestPricing() {
  const token = cookies().get("token")?.value;
  return (
    <div id="root">
      <NavBar token={token} />
      <NavPage name="إنشاء طلب تسعير" />
      <RequestPricingForm />
    </div>
  );
}
