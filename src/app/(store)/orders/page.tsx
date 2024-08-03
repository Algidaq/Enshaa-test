import React from "react";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { Icon, Text } from "@/components";
import { redirect } from "next/navigation";
import { OrderService } from "@/services";
import { OrdersList } from "./_components/OrdersList";
import Link from "next/link";

export default async function OrdersPage() {
  const token = cookies().get("token")?.value;
  if (!token) {
    return redirect("/");
  }

  return (
    <>
      <OrdersPageHeader token={token} />
      <main className="h-full w-full">
        <OrdersList />
      </main>
    </>
  );
}

const OrdersPageHeader: React.FC<{ token?: string }> = (props) => {
  return (
    <>
      <NavBar token={props.token} />
      <div className="w-[100wv] bg-[#E0ECF6] bg-opacity-[0.24]">
        <ul className="md:container md:mx-auto max-md:px-4 py-[1rem] flex flex-row gap-[1rem]">
          <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
            <Link href="/" className="subtitle text-[#5F6C7B]">
              الصفحة الرئيسية
            </Link>
            <Icon icon="ArrowLeft" className="self-center" color="#5F6C7B" />
          </li>
          <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
            <Text.subtitle className="text-primary-500">
              الطلبات االسابقة
            </Text.subtitle>
          </li>
        </ul>
      </div>
    </>
  );
};
