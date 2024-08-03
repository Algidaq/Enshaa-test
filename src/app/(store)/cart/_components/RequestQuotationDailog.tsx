"use client";

import { Button, DailogContainer, Dialog, RadioButton } from "@/components";
import { useCartPageCtx } from "./CartPageProvider";
import { useEffect, useMemo, useState } from "react";
import { CartService, QuotationService } from "@/services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type CartQuotationOption =
  | "req-quotation-for-all-items"
  | "proceed-with-priced-items"
  | "request-quotation-for-non-priced-items";

const requestQuotationOptions: Array<{
  mode: CartQuotationOption;
  text: string;
}> = [
  {
    mode: "req-quotation-for-all-items",
    text: "طلب تسعير لكل المنتجات",
  },
  {
    mode: "proceed-with-priced-items",
    text: "متابعة الطلب بالعناصر المسعرة",
  },
  {
    mode: "request-quotation-for-non-priced-items",
    text: "طلب تسعير للمنتجات غير المسعرة",
  },
];

export const RequestQuotationDailog: React.FC<{}> = () => {
  const ctx = useCartPageCtx();

  const [selectedOption, setSelectedOption] =
    useState<CartQuotationOption | null>(null);

  const router = useRouter();

  const [busy, setShowBusy] = useState(false);

  const hideBusyIndicator = () => setShowBusy(false);

  const showBusyIndicator = () => setShowBusy(true);

  const quotationOptions = useMemo(() => {
    const allItemsAreZeroPriced = ctx.state.items.every(
      (value) => value.price === 0
    );
    if (allItemsAreZeroPriced) return [requestQuotationOptions[0]];
    return requestQuotationOptions;
  }, [ctx.state.items]);

  useEffect(() => {
    return () => {
      setSelectedOption(null);
    };
  }, []);

  const handleOnBackdropClick = () => {
    if (busy) return;

    ctx.hideRequestQuotationDailog();
  };

  const handleOnSelect = (option: CartQuotationOption) => {
    return () => {
      setSelectedOption(option);
    };
  };

  const requestQuotationFromCart = async () => {
    showBusyIndicator();
    const result = await QuotationService.createQuotationFromCart(
      ctx.state.cartId ?? -1
    );
    hideBusyIndicator();
    if (result.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجاء اعادة المحاولة</p>);
      return;
    }
    router.replace(`/quotations/${result.data.id}`);
  };

  const proceedOrderWithPricedItems = async () => {
    showBusyIndicator();
    const unPricedItems = ctx.state.items.filter((value) => value.price <= 0);
    const deleteRequest = unPricedItems.map((item) =>
      CartService.deleteCartItem(item.id)
    );
    const deleteResult = await Promise.all(deleteRequest);
    hideBusyIndicator();
    ctx.hideRequestQuotationDailog();
    await ctx.loadCartDetails();
  };

  const requestQuotationForUnPricedItems = async () => {
    showBusyIndicator();
    const unpricedItems = ctx.state.items.filter((item) => item.price <= 0);

    const result = await QuotationService.createQuotationFromList({
      items: unpricedItems.map((item) => ({
        id: item.id,
        productId: item.productId,
        quantity: item.quantity,
        variantId: item.variantId === undefined ? null : item.variantId,
      })),
    });
    hideBusyIndicator();
    if (result.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجاء اعادة المحاولة</p>);
      return;
    }
    handleOnBackdropClick();
    ctx.showRequestQuotationSuccessDailog(result.data.id);
    await ctx.loadCartDetails();
  };

  const handleOnConfirm = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (selectedOption === "req-quotation-for-all-items") {
      await requestQuotationFromCart();
      return;
    }

    if (selectedOption === "proceed-with-priced-items") {
      await proceedOrderWithPricedItems();
      return;
    }

    if (selectedOption === "request-quotation-for-non-priced-items") {
      await requestQuotationForUnPricedItems();
      return;
    }
  };

  const handleOnCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  return (
    <Dialog
      show={ctx.state.isRequestQuotationDailogVisible}
      onBackdropClick={handleOnBackdropClick}
    >
      <DailogContainer>
        <div
          className="p-8 rounded-[0.75rem] bg-netural-100 flex flex-col gap-4 max-w-[600px]"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="heading_3 text-primary-500">تفاصيل السلة</p>
          <p className="body_small text-body">
            تحتوي سلة التسوق الخاصة بك على منتجات لم يتم تسعيرها، يرجى تحديد أحد
            الاختيارات أدناه للمتابعة؟
          </p>
          {quotationOptions.map((value, index) => (
            <RequestQuotationOptionTile
              key={`${value.mode}-${index}`}
              text={value.text}
              onClick={handleOnSelect(value.mode)}
              isSelected={value.mode === selectedOption}
            />
          ))}
          <div className="mt-4">
            <div className="flex gap-4">
              <Button
                variant="filled"
                text="تاكيد"
                fullWidth
                onClick={handleOnConfirm}
                disabled={selectedOption === null}
                busy={busy}
              />
              <Button
                variant="outlined"
                text="إلغاء"
                fullWidth
                onClick={handleOnBackdropClick}
                disabled={busy}
              />
            </div>
          </div>
        </div>
      </DailogContainer>
    </Dialog>
  );
};

const RequestQuotationOptionTile: React.FC<{
  isSelected?: boolean;
  onClick?: () => void;
  text: string;
}> = (props) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        props.onClick?.();
      }}
      className="flex flex-row items-center gap-[1rem]"
    >
      <RadioButton isSelected={props.isSelected} />
      <div className="flex flex-row items-center justify-center gap-[10px]">
        <span
          className={[
            "body_small",
            props.isSelected ? "text-primary-500" : "text-[#5F6C7B]",
          ].join(" ")}
        >
          {props.text}
        </span>
      </div>
    </button>
  );
};
