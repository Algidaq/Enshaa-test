import { Icon } from "@/components";
import Link from "next/link";
import React from "react";

export const NavigationHeader: React.FC<{}> = () => {
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
            عرض تفاصيل المحفظه
          </p>
        </li>
      </ul>
    </div>
  );
};
