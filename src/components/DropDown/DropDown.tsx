"use client";

import React, { ElementRef, useRef } from "react";

type DropDownProps = {
  renderBtn: () => React.ReactNode;
};

export const DropDown: React.FC<React.PropsWithChildren<DropDownProps>> = (
  props
) => {
  const ref = useRef<ElementRef<"span"> | null>(null);

  return (
    <div>
      <span ref={ref}>{props.renderBtn()}</span>
      <div className="absolute top-[50%] translate-y-[-50%]">
        {props.children}
      </div>
    </div>
  );
};
