import { Icon, Text } from "@/components";
import { NavBar } from "@/ui";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

export default function ProductsLayout(props: PropsWithChildren<{}>) {
  const token = cookies().get("token")?.value;
  return (
    <>
      <NavBar token={token} />
      <div className="w-[100wv] bg-[#E0ECF6] bg-opacity-[0.24]">
        <ul className="md:container md:mx-auto max-md:px-4 py-[1rem] flex flex-row gap-[1rem]">
          <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
            <Text.subtitle className="text-[#5F6C7B]">
              الصفحة الرئيسية
            </Text.subtitle>
            <Icon icon="ArrowLeft" className="self-center" color="#5F6C7B" />
          </li>
          <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
            <Text.subtitle className="text-primary-500">المتجر</Text.subtitle>
          </li>
        </ul>
      </div>
      <main className="">{props.children}</main>
    </>
  );
}
