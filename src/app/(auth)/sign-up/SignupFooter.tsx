"use client";
import React from "react";
import { Button, Text } from "@/components";
import Link from "next/link";
import { useSignupFormCtx } from "./SignupForm";

export const SignupFooter: React.FC<{}> = (props) => {
  const ctx = useSignupFormCtx();

  return (
    <>
      <div className="xs:self-stretch md:self-center flex flex-col justify-start items-stretch gap-[32px]">
        <Button
          variant="filled"
          text="متابعة"
          onClick={ctx.sendOtp}
          disabled={ctx.isButtonDisabled}
        />
        <Text.h4 component="p" className="text-center">
          <span className="text-body">لديك حساب بالفعل؟</span>
          &nbsp;
          <Link href={"/login"} className="text-tertiary-500">
            تسجيل الدخول
          </Link>
        </Text.h4>
      </div>
    </>
  );
};
