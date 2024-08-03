"use client";
import React, { useReducer, useState } from "react";

import { Dialog } from "@/components";

import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { OtpUI } from "@/ui";
import { AuthService } from "@/services";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

const individualFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "الاسم غير صحيح" })
    .max(56, { message: "الاسم غير صحيح" })
    .regex(/[a-zA-Zء-ي]/, { message: "الاسم غير صحيح" }),
  phone: z
    .string()
    .startsWith("5", { message: "رقم الهاتف غير صحيح" })
    .length(9, { message: "رقم الهاتف غير صحيح" }),
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" }),
});

type IndividualFormState = z.infer<typeof individualFormSchema> & {
  error?: Partial<
    z.typeToFlattenedError<z.infer<typeof individualFormSchema>>["fieldErrors"]
  >;
};

type IndividualFormAction =
  | {
      type: "update_form";
      payload: {
        key: Exclude<keyof IndividualFormState, "error">;
        value: string;
      };
    }
  | { type: "update_error"; payload: { error: any } };

const kInitialStateIndividualForm: IndividualFormState = {
  email: "",
  phone: "",
  fullName: "",
};

function individualFormReducer(
  prevState: IndividualFormState,
  action: IndividualFormAction
): IndividualFormState {
  switch (action.type) {
    case "update_form":
      const state = {
        ...prevState,
        [action.payload.key]: action.payload.value,
      };

      return { ...state };
    case "update_error":
      return { ...prevState, error: action.payload.error };
    default:
      return kInitialStateIndividualForm;
  }
}

const companyFormSchema = z.object({
  companyName: z
    .string()
    .min(3, { message: "الاسم غير صحيح" })
    .max(256, { message: "الاسم غير صحيح" })
    .regex(/[a-zA-Zء-ي]/, { message: "الاسم غير صحيح" }),
  fullName: z
    .string()
    .min(3, { message: "الاسم غير صحيح" })
    .max(256, { message: "الاسم غير صحيح" })
    .regex(/[a-zA-Zء-ي]/, { message: "الاسم غير صحيح" }),
  phone: z
    .string()
    .startsWith("5", { message: "رقم الهاتف غير صحيح" })
    .length(9, { message: "رقم الهاتف غير صحيح" }),
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" }),
  taxNumber: z
    .string()
    .min(3, { message: "الرقم الضريبي غير صحيح" })
    .regex(/^[0-9]*$/, { message: "الرقم الضريبي غير صحيح" }),
  regNumber: z
    .string()
    .regex(/^[0-9]*$/, { message: "رقم السجل التجاري غير صحيح" }),
});

type CompanyFormState = z.infer<typeof companyFormSchema> & {
  file: FileList[0] | null;
  error?: Partial<
    z.typeToFlattenedError<z.infer<typeof companyFormSchema>>["fieldErrors"]
  > & { file?: string };
};

type CompanyFormAction =
  | {
      type: "update_form";
      payload: {
        key: Exclude<keyof CompanyFormState, "error">;
        value: string;
      };
    }
  | { type: "update_error"; payload: { error: any } }
  | { type: "update_file"; payload: { file: FileList[0] | null } };

const kInitialStateCompanyForm: CompanyFormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  regNumber: "",
  taxNumber: "",
  file: null,
};

function companyFormReducer(
  prevState: CompanyFormState,
  action: CompanyFormAction
): CompanyFormState {
  switch (action.type) {
    case "update_form":
      const state = {
        ...prevState,
        [action.payload.key]: action.payload.value,
      };

      return { ...state };
    case "update_file":
      return { ...prevState, file: action.payload.file };
    case "update_error":
      return { ...prevState, error: action.payload.error };
    default:
      return kInitialStateCompanyForm;
  }
}

type ISignupFormCtx = {
  individualForm: {
    state: IndividualFormState;
    dispatch: React.Dispatch<IndividualFormAction>;
  };
  compnayForm: {
    state: CompanyFormState;
    dispatch: React.Dispatch<CompanyFormAction>;
  };
  sendOtp: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isButtonDisabled?: boolean;
};

const SignupFormCtx = React.createContext<ISignupFormCtx | null>(null);

