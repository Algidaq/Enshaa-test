"use client";
import React from "react";
import { useWalletCtx } from "./WalletProvider";

export const WalletBalance: React.FC<{ balance: number }> = (props) => {
  const {
    state: { data },
  } = useWalletCtx();
  if (!data) return <></>;
  return (
    <div className="mt-8 grid md2:grid-cols-2 max-md2:grid-cols-1  h-[168px]">
      <div className="bg-secondary-100 rounded-[0.75rem]">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="subtitle text-subtitle">الرصيد الإجمالي</span>
          <span className="heading_2 text-primary-500 mt-6">
            {formatAmount(data.balance)}
          </span>
          <span className="body_small text-title mt-4">ريال سعودي</span>
        </div>
      </div>
    </div>
  );
};

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    value
  );
}
