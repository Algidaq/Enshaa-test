import NavBar from "@/components/navbar";
import NavPage from "@/components/navpage";
import RequestPricingForm from "./_components/createRequestForm";
import { useState } from "react";
import { apiCreateQuotationFromTextOrFile } from "@/service";

export default function CreateRequestPricing() {
  return (
    <div id="root">
      <NavBar />
      <NavPage name="إنشاء طلب تسعير" />
      <RequestPricingForm />
    </div>
  );
}
