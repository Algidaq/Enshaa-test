"use client";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { Icon, LinkButton } from "@/components";

export const QutationNavbar: React.FC<{}> = () => {
  useEffect(() => {
    document.body.style.background = "#F9FAFB";
    return () => {
      document.body.style.background = "unset";
    };
  }, []);
  return (
    <>
      <div className="flex flex-row gap-2 items-start justify-start w-full h-[3.375rem] border-b border-divider">
        <Icon icon="Receipt" />
        <p className="heading_4">قائمة طلبات التسعير الحالية :</p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <LinkButton
          href={{ pathname: "/quotations/create" }}
          variant="filled"
          color="secondary"
          text="إضافة جديدة"
          leading={<Icon icon="Plus" />}
          className="flex flex-row items-center gap-[1rem]"
        />

        {/* <div className="flex flex-row items-center gap-4">
          <p>ترتيب حسب</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6406 1.5L7.64062 7.5L1.64062 1.5"
                    stroke="#451E7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-70 mt-[20px] ml-[80px] bg-[#ffffff]">
              <div className="flex flex-row items-center justify-between pr-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 512 512"
                  className="ml-[6px]"
                  id="top-arrow"
                  fill="#999999"
                >
                  <g>
                    <polygon points="256 217.463 403.785 365.248 439.141 329.893 256 146.752 72.859 329.893 108.215 365.248 256 217.463"></polygon>
                  </g>
                </svg>
                <div className="flex flex-row items-center justify-end">
                  <DropdownMenuLabel className="text-[#999999] ">
                    ترتيب حسب
                  </DropdownMenuLabel>
                </div>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[5px]">
                <Link href="/quotations/create" className="w-full">
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D] hover:bg-[#E3D6F5] hover:text-[#532494] w-full text-right">
                      طلبات تمت الموافقة عليها
                    </DropdownMenuLabel>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#2AC769" />
                    </svg>
                  </div>
                </Link>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[5px] ">
                <Link href="/quotations" className="w-full">
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D] hover:bg-[#E3D6F5] hover:text-[#532494] w-full text-right">
                      طلبات معلقة
                    </DropdownMenuLabel>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#F6A609" />
                    </svg>
                  </div>
                </Link>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[5px] ">
                <Link href="/quotations" className="w-full">
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D] hover:bg-[#E3D6F5] hover:text-[#532494] w-full text-right">
                      طلبات مرفوضه
                    </DropdownMenuLabel>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FB4E4E" />
                    </svg>
                  </div>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </div>
    </>
  );
};
