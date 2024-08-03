import { Button, Icon, IconButton, Text } from "@/components";
import { Input, InputContainer } from "@/components/Input";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { SignupFormProvider } from "./SignupForm";
import { SignupFooter } from "./SignupFooter";
import { CompanyForm } from "./CompanyForm";
import { IndividualForm } from "./IndividualForm";
import { ToastProvider } from "@/components/ToastProvider";

type SignupFormType = "company" | "individual";
const defaultSignupForm: SignupFormType = "individual";

export default function SignupPage(props: {
  params: {};
  searchParams: { form?: SignupFormType };
}) {
  const token = cookies().get("token");
  if (token && token.value) {
    redirect("/");
  }

  const formType = props.searchParams.form ?? defaultSignupForm;
  const isCompany = formType === "company";
  return (
    <>
      <div className="linear-gradient min-h-screen flex flex-col justify-center xs:items-stretch">
        <div className="">
          <div className="flex flex-col items-stretch bg-netural-100 xs:px-4 xs:py-8 xs:gap-10 xs:w-[calc(100%-2rem)] xs:mx-auto xs:rounded-[0.75rem] md:p-12 md:w-fit max-md:max-w-[591px] md:h-fit">
            <SignupHeader formType={formType} />
            <SignupFormProvider>
              {isCompany ? <CompanyForm /> : <IndividualForm />}
              <SignupFooter />
            </SignupFormProvider>
          </div>
        </div>
      </div>
      <ToastProvider />
    </>
  );
}

const SignupHeader: React.FC<{ formType: SignupFormType }> = (props) => {
  return (
    <div className="flex flex-col justify-start items-stretch gap-[32px] sm:w-[427px] sm:self-center">
      <div className="flex flex-row items-start w-[100%] relative">
        <IconButton
          className="bg-[#F5F5F5] rounded-[32px] absolute z-[1]"
          width={32}
          height={32}
        >
          <Icon icon="ArrowRight" />
        </IconButton>
        <Link
          href="/"
          className="flex flex-1 flex-row justify-center items-start"
        >
          <Image
            src={"/assets/logo.png"}
            className="w-[88px] h-[88px] object-cover"
            width={88}
            height={88}
            alt={""}
          />
        </Link>
      </div>
      <Text.h1 className="text-subtitle text-center">إنشاء حساب</Text.h1>
      <Tabs formType={props.formType} />
    </div>
  );
};
const activeTabClasses =
  "bg-netural-100 rounded-[8px] text-primary-500 shadow-sm";

const Tabs: React.FC<{ formType: SignupFormType }> = (props) => {
  const isCompany = props.formType === "company";
  return (
    <ul className="bg-[#F8F8F8] rounded-[12px] p-[6px] flex flex-row">
      <li
        className={`py-[13px] flex flex-row items-center justify-center flex-1 ${
          !isCompany ? activeTabClasses : ""
        }`}
      >
        <Link href={{ pathname: "/sign-up", query: { form: "individual" } }}>
          <Text.subtitle>حساب فرد</Text.subtitle>
        </Link>
      </li>
      <li
        className={`py-[13px] flex flex-row items-center justify-center flex-1 ${
          isCompany ? activeTabClasses : ""
        }`}
      >
        <Link href={{ pathname: "/sign-up", query: { form: "company" } }}>
          <Text.subtitle>شركة</Text.subtitle>
        </Link>
      </li>
    </ul>
  );
};
