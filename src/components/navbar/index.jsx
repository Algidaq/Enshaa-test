"use client";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileModal from "./profileModal";
import PhoneModal from "./phoneModal";
import OtpModal from "./otpModal";
import LanguagModal from "./languagModal";
import DoneModal from "./doneModal";
import React, { useState } from "react";
import CancelModal from "./cancelModal";
import { apiGetProfile } from "@/service";
import { Profile } from "@/service/profile";

export default function NavBar() {
  const [phone, setPhone] = useState(null);

  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const openProfileModal = () => {
    setProfileModalIsOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalIsOpen(false);
  };

  const [phoneModalIsOpen, setPhoneModalIsOpen] = useState(false);
  const openPhoneModal = () => {
    setPhoneModalIsOpen(true);
  };

  const closePhoneModal = (phoneNumber) => {
    if (phoneNumber) {
      setPhone(phoneNumber);
    }
    setPhoneModalIsOpen(false);
    setOtpModalIsOpen(true);
  };

  const [otpModalIsOpen, setOtpModalIsOpen] = useState(false);
  const openOtpModal = () => {
    setOtpModalIsOpen(true);
  };

  const closeOtpModal = () => {
    setOtpModalIsOpen(false);
    setDoneModalIsOpen(true);
  };

  const [languageModalIsOpen, setLanguageModalIsOpen] = useState(false);
  const openLanguageModal = () => {
    setLanguageModalIsOpen(true);
  };

  const closeLanguageModal = () => {
    setLanguageModalIsOpen(false);
    setDoneModalIsOpen(true);
  };

  const [doneModalIsOpen, setDoneModalIsOpen] = useState(false);
  const openDoneModal = () => {
    setDoneModalIsOpen(true);
  };

  const closeDoneModal = () => {
    setDoneModalIsOpen(false);
  };
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const openLogoutModal = () => {
    setLogoutModalIsOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalIsOpen(false);
  };
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center justify-between pr-[100px] pt-[40px] pl-[100px]">
        <div className="flex items-center gap-8 border-2 border-[#E6E6E6] rounded-[16px]">
          <span className="sr-only">Home</span>
          <Image src={Logo} className="h-[65px] w-[70px]" alt="Logo" />
        </div>
        <div className="flex items-center gap-4">
          <div className=" lg:block hidden sm:hidden">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    الرئيسية{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    المتجر{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    إدارة المشاريع{" "}
                  </a>
                </li>
                <li className="flex flex-row gap-[8px] items-center">
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    قائمة التسعير
                  </a>
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
                    <DropdownMenuContent className="w-56 mt-[15px] ml-[190px] bg-[#ffffff]">
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
                            قائمة التسعير
                          </DropdownMenuLabel>
                        </div>
                      </div>
                      <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                      <div className="flex flex-row items-center justify-end pr-[5px]">
                        <Link href="/quotations/create" className="w-full">
                          <DropdownMenuLabel className="text-[#4D4D4D] hover:bg-[#E3D6F5] hover:text-[#532494] w-full text-right">
                            إنشاء طلب تسعير
                          </DropdownMenuLabel>
                        </Link>
                      </div>
                      <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                      <div className="flex flex-row items-center justify-end pr-[5px] ">
                        <Link href="/quotations" className="w-full">
                          <DropdownMenuLabel className="text-[#4D4D4D] hover:bg-[#E3D6F5] hover:text-[#532494] w-full text-right">
                            عرض طلبات التسعير
                          </DropdownMenuLabel>
                        </Link>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>

                <li>
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    نبذة عنا{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#451E7B] transition hover:text-gray-500/75"
                    href="#"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[24px] h-[64px] ">
          <div className="rounded bg-[#ffffff] border-2 border-[#E6E6E6] h-[45px] radius-[8px] p-[16px] flex flex-row items-center justify-center gap-[8px]">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              stroke="#451E7B"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <p className="text-[#451E7B]">السلة</p>
          </div>
          <div className="rounded bg-[#ffffff] flex flex-row items-center justify-center  p-[12px] border-2 border-[#E6E6E6] gap-[10px] h-[45px] radius-[8px]">
            <div className="flex flex-row justify-center p-[8px] radius-[4px] bg-[#CDF5FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#03C7F3"
                className="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <svg
                    aria-hidden="true"
                    width="10"
                    height="10"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6406 1.5L7.64062 7.5L1.64062 1.5"
                      stroke="#1A1A1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-[15px] ml-[130px] bg-[#ffffff]">
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
                    <DropdownMenuLabel className="text-[#999999]">
                      الاعدادات العامة
                    </DropdownMenuLabel>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#999999"
                      className="bi bi-gear "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                    </svg>
                  </div>
                </div>
                <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                <DropdownMenuItem asChild onClick={openProfileModal}>
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D]">
                      الملف الشخصي
                    </DropdownMenuLabel>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width={16}
                      height={16}
                      xmlSpace="preserve"
                    >
                      <path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                <DropdownMenuItem asChild onClick={openPhoneModal}>
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D]">
                      تغيير الرقم
                    </DropdownMenuLabel>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.314 28.323"
                      width={16}
                      height={16}
                      xmlSpace="preserve"
                    >
                      <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                    </svg>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                <DropdownMenuItem asChild onClick={openLanguageModal}>
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[#4D4D4D]">
                      تغيير اللغة
                    </DropdownMenuLabel>
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 128 128"
                    >
                      <path d="M113.66 23.69q-.345-.435-.72-.87A63.786 63.786 0 0 0 64.92.02C64.61.01 64.31 0 64 0s-.61.01-.92.02a63.789 63.789 0 0 0-48.15 22.96 6.164 6.164 0 0 0-.47.57.138.138 0 0 1-.03.04 63.8 63.8 0 0 0 0 80.82.138.138 0 0 1 .03.04 6.171 6.171 0 0 0 .47.57l.01.01a63.776 63.776 0 0 0 48.14 22.95c.614.02 1.226.02 1.84 0a63.786 63.786 0 0 0 48.02-22.8q.375-.435.72-.87a63.826 63.826 0 0 0 0-80.62zM99.49 62.25a106.208 106.208 0 0 0-4.07-28.03 69.57 69.57 0 0 0 16.19-7.51 60.158 60.158 0 0 1 12.86 35.54zM65.75 3.59c10.69 1.1 19.99 12.14 25.36 28.3a100.612 100.612 0 0 1-25.36 3.58zm-3.5 31.88a100.612 100.612 0 0 1-25.36-3.58c5.37-16.16 14.67-27.2 25.36-28.3zm0 3.5v23.28H32.01a104.4 104.4 0 0 1 3.85-27.02 104.159 104.159 0 0 0 26.39 3.74zm0 26.78v23.28a104.161 104.161 0 0 0-26.39 3.74 104.4 104.4 0 0 1-3.85-27.02zm0 26.78v31.88c-10.69-1.1-19.99-12.14-25.36-28.3a100.612 100.612 0 0 1 25.36-3.58zm3.5 0a100.612 100.612 0 0 1 25.36 3.58c-5.37 16.16-14.67 27.2-25.36 28.3zm0-3.5V65.75h30.24a104.477 104.477 0 0 1-3.85 27.03 103.333 103.333 0 0 0-26.39-3.75zm0-26.78V38.97a103.33 103.33 0 0 0 26.39-3.75 104.478 104.478 0 0 1 3.85 27.03zm43.6-38.26a66.171 66.171 0 0 1-14.98 6.91c-3.84-11.42-9.61-20.5-16.48-25.79a60.6 60.6 0 0 1 31.46 18.88zM50.11 5.11C43.24 10.4 37.47 19.48 33.63 30.9A67.031 67.031 0 0 1 18.65 24 60.513 60.513 0 0 1 50.11 5.11zM16.39 26.7a69.605 69.605 0 0 0 16.19 7.53 106.07 106.07 0 0 0-4.07 28.02H3.53A60.188 60.188 0 0 1 16.39 26.7zm12.12 39.05a106.069 106.069 0 0 0 4.07 28.02v.01a69.183 69.183 0 0 0-16.19 7.52A60.188 60.188 0 0 1 3.53 65.75zM18.65 104a67.031 67.031 0 0 1 14.98-6.9c3.84 11.42 9.61 20.5 16.48 25.79A60.514 60.514 0 0 1 18.65 104zm59.24 18.89c6.87-5.29 12.64-14.37 16.48-25.79a66.169 66.169 0 0 1 14.98 6.91 60.6 60.6 0 0 1-31.46 18.88zm33.72-21.6a69.573 69.573 0 0 0-16.19-7.51 106.208 106.208 0 0 0 4.07-28.03h24.98a60.158 60.158 0 0 1-12.86 35.54z" />
                    </svg>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
                <DropdownMenuItem asChild onClick={openLogoutModal}>
                  <div className="flex flex-row items-center justify-end pr-[20px]">
                    <DropdownMenuLabel className="text-[red]">
                      تسجيل الخروج
                    </DropdownMenuLabel>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4"
                        stroke="red"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 12H20M20 12L17 9M20 12L17 15"
                        stroke="red"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="block lg:hidden sm:block">
                <button
                  className="rounded bg-[#0388A5DE] p-2 text-white transition hover:bg-[#ffffff]"
                  data-dropdown-toggle="drop"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hover:stroke-[#026b86]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-[15px] lg:ml-[130px] sm:ml-[100px]  bg-[#ffffff]">
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  الرئيسية
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  المتجر
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  إدارة المشاريع
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  قائمة التسعير
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  نبذة عنا
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
              <div className="flex flex-row items-center justify-end pr-[20px]">
                <DropdownMenuLabel className="text-[#4D4D4D]">
                  تواصل معنا
                </DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator className="ml-[10px] mr-[10px] " />
            </DropdownMenuContent>
          </DropdownMenu>
          {profileModalIsOpen && (
            <ProfileModal
              isOpen={openProfileModal}
              onClose={closeProfileModal}
            ></ProfileModal>
          )}
          {phoneModalIsOpen && (
            <PhoneModal
              isOpen={openPhoneModal}
              onClose={closePhoneModal}
            ></PhoneModal>
          )}
          {otpModalIsOpen && (
            <OtpModal isOpen={openOtpModal} onClose={closeOtpModal}></OtpModal>
          )}
          {languageModalIsOpen && (
            <LanguagModal
              isOpen={openLanguageModal}
              onClose={closeLanguageModal}
            ></LanguagModal>
          )}
          {doneModalIsOpen && (
            <DoneModal
              isOpen={openDoneModal}
              onClose={closeDoneModal}
            ></DoneModal>
          )}
          {logoutModalIsOpen && (
            <CancelModal
              isOpen={openLogoutModal}
              onClose={closeLogoutModal}
            ></CancelModal>
          )}
        </div>
      </div>
    </div>
  );
}
