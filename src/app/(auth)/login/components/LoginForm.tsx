"use client";
import React, { useState } from "react";
import { Button, Dialog, Icon, Text } from "@/components";
import { Input, InputContainer, InputErrorMsg } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";

import { useLoginForm } from "./useLoginForm";
import { OtpUI } from "@/ui";

export const LoginForm: React.FC<{}> = (props) => {
  const { state, actions } = useLoginForm();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <React.Fragment>
      <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
        <form
          onSubmit={actions.handleOnSubmit}
          className="bg-netural-100 rounded-[1.5rem]  min-h-[525px] xs:w-[calc(100%-2rem)] xs:p-[2rem] sm:max-w-[536px] md:p-[3rem]"
        >
          <div className="flex flex-col justify-start items-stretch gap-[40px]">
            <div className="flex flex-col justify-start items-center gap-[32px]">
              <Link href={"/"}>
                <Image
                  className="cursor-pointer"
                  src={"/assets/logo.png"}
                  width={88}
                  height={88}
                  alt={""}
                />
              </Link>
              <Text.h3 component="h1" className="text-subtitle">
                تسجيل دخول
              </Text.h3>
            </div>
            <InputContainer>
              <Input
                type="tel"
                name="phone"
                id="phone"
                label="رقم الجوال"
                placeholder="ادخل رقم الجوال"
                onChange={actions.handleOnPhoneChange}
                value={state.phone.text}
                error={state.phone.error}
                maxLength={9}
                onFocus={actions.handleOnFocus}
                leading={
                  <div className="flex self-center flex-row items-center gap-[12px]">
                    <Icon icon="SaudiFlag" />
                    <Icon icon="ArrowDown" />
                  </div>
                }
              />
              <InputErrorMsg
                msg={state.phone.error ? "رقم الهاتف غير صحيح" : ""}
              />
            </InputContainer>
            <div className="flex flex-col justify-start items-stretch gap-[32px]">
              <Button variant="filled" text="متابعة" busy={state.busy} />
              <Text.h4 component="p" className="text-center">
                <span className="text-inherit text-[#4D4D4D]">
                  ليس لديك حساب ؟
                </span>
                &nbsp;
                <Link href={"/sign-up"} className="text-[#2CCFDB]">
                  انشاء حساب جديد
                </Link>
              </Text.h4>
            </div>
          </div>
        </form>
      </div>
      <Dialog
        show={state.openDialog}
        onBackdropClick={actions.handleOnHideDialog}
      >
        <div className="flex flex-col justify-center items-center min-h-screen ">
          <OtpUI
            onBackClick={actions.handleOnHideDialog}
            confirmBtn={{
              busy: state.otpBtnState,
              onConfirm: actions.handleOnConfirmOtp,
            }}
          />
        </div>
      </Dialog>
    </React.Fragment>
  );
};
