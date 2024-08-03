"use client";
import React, { useEffect, useState } from "react";
import Styles from "./Button.module.css";
import { Text } from "../Text";
import { LoadingIndicator } from "../LoadingIndicator";
import Link, { LinkProps } from "next/link";

type ButtonVaraint = "filled" | "outlined" | "text";
type ButtonColor = "primary" | "secondary" | "tertiary";
interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "children"> {
  variant: ButtonVaraint;
  text: string;
  color?: ButtonColor;
  busy?: boolean;
  fullWidth?: boolean;
  href?: string;
}

const ButtonStyles: Record<
  ButtonVaraint,
  Record<ButtonColor, string> | string
> = {
  filled: {
    primary:
      "bg-primary-500 hover:bg-primary-500 disabled:bg-netural-500 text-netural-100",
    secondary:
      "bg-secondary-500 hover:bg-secondary-700 disabled:bg-netural-500 text-netural-100",
    tertiary:
      "bg-tertiary-500 hover:bg-tertiary-700 disabled:bg-netural-500 text-netural-100",
  },
  outlined:
    "bg-natural-200 border-[1px] border-netural-200 text-netural-600 hover:border-netural-600 disabled:border-netural-500 disabled:text-netural-600",
  text: "text-[#2B2C6D] hover:text-secondary-700 disabled:text-netural-500",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  color = "primary",
  text,
  disabled,
  busy,
  className,
  fullWidth,
  ...props
}) => {
  const btnStyles = ButtonStyles[variant];
  const styles = typeof btnStyles === "string" ? btnStyles : btnStyles[color];

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (!showAnimation) return;
    const timeOutId = setTimeout(() => {
      setShowAnimation(false);
    }, 150);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [showAnimation]);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!showAnimation) setShowAnimation(true);
    props.onClick?.(e);
  };

  return (
    <button
      className={[
        Styles.button,
        styles,
        showAnimation ? Styles.bounce_click : "",
        fullWidth ? "w-[100%]" : "",
        className === undefined ? "" : className,
      ].join(" ")}
      disabled={busy || disabled}
      {...props}
      onClick={handleOnClick}
    >
      {busy && <LoadingIndicator />}
      {!busy && (
        <Text.h3 component="span" className="text-[color:inherit]">
          {text}
        </Text.h3>
      )}
    </button>
  );
};

interface LinkButtonProps extends Omit<LinkProps, "children"> {
  variant: ButtonVaraint;
  text: string;
  color?: ButtonColor;
  fullWidth?: boolean;
  leading?: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant,
  color = "primary",
  text,
  className,
  fullWidth,
  leading,
  ...props
}) => {
  const btnStyles = ButtonStyles[variant];
  const styles = typeof btnStyles === "string" ? btnStyles : btnStyles[color];

  return (
    <Link
      className={[
        Styles.button,
        styles,
        // showAnimation ? Styles.bounce_click : "",
        fullWidth ? "w-[100%]" : "",
        className !== undefined ? className : "",
      ].join(" ")}
      {...props}
    >
      {leading !== undefined && leading}
      <Text.bodySmall component="span" className="text-[color:inherit]">
        {text}
      </Text.bodySmall>
    </Link>
  );
};
