"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ClientPortalProps {
  selector: string;
  show?: boolean;
}
export const ClientPortal: React.FC<
  React.PropsWithChildren<ClientPortalProps>
> = (props) => {
  const elementRef = useRef<Element | null>(null);
  useEffect(() => {
    elementRef.current = document.getElementById(props.selector);
    if (props.show && elementRef.current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.selector, props.show]);
  return props.show && elementRef.current
    ? createPortal(props.children, elementRef.current)
    : null;
};

export const Dialog: React.FC<
  React.PropsWithChildren<{ show?: boolean; onBackdropClick?: () => void }>
> = (props) => {
  return (
    <ClientPortal selector="modal" show={props.show}>
      <div
        className="absolute top-0 min-h-screen w-[100%] bg-opacity-[0.24] bg-netural-900 "
        onClick={props.onBackdropClick}
        style={{ height: document.body.clientHeight }}
      >
        {props.children}
      </div>
    </ClientPortal>
  );
};

export const DailogContainer: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = (props) => {
  return (
    <div
      className={cn(
        "w-full h-full fixed flex flex-col items-center justify-center px-4",
        props.className
      )}
      // onClick={(e) => e.stopPropagation()}
    >
      {props.children}
    </div>
  );
};
