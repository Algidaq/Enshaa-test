"use client";
import React, { useEffect, useState } from "react";
import { Button, Icon, LinkButton } from "@/components";
import { Input, InputContainer, InputErrorMsg } from "@/components/Input";
import { useRouter } from "next/navigation";
import { useBusy } from "@/hooks";

export const AddressForm: React.FC<{ phoneNumber: string; cartId: number }> = (
  props
) => {
  const [address, setAddress] = useState("");
  const [routerBusy, routerBusyActions] = useBusy();

  const router = useRouter();
  useEffect(() => {
    return () => {
      routerBusyActions.hideLoadingIndicator();
    };
  }, []);

  const handleOnNext = () => {
    routerBusyActions.showLoadingIndicator();
    const searchParams = new URLSearchParams();
    searchParams.set("address", address);
    router.push(`/cart/${props.cartId}/payment?${searchParams.toString()}`);
  };
  return (
    <div className="md:container md:mx-auto max-md:px-4">
      <div className="mt-[4rem] border border-divider rounded-[0.75rem] md2:py-[3rem] md:2px-[7rem] py-6 px-8">
        <h3 className="heading_3 text-primary-500">تفاصيل التوصيل</h3>
        <div className="flex flex-row max-md:flex-col max-md:items-stretch items-center mt-8 gap-[4rem]  max-md:gap-12">
          <div className="flex-[1]">
            <InputContainer>
              <Input
                value={address}
                placeholder="تفاصيل العنوان"
                label={"العنوان"}
                onChange={(e) => setAddress(e.currentTarget.value)}
                maxLength={56}
              />
              <InputErrorMsg />
            </InputContainer>
          </div>

          <div className="flex-[1]">
            <Input
              leading={
                <div className="flex flex-row items-center justify-center gap-[0.75rem]">
                  <Icon icon="SaudiFlag" />
                  <span className=" flex flex-row items-center justify-center h-[1.5rem] w-[1.5rem]">
                    <Icon icon="ArrowDown" />
                  </span>
                </div>
              }
              label="رقم الجوال"
              disabled
              defaultValue={props.phoneNumber.replace("966", "")}
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex md:justify-end">
        <div className="mt-[4rem] flex flex-row justify-end md:w-[788px] md:gap-[64px] max-md:gap-8 max-md:flex-[1] ">
          <div className="flex-[1]">
            <LinkButton variant="outlined" text="رجوع" fullWidth href="/cart" />
          </div>
          <div className="flex-[1]">
            <Button
              variant="filled"
              text="التالي"
              onClick={handleOnNext}
              busy={routerBusy}
              fullWidth
              disabled={address.length < 4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
