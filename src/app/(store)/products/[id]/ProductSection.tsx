"use client";
import React, { useState } from "react";

import { Button, Text, Icon, LinkButton, LoadingIndicator } from "@/components";
import Image from "next/image";
import { CartService } from "@/services";
import { Product, Variant } from "@/model";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const ProductSection: React.FC<{ product: Product }> = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [busy, setBusy] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [showVariantError, setShowVariantError] = useState<boolean>(false);
  const router = useRouter();

  const isLoggedIn = getCookie("token") !== undefined;

  function handleOnIncrement(): void {
    if (qty >= 99) return;
    setQty((qty) => qty + 1);
  }

  function handleOnDecrement(): void {
    if (qty === 1) return;
    setQty((qty) => qty - 1);
  }

  async function handleOnAddItemToCart() {
    if (product.has_variant && selectedVariant === null) {
      setShowVariantError(true);
      return;
    }
    setShowVariantError(false);
    setBusy(true);
    const result = await CartService.addSubItemsToCart({
      productId: product.id,
      qty: qty,
      variantId: selectedVariant?.id,
    });
    setBusy(false);

    if (result.error !== undefined) {
      if (result.error === "login required") {
        router.push("/login");
      }
      return;
    }
    toast.success(<p className="body_large">{"تمت اضافة المنتج الى السلة"}</p>);
  }

  const handleOnSelectVariant = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  return (
    <section className="flex flex-col items-stretch gap-[3rem]">
      <div className="flex flex-row xs:max-md:flex-col justify-start items-start gap-[2rem]">
        <div className="flex-1 xs:max-md:self-stretch">
          <ProductInfo
            product={product}
            price={
              product.has_variant &&
              selectedVariant !== null &&
              selectedVariant.price !== null
                ? selectedVariant.price
                : product.price
            }
          />
        </div>
        <div className="flex flex-col justify-start items-stretch gap-[2.5rem] xs:max-md:w-[100%]">
          <CartIncDecBtn
            onIncrement={handleOnIncrement}
            onDecrement={handleOnDecrement}
            value={qty}
          />
          {product.has_variant && (
            <div className="flex flex-col items-stretch gap-[1rem]">
              <VariantDropDown
                placeholder="اختر الصنف"
                label="الاصناف"
                variants={product.variants ?? []}
                onSelectVariant={handleOnSelectVariant}
                selectedVariant={selectedVariant}
              />
              {showVariantError && (
                <span className="caption text-error">الرجا اختيار الصنف</span>
              )}
            </div>
          )}
          {isLoggedIn ? (
            <Button
              text="اضافة إلى السلة"
              variant="filled"
              color="secondary"
              onClick={handleOnAddItemToCart}
              busy={busy}
            />
          ) : (
            <LinkButton
              variant="filled"
              color="secondary"
              href="/login"
              text="اضافة إلى السلة"
            />
          )}
        </div>
      </div>
      <hr className="border-divider" />
      <div className="lg:max-w-[1111px] flex flex-col items-start justify-start gap-[1rem]">
        <div className="flex flex-row items-center gap-[0.5rem]">
          <Icon icon="ExclamationMark" />
          <Text.h4 component="h2" className="text-netural-900">
            الوصف:
          </Text.h4>
        </div>
        {product.description_ar !== null ? (
          <div
            className="text-[1rem] text-[#5F6C7B] tracking-tighter-[-0.01px] leading-[150%]"
            dangerouslySetInnerHTML={{ __html: product.description_ar }}
          />
        ) : (
          <Text.caption>لايوجد وصف</Text.caption>
        )}
      </div>
      <hr className="border-divider" />
    </section>
  );
};
export const ProductInfo: React.FC<{
  product: Product;
  price: string | number;
}> = ({ product, ...props }) => {
  return (
    <div className="flex flex-row xs:max-md:flex-col justify-start items-start gap-[2.5rem]">
      <div className="w-[353px] h-[353px] xs:max-md:w-[100%] bg-[#F5F5F5] rounded-[0.75rem] overflow-hidden relative flex flex-row items-center justify-center">
        <Image
          unoptimized
          src={product.img_url}
          alt={product.img_alt ?? product.name_ar}
          width={272}
          height={212}
          // fill
        />
      </div>
      <div className=" flex flex-col justify-start items-start gap-[3rem] xs:max-md:gap-[1.5rem] lg:max-w-[500px]">
        <div className="flex flex-col gap-[2.5rem] xs:max-md:gap-[1.25rem] items-start">
          <Text.h3 component="h1">{product.name_ar}</Text.h3>
          <Text.subtitle
            component="span"
            className="text-primary-500"
          >{`${props.price} ريال سعودي`}</Text.subtitle>
        </div>
        <Text.subtitle component="span" className="text-body">
          {product.category.name_ar}
        </Text.subtitle>
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
    <div className="flex flex-row justify-start items-start lg:gap-[2rem] xs:gap-[1rem]">
      <button
        onClick={props.onDecrement}
        className="bg-primary-500 p-[1rem] h-[48px] rounded-[0.75rem] flex flex-row items-center justify-center"
        disabled={props.busy}
      >
        <Icon icon="Minus" />
      </button>
      <div className=" p-[1rem] h-[48px] border border-divider flex items-center justify-center rounded-[0.75rem] xs:max-lg:flex-[1] lg:min-w-[171px]">
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

type VariantDropDownProps<T> = {
  placeholder: string;
  label: string;
  variants: Array<Variant>;
  selectedVariant?: Variant | null;
  onSelectVariant?: (vairant: Variant) => void;
};

const VariantDropDown = <T,>(props: VariantDropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative py-[1.25rem] px-[1.5rem] border border-divider rounded-[0.75rem] flex flex-row justify-start items-center"
      >
        <div className="absolute py-[0.25rem] px-[0.75rem] bg-netural-100 flex justify-center items-center top-[-50%] translate-y-[64%] ">
          <span className="body_small text-netural-600">{props.label}</span>
        </div>
        <span
          className={[
            "body_medium  flex-[1] text-start",
            props.selectedVariant ? "text-netural-900" : "text-[#CCCCCC]",
          ].join(" ")}
        >
          {props.selectedVariant
            ? props.selectedVariant.name_ar
            : props.placeholder}
        </span>
        <span className="flex flex-row items-center justify-center">
          <Icon icon="ArrowDown" />
        </span>
        <div
          className={[
            "flex flex-col p-[1rem] gap-[1rem] shadow-[0px_10px_20px_0px_#D7D7D7] items-stretch max-h-[400px] overflow-y-scroll rounded-[0.75rem] bg-netural-100 border border-divider w-[100%] left-0 top-[90%] z-[2]",
            isOpen ? "absolute" : "hidden",
          ].join(" ")}
        >
          {props.variants.map((variant, index) => {
            const isSelected = variant.id === props.selectedVariant?.id;
            return (
              <React.Fragment key={variant.id}>
                <div
                  className="flex flex-row items-center py-[0.5rem] px-[1rem] cursor-pointer"
                  onClick={() => props.onSelectVariant?.(variant)}
                >
                  <span className="flex-[1] body_small text-start">
                    {variant.name_ar}
                  </span>
                  <span
                    className={[
                      "w-[1.5rem] h-[1.5rem] flex flex-row  justify-center items-center border rounded-[50%]",
                      isSelected ? "border-primary-500" : "border-divider",
                    ].join(" ")}
                  >
                    {isSelected && (
                      <span className="w-[1.125rem] h-[1.125rem] rounded-[50%] bg-primary-500 block" />
                    )}
                  </span>
                </div>
                {index !== props.variants.length - 1 && (
                  <hr className="border-divider" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </button>
      <div
        className={[
          "inset-0 w-[100vw] h-[100vh]",
          isOpen ? "fixed" : "hidden z-[-1]",
        ].join(" ")}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};