export const SignupFormProvider: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  const queryPs = useSearchParams();

  const form = queryPs.get("form");

  const [individualFormState, individualFormDispatch] = useReducer(
    individualFormReducer,
    kInitialStateIndividualForm
  );

  const [companyFormState, companyFormDispatch] = useReducer(
    companyFormReducer,
    kInitialStateCompanyForm
  );

  const [isOtpDaigOpen, setIsOtpDaigOpen] = useState(false);

  async function handleOnSendOtp(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const fun = form === "company" ? sendCompanyOtp : sendIndividualOtp;
    await fun();
  }

  async function sendIndividualOtp() {
    const result = individualFormSchema.safeParse(individualFormState);

    if (!result.success) {
      const error = result.error.formErrors.fieldErrors;
      individualFormDispatch({
        type: "update_error",
        payload: { error: error },
      });
      return;
    }
    individualFormDispatch({
      type: "update_error",
      payload: { error: undefined },
    });
    const res = await AuthService.sendSignupOtp(
      `966${individualFormState.phone}`
    );
    if (res.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجا اعادة المحاولة</p>);
      return;
    }
    setIsOtpDaigOpen(true);
  }

  async function sendCompanyOtp() {
    const result = companyFormSchema.safeParse(companyFormState);

    if (!result.success || companyFormState.file === null) {
      const error = result.error?.formErrors.fieldErrors;

      companyFormDispatch({
        type: "update_error",
        payload: {
          error:
            error !== undefined
              ? {
                  ...error,
                  file:
                    companyFormState.file === null
                      ? "الرجا اختيار الملف"
                      : undefined,
                }
              : {
                  file:
                    companyFormState.file === null
                      ? "الرجا اختيار الملف"
                      : undefined,
                },
        },
      });
      return;
    }
    companyFormDispatch({
      type: "update_error",
      payload: { error: undefined },
    });
    const res = await AuthService.sendSignupOtp(`966${companyFormState.phone}`);
    if (res.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجا اعادة المحاولة</p>);
      return;
    }
    setIsOtpDaigOpen(true);
  }

  const isBtnDisabled = false;

  async function handleOnRegister(otp: string) {
    const func =
      form === "company" ? handleCompanySignup : handleIndividualSignup;
    await func(otp);
  }

  async function handleIndividualSignup(otp: string) {
    const data = individualFormState;
    const res = await AuthService.individualSignup({
      email: data.email,
      full_name: data.fullName,
      otp: otp,
      phone_number: `966${data.phone}`,
    });
    if (res.error !== undefined) {
      if (res.error === "This email was used") {
        toast.error(
          <p className="caption">هذا الحساب موجود بالفعل الرجا تسجيل الدخول</p>
        );
      }
      if (res.error === "incorrect otp") {
        toast.error(<p className="caption">رقم التحقق غير صحيح</p>);
        console.log("here2");
      }
      return;
    }
    setCookie("token", res.data.token);
    window.location.href = "/";
  }

  async function handleCompanySignup(otp: string) {
    const res = await AuthService.compnaySignup({
      full_name: companyFormState.fullName,
      email: companyFormState.email,
      phone_number: `966${companyFormState.phone}`,
      company_name: companyFormState.companyName,
      company_registration_number: companyFormState.regNumber,
      company_registeration_certificate: companyFormState.file!,
      vat_number:
        companyFormState.taxNumber.length > 0
          ? companyFormState.taxNumber
          : undefined,
      otp: otp,
    });

    if (res.error !== undefined) {
      if (res.error === "This email was used") {
        toast.error(
          <p className="caption">هذا الحساب موجود بالفعل الرجا تسجيل الدخول</p>
        );
      }
      if (res.error === "incorrect otp") {
        toast.error(<p className="caption">رقم التحقق غير صحيح</p>);
        console.log("here2");
      }
      return;
    }
    setCookie("token", res.data.token);
    window.location.href = "/";
  }

  return (
    <SignupFormCtx.Provider
      value={{
        individualForm: {
          state: individualFormState,
          dispatch: individualFormDispatch,
        },
        compnayForm: {
          state: companyFormState,
          dispatch: companyFormDispatch,
        },
        sendOtp: handleOnSendOtp,
        isButtonDisabled: isBtnDisabled,
      }}
    >
      {props.children}
      <Dialog
        show={isOtpDaigOpen}
        onBackdropClick={() => setIsOtpDaigOpen(false)}
      >
        <div
          className="flex justify-center items-center h-[100%]"
          onClick={() => setIsOtpDaigOpen(false)}
        >
          <OtpUI
            onBackClick={() => setIsOtpDaigOpen(false)}
            confirmBtn={{ onConfirm: handleOnRegister }}
          />
        </div>
      </Dialog>
    </SignupFormCtx.Provider>
  );
};
export const useSignupFormCtx = (): ISignupFormCtx => {
  return React.useContext(SignupFormCtx)!;
};
