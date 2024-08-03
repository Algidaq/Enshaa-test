"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { Text, Icon, ClientPortal } from "@/components";
import Link from "next/link";
import { CategoryService } from "@/services";

type CategoriesDropDownProps = {
  categories: Array<{
    id: number;
    name_ar: string;
    name_en: string;
    subcategories: Array<any>;
  }>;
  selectParentCategory?: string;
};

export const CategoriesDropDown: React.FC<CategoriesDropDownProps> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [element, setElement] = useState<Element | null>(null);
  const top =
    (element?.getBoundingClientRect().top ?? 0) +
    (element?.getBoundingClientRect().height ?? 0);
  return (
    <div className="relative">
      <span
        ref={(ref) => {
          setElement(ref);
        }}
        className="sm:w-[354px] block"
      >
        <DropDownBtn
          selectCategory={props.selectParentCategory}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </span>
      <ClientPortal selector="pop-up" show={isOpen}>
        <div
          className="w-[100vw] h-[100vh] fixed inset-0 z-10 bg-netural-100 bg-opacity-0"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={[
            "p-[1rem] max-sm:w-[calc(100%-2rem)] w-[354px] flex flex-col items-stretch gap-[1rem] max-h-[600px] overflow-y-scroll scrollbar-hide justify-start bg-netural-100 shadow-lg rounded-[0.5rem] fixed z-20",
            "max-sm:!left-[50%] max-sm:!translate-x-[-50%] max-sm:!top-[50%] max-sm:translate-y-[-50%]",
          ].join(" ")}
          style={{
            top: top,
            left: element?.getBoundingClientRect().left,
          }}
        >
          {props.categories.map((value) => (
            <React.Fragment key={value.id.toString()}>
              <DropDownItem
                text={value.name_ar}
                onClick={() => setIsOpen(false)}
                id={value.id}
                subCategory={value.subcategories[0]}
              />
              <Divider />
            </React.Fragment>
          ))}
        </div>
      </ClientPortal>
    </div>
  );
};

const DropDownBtn: React.FC<{
  onClick?: () => void;
  selectCategory?: string;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-[1.5rem] border rounded-[0.75rem] border-divider flex flex-row justify-between items-center gap-[1rem] max-sm:w-full max-sm:self-stretch sm:w-[100%] max-h-[64px]"
    >
      <Text.h3 className="text-primary-500">
        {props.selectCategory ?? "جـمـيـع الفـئـات"}
      </Text.h3>
      <Icon icon="ArrowDown" color="#532494" />
    </button>
  );
};

const DropDownItem: React.FC<{
  text: string;
  subCategory: any;
  onClick?: () => void;
  id: number;
}> = (props) => {
  return (
    <Link
      className="px-[1rem] py-[0.5rem] flex flex-row justify-between items-center gap-[16] "
      onClick={props.onClick}
      href={{
        pathname: "/products",
        query: {
          parent_category_name: props.text,
          sub_category_name: props.subCategory?.name_ar,
        },
      }}
    >
      <Text.bodySmall className="text-netural-900">{props.text}</Text.bodySmall>
      <span className="flex items-center w-[1.5rem] h-[1.5rem]">
        <Icon icon="ArrowLeft" color="#999999" />
      </span>
    </Link>
  );
};

const Divider: React.FC<{}> = (props) => {
  return <hr className="border-[#D9D9D9] border-opacity-[0.3]" />;
};
