import { Icon } from "@/components";
import { NavBar } from "@/ui";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function WarrantiesPage() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  return (
    <>
      <NavBar token={token} />
      <NavigationHeader />
      <main className="md:container md:mx-auto max-md:px-4 py-8">
        <WarrantyPageTitle />
        <WarrantiesTable />
      </main>
    </>
  );
}
const NavigationHeader: React.FC<{}> = () => {
  return (
    <div className="w-[100wv] bg-[#E0ECF6] bg-opacity-[0.24]">
      <ul className="md:container md:mx-auto max-md:px-4 py-[1rem] flex flex-row flex-wrap gap-[1rem]">
        <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
          <Link
            href="/"
            className="md:subtitle max-md:body_small whitespace-nowrap text-[#5F6C7B]"
          >
            الصفحة الرئيسية
          </Link>
          <Icon icon="ArrowLeft" className="self-center" color="#5F6C7B" />
        </li>

        <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
          <p className="md:subtitle max-md:body_small whitespace-nowrap text-primary-500">
            عرض تفاصيل الضمانات
          </p>
        </li>
      </ul>
    </div>
  );
};

const WarrantyPageTitle: React.FC<{}> = (props) => {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center py-6">
        <Icon icon="Receipt" color="#1A1A1A" />
        <h1 className="heading_2 text-[#1A1A1A]">تفاصيل الضمانات للمشتريات</h1>
      </div>
    </div>
  );
};

const WarrantiesTable: React.FC<{}> = (props) => {
  return (
    <div className="mt-6 overflow-scroll">
      <div className="mt-6 rounded-xl border border-divider max-h-[432px]  overflow-scroll">
        <table className="md:w-full max-md:w-[768px] table-fixed  bg-netural-100 border-collapse">
          <thead className="bg-[#F9FAFB] sticky top-0">
            <tr className="p-6 rounded-xl">
              <th className="p-6 text-start body_small text-subtitle font-semibold">
                <span>المبلغ</span>
              </th>
              <th className="p-6 text-start body_small text-subtitle font-semibold">
                <span>النوع</span>
              </th>
              <th className="p-6 text-start body_small text-subtitle font-semibold">
                <span>العملية</span>
              </th>
              <th className="p-6 text-start body_small text-subtitle font-semibold">
                <span>التاريخ</span>
              </th>
              <th className="p-6 text-start body_small text-subtitle font-semibold">
                <span>
                  <Icon icon="ArrowDown" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, index) => index).map((value) => (
              <tr className="" key={value.toString()}>
                <td className="p-6 border-b border-divider">3,000 SAR</td>
                <td className="p-6 border-b border-divider">المبلغ مستخدم</td>
                <td className="p-6 border-b border-divider">12/02/2024</td>
                <td className="p-6 border-b border-divider">12/02/2024</td>
                <td className="p-6 border-b border-divider">
                  <Icon icon="ArrowUp" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
