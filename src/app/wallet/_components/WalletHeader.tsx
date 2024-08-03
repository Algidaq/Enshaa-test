import { Icon } from "@/components";
import React from "react";

export const WalletContentHeader: React.FC<{}> = (props) => {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center py-6">
        <Icon icon="Wallet" color="#1A1A1A" />
        <h1 className="heading_2 text-[#1A1A1A]">المحفظة الخاصة بي</h1>
      </div>
    </div>
  );
};
