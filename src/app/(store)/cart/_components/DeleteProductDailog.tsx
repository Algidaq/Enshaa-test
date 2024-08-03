import React, { useState } from "react";
import { useCartPageCtx } from "./CartPageProvider";
import { CartService } from "@/services";
import { Dialog, LoadingIndicator } from "@/components";

export const DeleteProductDialog: React.FC<{}> = (props) => {
  const ctx = useCartPageCtx();
  const show = ctx.state.deleteCartItemId !== undefined;
  const [busy, setBusy] = useState(false);
  const showLoadingIndicator = () => setBusy(true);
  const hideLoadingIndicator = () => setBusy(false);

  async function handleOnDeleteDailog(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    showLoadingIndicator();
    const result = await CartService.deleteCartItem(
      ctx.state.deleteCartItemId!
    );
    const cart = await CartService.getCart();
    hideLoadingIndicator();

    if (result.error !== undefined || cart.error !== undefined) {
      ctx.hideDeleteDailog();
      return;
    }

    ctx.deleteItem(cart.data);
  }

  return (
    <Dialog
      show={show}
      onBackdropClick={busy ? undefined : ctx.hideDeleteDailog}
    >
      <div className="w-[100%] h-[100%] fixed flex items-center justify-center">
        <div className="w-[317px]  flex flex-col justify-start items-stretch rounded-[0.75rem] bg-netural-100">
          <div className="py-[2.5rem] px-[4rem] flex flex-col items-center gap-[2.5rem]">
            <div className="h-[80px] w-[80px] rounded-[10px] bg-error"></div>
            <span className="body_small text-primary-500">هل أنت متأكد ؟</span>
          </div>
          <div className="flex flex-row items-stretch h-[51px] border-t-[1px] border-t-divider">
            <button
              onClick={busy ? undefined : ctx.hideDeleteDailog}
              disabled={busy}
              className="flex-[1] border-l body_large border-divider text-subtitle"
            >
              إلغاء
            </button>
            <button
              onClick={handleOnDeleteDailog}
              className="body_large flex-[1] text-error flex items-center justify-center"
              disabled={busy}
            >
              {busy ? <LoadingIndicator /> : <span>حذف المنتج</span>}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
