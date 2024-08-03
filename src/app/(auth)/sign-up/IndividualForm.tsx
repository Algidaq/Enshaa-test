"use client";

import React from "react";
import { InputContainer, InputErrorMsg, Icon, Input } from "@/components";
import { z } from "zod";
import { useSignupFormCtx } from "./SignupForm";

export const IndividualForm: React.FC<{}> = (props) => {
  const { individualForm } = useSignupFormCtx();

  return (
    <form className="flex flex-col justify-start items-stretch gap-[20px]">
      <InputContainer>
        <Input
          type="email"
          label="البريد الالكتروني"
          placeholder="ادخل البريد الالكتروني"
          value={individualForm.state.email}
          onChange={(e) =>
            individualForm.dispatch({
              type: "update_form",
              payload: { key: "email", value: e.currentTarget.value },
            })
          }
        />
        <InputErrorMsg msg={individualForm.state.error?.email?.[0]} />
      </InputContainer>
      <InputContainer>
        <Input
          type="tel"
          name="phone"
          id="phone"
          label="رقم الجوال"
          placeholder="ادخل رقم الجوال"
          value={individualForm.state.phone}
          maxLength={9}
          onChange={(e) =>
            individualForm.dispatch({
              type: "update_form",
              payload: { key: "phone", value: e.currentTarget.value },
            })
          }
          leading={
            <div className="flex self-center flex-row items-center gap-[12px]">
              <Icon icon="SaudiFlag" />
              <Icon icon="ArrowDown" />
            </div>
          }
        />
        <InputErrorMsg msg={individualForm.state.error?.phone?.[0]} />
      </InputContainer>
      <InputContainer>
        <Input
          type="text"
          label="الاسم"
          placeholder="ادخل الاسم كامل"
          value={individualForm.state.fullName}
          onChange={(e) =>
            individualForm.dispatch({
              type: "update_form",
              payload: { key: "fullName", value: e.currentTarget.value },
            })
          }
        />
        <InputErrorMsg msg={individualForm.state.error?.fullName?.[0]} />
      </InputContainer>
    </form>
  );
};
