"use client";
import React from "react";
import { useSignupFormCtx } from "./SignupForm";
import { InputContainer, InputErrorMsg, Icon, Input } from "@/components";

export const CompanyForm: React.FC<{}> = (props) => {
  const {
    compnayForm: { state, dispatch },
  } = useSignupFormCtx();
  const isRegFileUploaded = state.file !== null;

  return (
    <div className="flex flex-col justify-start items-stretch gap-[20px]">
      <div className="grid xs:grid-cols-1 xs:gap-8 md:grid-cols-2">
        <InputContainer>
          <Input
            type="text"
            label="الاسم"
            placeholder="ادخل الاسم كامل"
            value={state.fullName}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "fullName", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.fullName?.[0]} />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            label="المنشأة"
            placeholder="ادخل اسم الشركة"
            value={state.companyName}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "companyName", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.companyName?.[0]} />
        </InputContainer>

        <InputContainer>
          <Input
            type="tel"
            name="phone"
            id="phone"
            label="رقم الجوال"
            placeholder="ادخل رقم الجوال"
            leading={
              <div className="flex self-center flex-row items-center gap-[12px]">
                <Icon icon="SaudiFlag" />
                <Icon icon="ArrowDown" />
              </div>
            }
            value={state.phone}
            maxLength={9}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "phone", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.phone?.[0]} />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            label="البريد الالكتروني"
            placeholder="ادخل البريد الالكتروني"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "email", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.email?.[0]} />
        </InputContainer>

        <InputContainer>
          <Input
            type="text"
            label="الرقم الضريبي"
            placeholder="ادخل الرقم الضريبي"
            value={state.taxNumber}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "taxNumber", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.taxNumber?.[0]} />
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            label="رقم السجل"
            placeholder="ادخل رقم السجل التجاري"
            value={state.regNumber}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                payload: { key: "regNumber", value: e.currentTarget.value },
              })
            }
          />
          <InputErrorMsg msg={state.error?.regNumber?.[0]} />
        </InputContainer>
        <InputContainer>
          <label
            htmlFor={isRegFileUploaded ? "" : "regFile"}
            className={[
              "py-[20px] px-[24px] border flex-1 rounded-[12px]  flex flex-row justify-start items-center gap-[16px] cursor-pointer",
              isRegFileUploaded ? "border-[#2AC769]" : "border-divider",
            ].join(" ")}
          >
            <Icon icon={isRegFileUploaded ? "Receipt" : "Attchment"} />
            <span
              className={[
                "body_small flex-[1]",
                isRegFileUploaded ? "text-netural-900" : "text-subtitle",
              ].join(" ")}
            >
              {isRegFileUploaded ? state.file?.name : "إرفاق ملف شهادة التسجيل"}
            </span>
            <input
              id="regFile"
              type="file"
              accept="application/pdf,image/png,image/jpeg"
              maxLength={1}
              hidden
              onChange={(e) => {
                const hasFile =
                  e.currentTarget.files !== null &&
                  e.currentTarget.files.length > 0;
                if (!hasFile) return;
                const file = e.currentTarget.files?.[0];
                if (!file) return;
                dispatch({ type: "update_file", payload: { file } });
              }}
            />
            {isRegFileUploaded && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTimeout(
                    () =>
                      dispatch({
                        type: "update_file",
                        payload: { file: null },
                      }),
                    100
                  );
                }}
              >
                <Icon icon="TrashCan" />
              </button>
            )}
          </label>
          <InputErrorMsg msg={state.error?.file} />
        </InputContainer>
      </div>
    </div>
  );
};
