"use client";

import { Button, Icon, IconButton, Text } from "@/components";
import { useEffect, useState } from "react";

export const OtpUI: React.FC<{
  onBackClick?: () => void;
  confirmBtn?: {
    busy?: boolean;
    onConfirm?: (otp: string) => void;
  };
}> = (props) => {
  const [otp, setOtp] = useState("");

  const handleOnChange = (otp: string) => {
    setOtp(otp);
  };

  const isButtonDisabled = otp.length < 4;

  return (
    <div
      className="md:p-[48px] rounded-[2rem] bg-netural-100 md:max-w-[523px] xs:w-[calc(100%-2rem)] xs:p-[2rem] z-[10]"
      // style={{ maxWidth: 523 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col justify-start items-center gap-[40px]">
        <div className="flex flex-row justify-start items-start">
          <div className="flex flex-col justify-start items-start gap-[32px] self-center">
            <Backbutton onClick={props.onBackClick} />
            <Icon icon="Phone" className="self-center" />
            <OtpTitle />
            <OtpInputs onChange={handleOnChange} />
          </div>
        </div>
        <OtpTimer />

        <Button
          text="متابعة"
          variant="filled"
          fullWidth
          disabled={isButtonDisabled}
          onClick={() => props.confirmBtn?.onConfirm?.(otp)}
          busy={props.confirmBtn?.busy}
        />
      </div>
    </div>
  );
};

const Backbutton: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <button
      className="bg-[#F5F5F5] flex flex-row justify-center items-center"
      onClick={props.onClick}
      style={{ width: 32, height: 32, borderRadius: 32 }}
    >
      <Icon icon="ArrowRight" />
    </button>
  );
};

const OtpTitle: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-[16px]">
      <Text.h2 className="text-body self-center">رمز التحقق</Text.h2>
      <p className="subtitle text-netural-400 text-center">
        لقد أرسلنا لك رمز التحقق على رقم هاتفك المحمول
      </p>
    </div>
  );
};

const OtpTimer: React.FC<{ onResendOtp?: () => void }> = (props) => {
  const [timer, setTimer] = useState(120);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((value) => {
        if (value <= 0) return value;
        return value - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const mintues = Math.floor(timer / 60);
  const formattedMins = mintues > 10 ? `${mintues}` : `0${mintues}`;
  const seconds = timer - mintues * 60;
  const formattedSecs = seconds > 10 ? `${seconds}` : `0${seconds}`;
  return (
    <>
      {timer > 0 && (
        <Text.h4
          component="p"
          className="text-center text-primary-500 self-stretch"
          style={{ alignSelf: "stretch" }}
          dir="ltr"
        >
          {`${formattedMins}: ${formattedSecs}`}
        </Text.h4>
      )}
      {timer === 0 && (
        <button className="w-[100%]">
          <Text.h4 component="span" className="text-tertiary-500">
            إعادة إرسال رمز التحقق
          </Text.h4>
        </button>
      )}
    </>
  );
};

const OtpInputs: React.FC<{ onChange?: (otp: string) => void }> = (props) => {
  const [otps, setOtps] = useState(["", "", "", ""]);

  const updateOtpValue = (index: number, value: string) => {
    const newOtps = otps.map((otp, otpIndex) => {
      if (otpIndex === index) {
        otp = value;
      }
      return otp;
    });
    setOtps(newOtps);
    props.onChange?.(newOtps.join(""));
  };

  function handleOnChange(index: number) {
    return (event: React.KeyboardEvent<HTMLInputElement>) => {
      const value = event.key;

      const numberRegex = /[0-9]/;

      if (event.key === "Backspace") {
        if (otps[index] === "") {
          (
            event.currentTarget.previousSibling as HTMLInputElement | null
          )?.focus();

          return;
        }
        return updateOtpValue(index, "");
      }

      if (!numberRegex.test(value)) return;
      updateOtpValue(index, value);
      const nextInput = event.currentTarget
        .nextElementSibling as HTMLInputElement | null;
      nextInput?.focus();
    };
  }

  return (
    <div
      className="flex flex-row justify-start items-start self-center sm:gap-[2rem] xs:gap-[1rem]"
      dir="ltr"
    >
      {Array.from({ length: 4 }, (v, index) => index).map((index) => (
        <input
          key={index.toString()}
          className="sm:w-[4rem] sm:h-[4rem] xs:h-[3rem] xs:w-[3rem]  border bg-[#FFFFFF] rounded-[0.75rem] outline-none border-divider text-[1.125rem] text-center font-semibold text-primary-500 focus:border-primary-100"
          // dir="ltr"
          // maxLength={1}
          onKeyUp={handleOnChange(index)}
          inputMode="numeric"
          // onChange={handleOnInputChange(index)}
          value={otps[index]}
        />
      ))}
    </div>
  );
};
