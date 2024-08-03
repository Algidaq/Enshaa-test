"use client";

import { AppIcons, Button, Icon, RadioButton } from "@/components";
import { OrderService } from "@/services";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type PaymentMode = "card" | "bank-transfer";
const paymentmodes: Array<{ mode: PaymentMode; icon: AppIcons; text: string }> =
  [
    {
      mode: "card",
      icon: "CreditCard",
      text: "عبر بطاقة  “ مدى / فيزا / ماستر كارد “ جديدة",
    },
    {
      mode: "bank-transfer",
      icon: "BankTransfer",
      text: "حوالة بنكية على الايبان رقم SA100001020131589849849865465",
    },
  ];

export const PaymentSection: React.FC<{ address: string; cartId: number }> = (
  props
) => {
  const [paymentMode, setPaymentMode] = useState<PaymentMode>("card");
  const [busy, setBusy] = useState(false);

  const showLoadingIndicator = () => setBusy(true);

  const hideLoadingIndicator = () => setBusy(false);

  const router = useRouter();

  const handleOnChangePaymentMode = (value: {
    mode: PaymentMode;
    icon: AppIcons;
    text: string;
  }) => {
    return () => {
      if (busy) return;
      setPaymentMode(value.mode);
    };
  };

  const _placeBankTransferOrder = async () => {
    showLoadingIndicator();
    const result = await OrderService.placeBankTransferOrder({
      cartId: props.cartId,
      destination: props.address,
      payment_method: "bank_transaction",
    });
    hideLoadingIndicator();

    if (result.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجاء اعادة المحاولة</p>);
      return;
    }
    const order = result.data;
    router.replace(`/orders/${order.id}`);
  };

  const _placeCardOrder = async () => {
    showLoadingIndicator();
    const result = await OrderService.placeCardTransferOrder({
      cartId: props.cartId,
      destination: props.address,
      payment_method: "card",
    });
    hideLoadingIndicator();
    if (result.error !== undefined) {
      toast.error(<p className="caption">حدث خطا ما الرجاء اعادة المحاولة</p>);
      return;
    }
    window.open(result.data.redirect_url, "_blank");
  };

  const placeOrder = async () => {
    if (paymentMode === "bank-transfer") {
      await _placeBankTransferOrder();
      return;
    }
    if (paymentMode === "card") {
      await _placeCardOrder();
    }
  };

  return (
    <section className="flex flex-col items-stretch gap-[2rem]">
      <div className="py-[1.5rem] border border-divider rounded-[0.75rem]">
        <div className="py-[1rem] px-[1.5rem] flex justify-start items-center gap-[1rem] border-b border-b-divider">
          <Icon icon="CreditCardSearch" />
          <span className="subtitle text-netural-900">ادفع عن طريق :</span>
        </div>
        <div className="flex flex-col px-[1.5rem] p-[1rem] items-stretch gap-[1rem]">
          {paymentmodes.map((value, index) => (
            <PaymentModeListTile
              key={value.mode}
              isSelected={value.mode === paymentMode}
              icon={value.icon}
              text={value.text}
              onClick={handleOnChangePaymentMode(value)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-start gap-[4rem]">
        <div className="flex-[1]">
          <Button
            variant="outlined"
            text="إلغاء"
            fullWidth
            onClick={router.back}
          />
        </div>
        <div className="flex-[1]">
          <Button
            variant="filled"
            text="الاستمرار للدفع"
            fullWidth
            onClick={placeOrder}
            busy={busy}
          />
        </div>
      </div>
    </section>
  );
};

const PaymentModeListTile: React.FC<{
  isSelected?: boolean;
  onClick?: () => void;
  icon: AppIcons;
  text: string;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="grid grid-cols-[24px_1fr] gap-[1rem] items-center"
    >
      <RadioButton isSelected={props.isSelected} />
      <div className="flex flex-row justify-start items-center  gap-[10px]">
        <div>
          <Icon icon={props.icon} />
        </div>
        <span className="body_small text-[#5F6C7B] text-start break-words">
          {props.text}
        </span>
      </div>
    </button>
  );
};
