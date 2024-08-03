"use client";
import React, { useEffect, useState } from "react";

import { Button, DailogContainer, Dialog, Icon } from "@/components";
import { useCartPageCtx } from "./CartPageProvider";
import { useBusy } from "@/hooks";
import { useRouter } from "next/navigation";

export const RequestQuotationSuccessDailog: React.FC<{}> = () => {
  const ctx = useCartPageCtx();
  const [routerBusy, routerBusyActions] = useBusy(false);
  const router = useRouter();

  useEffect(() => {
    return () => {
      routerBusyActions.hideLoadingIndicator();
    };
  }, []);

  const handleOnProceedToPayment = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    ctx.hideRequestQuotationSuccessDailog();
  };

  function handleOnShowQuotationRequest(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    routerBusyActions.showLoadingIndicator();
    event.stopPropagation();
    if (ctx.state.quotationId === null) return;
    router.push(`/quotations/${ctx.state.quotationId}`);
  }

  function handleOnBackDropClick(): void {
    return;
  }

  return (
    <Dialog
      show={ctx.state.isRequestQuotationSuccessDailogVisible}
      onBackdropClick={handleOnBackDropClick}
    >
      <DailogContainer>
        <div className="p-8 rounded-[0.75rem] bg-netural-100">
          <div className="flex flex-col gap-4">
            <p className="heading_3 text-primary-500">طلب التسعير</p>
            <p className="body_small text-body">
              تم إنشاء طلب للمنتجات غير المسعرة بنجاح
            </p>
            <div className="flex gap-8 mt-8">
              <Button
                variant="filled"
                text="متابعة الطلب"
                onClick={handleOnProceedToPayment}
                disabled={routerBusy}
              />
              <div className="flex-[1]">
                <Button
                  variant="outlined"
                  text="عرض طلب التسعير"
                  onClick={handleOnShowQuotationRequest}
                  busy={routerBusy}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </DailogContainer>
    </Dialog>
  );
};
