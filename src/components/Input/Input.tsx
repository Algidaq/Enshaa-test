"use client";
import React, { forwardRef } from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type?: Extract<
    React.ComponentPropsWithoutRef<"input">["type"],
    "text" | "password" | "tel" | "email"
  >;
  label: string;
  trailing?: React.ReactNode;
  leading?: React.ReactNode;
  error?: boolean;
}

export const Input = forwardRef<React.ElementRef<"input">, InputProps>(
  function Input(
    { type = "text", label, trailing, leading, error, ...props },
    ref
  ) {
    const borderColor = error ? "border-error" : "border-netural-200 ";
    return (
      <div
        className={[
          `border ${borderColor} px-6 py-5 rounded-[0.75rem] h-[4rem] relative flex flex-col justify-center focus-within:border-primary-50`,
          props.disabled ? "bg-[#F5F5F5]" : "",
        ].join(" ")}
      >
        <div
          className={[
            "position absolute px-[12px] py-[4px] bg-netural-100 top-[-50%] translate-y-[50%]",
            props.disabled ? "!bg-[#F5F5F5]" : "",
          ].join(" ")}
        >
          <label className="text-[0.875rem] font-semibold tracking-[-0.1px] leading-[135%] text-netural-600">
            {label}
          </label>
        </div>
        <div className="flex flex-row justify-start gap-[10px] items-start">
          {leading}
          {leading !== undefined && (
            <div className="w-[1px] h-[100%] bg-divider" />
          )}
          <input
            type="text"
            name="text"
            className="flex-1 w-[100%]  text-[1rem] font-medium tracking[-0.3px] text-netural-900 outline-none 
            placeholder:text-[1rem] placeholder:text-netural-300 placeholder:tracking-[-0.2px] placeholder:leading-[130%] placeholder:font-normal disabled:text-subtitle"
            placeholder="نص توضيحي"
            {...props}
          />
          {trailing}
        </div>
      </div>
    );
  }
);

export const InputContainer: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  return (
    <div className="flex flex-col justify-start items-stretch gap-[0.5rem]">
      {props.children}
    </div>
  );
};

export const InputErrorMsg: React.FC<{ msg?: string }> = (props) => {
  if (!props.msg) return null;
  return <Text.caption className="text-netural-700">{props.msg}</Text.caption>;
};
