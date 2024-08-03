import React from "react";
import Link, { LinkProps } from "next/link";
import { Icon, Text } from "@/components";
import Image from "next/image";

export const CategoryCard: React.FC<{
  title: string;
  desc: string;
  img?: string;
  href: LinkProps["href"];
}> = (props) => {
  return (
    <div className="grid grid-cols-2  h-[272px] bg-netural-100 rounded-[0.75rem] overflow-hidden">
      <div className="relative">
        <Image src={props.img ?? ""} fill alt="" objectFit="cover" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <p className="heading_3 text-[#00243C] mt-[2.5rem]">{props.title}</p>
        <CategoryLink {...props} />
      </div>
    </div>
  );
};

const CategoryLink = (props: any) => {
  return (
    <Link
      href={props.href}
      className="flex flex-row justify-start items-center  self-end"
    >
      <Text.bodySmall
        component="span"
        className="text-primary-500 whitespace-nowrap"
      >
        عرض كل المنتجات
      </Text.bodySmall>
      <span className=" w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center">
        <Icon icon="ArrowLeft" color="#532494" />
      </span>
    </Link>
  );
};
