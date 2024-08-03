"use client";

import { deleteTokenCookie } from "@/app/action";
import { ClientPortal, Icon } from "@/components";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";

export const ProfileBtnDropDown: React.FC<{}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchorEl] = useState<Element | null>(null);

  return (
    <>
      <button
        ref={(ref) => setAnchorEl(ref)}
        onClick={() => setIsOpen(true)}
        className="px-4 py-4 rounded-[0.5rem] max-h-[56px] border border-divider flex flex-row items-center gap-[0.5rem]"
      >
        <span className="h-[36px] w-[36px] rounded-[0.25rem] bg-secondary-100 flex items-center justify-center ">
          <Icon icon="Settings" color={"#03C7F3"} />
        </span>
        <span className="h-[36px] w-[36px] rounded-[0.25rem] flex items-center justify-center">
          <Icon icon="ArrowDown" color="#532494" />
        </span>
      </button>
      <ProfileDropDown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorEl={anchor}
      />
    </>
  );
};

export const ProfileDropDown: React.FC<{
  isOpen?: boolean;
  anchorEl?: Element | null;
  onClose?: () => void;
}> = ({ anchorEl, isOpen, onClose }) => {
  const handleOnLogout = async () => {
    await deleteTokenCookie();
    window.location.reload();
    // const domain = getDomainName();

    // // deleteCookie("token", { domain: domain, path: "/" });
    // let Cookies = document.cookie.split(";");
    // // set past expiry to all cookies
    // for (let i = 0; i < Cookies.length; i++) {
    //   document.cookie = Cookies[i] + "=; expires=" + new Date(0).toUTCString();
    // }
    // window.location.reload();
  };

  return (
    <ClientPortal selector="pop-up" show={isOpen}>
      <div
        className="w-[100vw] h-[100vh] fixed inset-0 z-50 bg-netural-100 bg-opacity-0"
        onClick={onClose}
      >
        <div
          className={[
            "p-[0.75rem] w-[276px] flex flex-col items-stretch gap-[0.5rem]  bg-netural-100 shadow-lg rounded-[0.5rem] fixed z-20",
          ].join(" ")}
          style={{
            top:
              (anchorEl?.getBoundingClientRect().top ?? 0) +
              (anchorEl?.getBoundingClientRect().height ?? 0),
            left: anchorEl?.getBoundingClientRect().left,
          }}
        >
          <div className="py-[8px] flex flex-row items-center gap-[1rem]">
            <span className="flex items-center h-[24px] w-[24px">
              <Icon icon="Settings" stroke={"#999999"} />
            </span>
            <span className="body_medium flex-[1] text-subtitle">
              الاعدادات العامة
            </span>
            <span className="flex flex-col items-center justify-center">
              <Icon icon="ArrowUp" color="#999999" />
            </span>
          </div>
          <hr className="border-divider" />
          <div className="py-[8px] flex flex-row items-center gap-[1rem] hover:bg-primary-100 cursor-pointer [&_span.text]:text-subtitle [&_span.text]:hover:text-primary-500 [&_>span>svg]:fill-subtitle [&_>span>svg]:hover:fill-primary-500">
            <span className="h-[24px] w-[24px] flex flex-col items-center justify-center">
              <Icon icon="Profile" />
            </span>
            <span className="body_medium text">الملف الشخصي</span>
          </div>
          <hr className="border-divider" />

          <Link
            href={"/orders"}
            className="py-[8px] flex flex-row items-center gap-[1rem] hover:bg-primary-100 cursor-pointer [&_span.text]:text-subtitle [&_span.text]:hover:text-primary-500 [&_>span>svg]:text-subtitle [&_>span>svg]:hover:text-primary-500"
          >
            <span className="h-[24px] w-[24px] flex flex-col items-center justify-center">
              <Icon icon="Receipt" />
            </span>
            <span className="body_medium text"> الطلبات االسابقة</span>
          </Link>
          <hr className="border-divider" />
          <Link
            href={"/wallet"}
            className="py-[8px] flex flex-row items-center gap-[1rem] hover:bg-primary-100 cursor-pointer [&_span.text]:text-subtitle [&_span.text]:hover:text-primary-500 [&_>span>svg]:text-subtitle [&_>span>svg]:hover:text-primary-500"
          >
            <span className="h-[24px] w-[24px] flex flex-col items-center justify-center">
              <Icon icon="Wallet" />
            </span>
            <span className="body_medium text">المحفظة الخاصة بي</span>
          </Link>
          <hr className="border-divider" />
          <button
            className="py-[8px] flex flex-row items-center gap-[1rem]"
            onClick={handleOnLogout}
          >
            <span className="flex items-center justify-center h-[24px] w-[24px]">
              <Icon icon="PowerOff" />
            </span>
            <span className="body_medium text-error">تسجيل خروج</span>
          </button>
        </div>
      </div>
    </ClientPortal>
  );
};

function getDomainName(): string {
  const hostname = window.location.hostname;

  // Split the hostname into parts
  const parts = hostname.split(".");

  // If there are more than two parts, return the last two as the domain name
  // This assumes the domain structure is something like "sub.domain.tld"
  if (parts.length > 2) {
    return parts.slice(-2).join(".");
  }

  // If there are only two parts, return them as they are
  // This handles cases like "domain.tld"
  return hostname;
}
