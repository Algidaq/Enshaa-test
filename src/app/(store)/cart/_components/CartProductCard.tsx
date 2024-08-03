import React, { useState } from "react";
import Image from "next/image";
import { CartRes, CartService } from "@/services";
import { useCartPageCtx } from "./CartPageProvider";
import { Icon, LoadingIndicator } from "@/components";

export const CartProductCard: React.FC<{
  item: CartRes["items"][0];
}> = ({ item }) => {
  const [busy, setBusy] = useState(false);

  const cartCtx = useCartPageCtx();

  const showLoadingIndicator = () => setBusy(true);
  const hideLoadingIndicator = () => setBusy(false);

  async function handleOnDecrement() {
    if (item.quantity === 1) {
      handleOnShowDeleteDailog();
      return;
    }

    showLoadingIndicator();
    const result = await CartService.addSubItemsToCart({
      productId: item.productId,
      qty: item.quantity - 1,
      variantId: item.variantId === null ? undefined : item.variantId,
    });
    hideLoadingIndicator();

    if (result.error !== undefined) {
      return;
    }
    const updatedItem = result.data.shoppingSession.items.find(
      (_item) => item.id === _item.id
    );
    if (!updatedItem) return;

    cartCtx.updateItem(
      updatedItem,
      result.data.shoppingSession.total_price,
      result.data.shoppingSession.total_price_including_vat
    );
  }

  async function handleOnIncrement() {
    if (item.quantity === 99) {
      return;
    }

    showLoadingIndicator();
    const result = await CartService.addSubItemsToCart({
      productId: item.productId,
      qty: item.quantity + 1,
      variantId: item.variantId === null ? undefined : item.variantId,
    });
    hideLoadingIndicator();

    if (result.error !== undefined) {
      return;
    }

    const updatedItem = result.data.shoppingSession.items.find(
      (_item) => item.id === _item.id
    );
    if (!updatedItem) return;

    cartCtx.updateItem(
      updatedItem,
      result.data.shoppingSession.total_price,
      result.data.shoppingSession.total_price_including_vat
    );
  }
  const handleOnShowDeleteDailog = () => {
    cartCtx.showDeleteDailog(item);
  };

  return (
    <div className="px-[1.5rem] py-[1rem] bg-netural-100 shadow-[0px_10px_20px_0px_rgba(215,215,215,0.16)] border border-divider rounded-[0.75rem]">
      <div className="flex flex-row items-stretch sm:gap-[1.5rem] xs:max-sm:gap-4">
        <div className="bg-divider relative lg:w-[173px] md:max-lg:w-[164px] sm:max-md:w-[124px] xs:max-sm:w-[72px] xs:max-sm:h-[72px]">
          <Image fill src={item.product.img_url} alt={item.product.name_ar} />
        </div>
        <div className="flex flex-col sm:gap-[1.5rem] xs:gap-4 flex-[1]">
          <div className="flex justify-between items-center gap-4 xs:max-sm:flex-col xs:max-sm:items-start">
            <span className="subtitle">{item.product.name_ar}</span>
            <span className="subtitle text-primary-500">
              {(item.product.price * item.quantity).toFixed(2)} ر.س
            </span>
            <button
              onClick={handleOnShowDeleteDailog}
              className="p-[0.5rem] bg-[#F9FAFB] border border-primary-100 rounded-[0.25rem] flex items-center justify-center xs:max-sm:hidden"
            >
              <Icon icon="TrashCan" />
            </button>
          </div>
          <div className="flex sm:flex-row sm:items-center xs:flex-col xs:gap-4">
            <span className="body_small text-[#4D4D4D]">
              {item.product.categoryName}
            </span>
            {item.variant !== null && (
              <p>
                <span className="sm:mr-[48px] body_small text-subtitle">
                  خيار المنتج :
                </span>
                <span className="body_small text-[#2CCFDB]">
                  {item.variant.name_ar}
                </span>
              </p>
            )}
          </div>
          <CartIncDecBtn
            value={item.quantity}
            onDecrement={handleOnDecrement}
            onIncrement={handleOnIncrement}
            busy={busy}
          />
        </div>
      </div>
    </div>
  );
};

type CartIncDecBtnProps = {
  onIncrement?: () => void;
  onDecrement?: () => void;
  value: string | number;
  busy?: boolean;
};
const CartIncDecBtn: React.FC<CartIncDecBtnProps> = (props) => {
  return (
    <div className="flex flex-row justify-start items-start gap-[1rem]">
      <button
        onClick={props.onDecrement}
        className="bg-primary-500 p-[1rem] h-[48px] rounded-[0.75rem] flex flex-row items-center justify-center"
        disabled={props.busy}
      >
        <Icon icon="Minus" />
      </button>
      <div className=" p-[1rem] h-[48px] border border-divider flex items-center justify-center rounded-[0.75rem] max-w-[171px] w-[100%]">
        {props.busy ? (
          <LoadingIndicator />
        ) : (
          <span
            className="block outline-none focus:outline-none text-netural-900 text-[1rem] leading-[110%] tracking-tighter[-0.03px]"
            defaultValue={1}
            dir="ltr"
          >
            {props.value}
          </span>
        )}
      </div>

      <button
        onClick={props.onIncrement}
        className="p-[1rem] h-[48px] bg-primary-500 rounded-[0.75rem]  flex flex-row items-center justify-center"
        disabled={props.busy}
      >
        <Icon icon="Plus" />
      </button>
    </div>
  );
};
