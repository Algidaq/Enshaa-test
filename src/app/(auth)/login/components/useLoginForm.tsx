import { PromiseResult } from "@/helpers";
import { HttpService } from "@/services";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type SendOtpRes =
  | { result: { message: string; ttl?: number }; error: undefined }
  | { result: undefined; error: string };

function validatePhoneNumber(number: string) {
  const saudiPhoneNumberPattern =
    /^(\+966|00966|966)?0?(5\d{8}|1\d{8}|2\d{8})$/;
  return saudiPhoneNumberPattern.test(number);
}

async function sendOtp(phoneNumber: string): Promise<SendOtpRes> {
  try {
    const res = await HttpService.post("/auth/login-otp", {
      phone_number: phoneNumber,
    });
    const data = res.data as { message: string; ttl?: number };
    return { result: data, error: undefined };
  } catch (e) {
    return { error: "An Error Occured", result: undefined };
  }
}

async function confirmOtp(
  phoneNumber: string,
  otp: string
): Promise<PromiseResult<any>> {
  try {
    const res = await HttpService.post("/auth/login", {
      phone_number: phoneNumber,
      otp: otp,
    });
    const data = res.data;
    return { data: data, error: undefined };
  } catch (e) {
    return { error: "An error occurred", data: undefined };
  }
}

export const useLoginForm = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const [canShowError, setCanShowError] = useState(false);

  const [busy, setBusy] = useState(false);

  const [otpBtnState, setOtpBtnState] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const showDialog = () => setOpenDialog(true);
  const handleOnHideDialog = () => {
    setOpenDialog(false);
    setOtpBtnState(false);
  };

  const showLoadingIndicator = () => setBusy(true);

  const hideLoadingIndicator = () => setBusy(false);

  const handleOnPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleOnSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const isPhoneNumberValid = validatePhoneNumber(phone);

    if (!isPhoneNumberValid) return handleOnFocus();

    showLoadingIndicator();
    const result = await sendOtp(`966${phone}`);
    hideLoadingIndicator();

    if (result.error !== undefined) {
      toast.error(<p className="caption text-error">رقم الهاتف غير صحيح</p>);
      return;
    }

    showDialog();
  };

  const handleOnFocus = () => {
    setCanShowError(true);
  };

  const handleOnConfirmOtp = async (otp: string) => {
    setOtpBtnState(true);

    const result = await confirmOtp(`966${phone}`, otp);

    setOtpBtnState(false);

    if (result.error) {
      return;
    }

    const token = result.data.token;
    setCookie("token", token);
    window.location.href = "/";
  };

  return Object.freeze({
    state: {
      busy: busy,
      otpBtnState: otpBtnState,
      openDialog: openDialog,
      phone: {
        text: phone,
        error:
          canShowError && phone.length > 0
            ? !validatePhoneNumber(phone)
            : false,
      },
    },
    actions: {
      handleOnPhoneChange,
      handleOnSubmit,
      handleOnFocus,
      handleOnConfirmOtp,
      handleOnHideDialog,
    },
  });
};
