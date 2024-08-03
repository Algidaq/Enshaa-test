import React from "react";

import { NavBar } from "@/ui";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  NavigationHeader,
  WalletBalance,
  WalletContentHeader,
  WalletProvider,
  WalletTable,
} from "./_components";

export const dynamic = "force-dynamic";
export default function WalletPage() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  return (
    <>
      <NavBar token={token} />
      <NavigationHeader />
      <main className="md:container md:mx-auto max-md:px-4 py-8">
        <WalletContentHeader />
        <WalletProvider>
          <WalletBalance balance={1566} />
          <hr className=" border-divider my-12" />
          <WalletTableTitle />
          <WalletTable />
        </WalletProvider>
      </main>
    </>
  );
}

const WalletTableTitle: React.FC<{}> = (props) => {
  return (
    <div>
      <p className="heading-2 text-body">المعاملات الأخيرة</p>
    </div>
  );
};
