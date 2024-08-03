"use client";

import { Icon, LinkButton } from "@/components";
import Link, { LinkProps } from "next/link";
import { useEffect, useState } from "react";
import { ProfileBtnDropDown, ProfileDropDown } from "./ProfileBtnDropDown";

export const MobileNavbar: React.FC<{ isLoggedIn?: boolean }> = ({
  isLoggedIn,
}) => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (!showNav) return;
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [showNav]);
  const toggleNavbar = () => setShowNav((prev) => !prev);
  const hideNavbar = () => setShowNav(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex flex-row items-center gap-4">
        {isLoggedIn && (
          <>
            <button
              ref={(ref) => setAnchorEl(ref)}
              onClick={() => setShowSettings((prev) => !prev)}
            >
              <Icon icon="Settings" color="black" />
            </button>
            <ProfileDropDown
              anchorEl={anchorEl}
              isOpen={showSettings}
              onClose={() => setShowSettings(false)}
            />
          </>
        )}

        <button onClick={toggleNavbar}>
          <Icon icon={showNav ? "Cross" : "HumbrugerMenu"} />
        </button>
      </div>
      <div
        className={[
          "absolute top-[5rem] bg-netural-100 h-[calc(100dvh-_5rem)] transition-[transform] origin-top duration-150 w-[100%] left-0 z-[20] overflow-y-scroll",
          showNav ? "flex items-stretch scale-y-100" : "scale-y-[0]",
        ].join(" ")}
      >
        <nav className="flex flex-col flex-[1] px-[16px] pb-[16px]">
          <ul className="flex flex-col flex-1 justify-start items-stretch gap-[1rem]">
            <MobileLink href="/" onClick={hideNavbar}>
              الرئيسية
            </MobileLink>
            <MobileLink href="/products" onClick={hideNavbar}>
              المتجر
            </MobileLink>
            {isLoggedIn && (
              <MobileLink href="/cart">
                <div className="flex flex-row items-center gap-4">
                  <Icon icon="Cart" />
                  <span>السلة</span>
                </div>
              </MobileLink>
            )}

            <QuotationsLinks isLoggedIn={isLoggedIn} />
            <MobileLink href="/projects" onClick={hideNavbar}>
              إدارة المشاريع
            </MobileLink>

            <MobileLink href="/#about-us" onClick={hideNavbar}>
              نبذة عنا
            </MobileLink>
          </ul>
          {!isLoggedIn && (
            <div className="flex flex-row gap-[1rem]">
              <LinkButton
                href={"/login"}
                variant="filled"
                text="تسجيل الدخول"
                fullWidth
              />
              <LinkButton
                href={"/sign-up"}
                variant="outlined"
                text="إنشاء حساب"
                fullWidth
              />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

const MobileLink: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  return (
    <li className="flex flex-row justify-start items-start cursor-pointer py-[16px]  border-b-primary-500">
      <Link className="body_large text-primary-500" {...props}>
        {props.children}
      </Link>
    </li>
  );
};

const QuotationsLinks: React.FC<{ isLoggedIn?: boolean }> = ({
  isLoggedIn,
}) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <button
        className="flex w-full flex-row justify-between items-center"
        onClick={() => setShowLinks((prev) => !prev)}
      >
        <MobileLink
          href={""}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          قائمة التسعير
        </MobileLink>
        <Icon icon={showLinks ? "ArrowUp" : "ArrowDown"} />
      </button>
      <ul
        className={[
          "flex-col transition-[scale]  h-[100%] origin-top",
          showLinks ? "scale-y-100 flex" : "scale-y-0 hidden",
        ].join(" ")}
      >
        <MobileLink href={isLoggedIn ? "/quotations/create" : "/login"}>
          إنشاء طلب تسعير
        </MobileLink>
        <hr className="border-divider" />
        <MobileLink href={isLoggedIn ? "/quotations" : "/login"}>
          عرض طلبات التسعير
        </MobileLink>
      </ul>
    </div>
  );
};
