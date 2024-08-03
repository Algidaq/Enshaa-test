"use client";

import { ToastContainer } from "react-toastify";

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <>
      {props.children}
      <ToastContainer />
    </>
  );
};
