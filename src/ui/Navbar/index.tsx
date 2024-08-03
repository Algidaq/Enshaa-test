import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon, LinkButton } from "@/components";
import { ProfileBtnDropDown } from "./ProfileBtnDropDown";
import { MobileNavbar } from "./MobileNavbar";

export const NavBar: React.FC<{ token?: string }> = (props) => {
  const isLoggedIn = props.token !== undefined;

  return (
    <div className="bg-netural-100 py-[1rem]">
      <nav className="flex flex-row justify-between items-center max-lg:px-4 lg:container lg:mx-auto">
        <div className="border rounded-[1rem] overflow-hidden border-divider">
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              width={48}
              height={48}
              alt="logo"
              objectFit="cover"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <DeskTopNabar isLoggedIn={isLoggedIn} />
        <MobileNavbar isLoggedIn={isLoggedIn} />
      </nav>
    </div>
  );
};

const CartBtn: React.FC<{}> = (props) => {
  return (
    <Link
      href={"/cart"}
      className="px-8 py-4 border border-divider rounded-[0.5rem]  flex flex-row justify-start items-ce gap-[0.5rem]"
    >
      <Icon icon="Cart" color="#532494" />
      <span className="text-[1.125rem] text-primary-500 font-semibold tracking-tighter-[-0.45px] leading-[110%]">
        السلة
      </span>
    </Link>
  );
};

const QuotationsLink: React.FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn }) => {
  return (
    <li className="flex flex-row justify-start items-start cursor-pointer gap-[0.5rem] relative [&_ul]:hidden [&_ul]:hover:flex">
      <Link href="#" className="body_small text-primary-500">
        قائمة التسعير
      </Link>
      <Icon icon="ArrowDown" className="self-center" color="#532494" />
      <ul className="flex flex-col justify-start items-stretch gap-[0.5rem] p-[0.75rem] absolute bg-netural-100 rounded-[0.5rem] z-[20] top-[1rem] w-[276px]">
        <li className="py-[5.5px] px-[1rem] flex flex-row justify-between items-center">
          <span className="body_medium text-subtitle">قائمة التسعير</span>
          <Icon icon="ArrowUp" />
        </li>
        <hr className="border-divider" />
        <li className="body_medium cursor-pointer text-body hover:bg-primary-100 hover:text-primary-500 py-[5.5px] px-[1rem] flex flex-row justify-between items-center ">
          <Link href={isLoggedIn ? "/quotations/create" : "/login"}>
            إنشاء طلب تسعير
          </Link>
        </li>
        <hr className="border-divider" />
        <li className="body_medium cursor-pointer text-body hover:bg-primary-100 hover:text-primary-500 py-[5.5px] px-[1rem] flex flex-row justify-between items-center ">
          <Link href={isLoggedIn ? "/quotations" : "/login"}>
            عرض طلبات التسعير
          </Link>
        </li>
      </ul>
    </li>
  );
};

const DeskTopNabar: React.FC<{ isLoggedIn?: boolean }> = ({ isLoggedIn }) => {
  return (
    <>
      <ul className="flex flex-row justify-start items-start gap-[1rem] max-lg:hidden">
        <li className="flex flex-row justify-start items-start cursor-pointer">
          <Link href="/" className="body_small text-primary-500">
            الرئيسية
          </Link>
        </li>
        <li className="flex flex-row justify-start items-start cursor-pointer">
          <Link href="/products" className="body_small text-primary-500">
            المتجر
          </Link>
        </li>
        <QuotationsLink isLoggedIn={isLoggedIn} />
        <li className="flex flex-row justify-start items-start cursor-pointer">
          <Link href="/projects" className="body_small text-primary-500">
            إدارة المشاريع
          </Link>
        </li>

        <li className="flex flex-row justify-start items-start cursor-pointer">
          <Link href="/#about-us" className="body_small text-primary-500">
            نبذة عنا
          </Link>
        </li>
      </ul>
      <div className="flex flex-row justify-start items-start gap-[1.5rem] max-lg:hidden">
        {!isLoggedIn && (
          <>
            <LinkButton href={"/login"} variant="filled" text="تسجيل الدخول" />
            <LinkButton
              href={"/sign-up"}
              variant="outlined"
              text="إنشاء حساب"
            />
          </>
        )}
        {isLoggedIn && (
          <>
            <CartBtn />
            <ProfileBtnDropDown />
          </>
        )}
      </div>
    </>
  );
};
