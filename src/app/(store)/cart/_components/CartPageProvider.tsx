"use client";
import { LoadingIndicator } from "@/components";
import { CartRes, CartService } from "@/services";

import React, { useEffect } from "react";
import { useState } from "react";
import { RequestQuotationDailog } from "./RequestQuotationDailog";
import { RequestQuotationSuccessDailog } from "./RequestQuotationSuccessDailog";

interface CartPageState {
  state: {
    cartId?: number;
    items: CartRes["items"];
    deleteCartItemId?: number | undefined;
    total: number;
    totalPriceIncludingVat: string;
    vat: string;
    isRequestQuotationDailogVisible: boolean;
    isRequestQuotationSuccessDailogVisible: boolean;
    quotationId: number | null;
  };
  updateItem: (
    item: CartRes["items"][0],
    total: number,
    total_price_including_vat: number
  ) => void;
  showDeleteDailog: (item: CartRes["items"][0]) => void;
  hideDeleteDailog: () => void;
  deleteItem: (res: CartRes) => void;
  showRequestQuotationDailog: () => void;
  hideRequestQuotationDailog: () => void;
  loadCartDetails: () => Promise<void>;
  showRequestQuotationSuccessDailog: (id: number) => void;
  hideRequestQuotationSuccessDailog: () => void;
}

const CartPageContext = React.createContext<CartPageState | null>(null);

export const CartPageProvider: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  const [cartDetails, setCartDetails] = useState<CartRes | null>(null);

  const [deleteCartItemId, setDeleteCartItemId] = useState<number | undefined>(
    undefined
  );

  const [busy, setBusy] = useState(true);

  const [isRequestQuotationDailogVisible, setRequestQuotationDailogVisible] =
    useState(false);

  const [quotationId, setQuotationId] = useState<number | null>(null);

  const showLoadingIndicator = () => setBusy(true);

  const hideLoadingIndicator = () => setBusy(false);

  const loadCartDetails = async () => {
    showLoadingIndicator();
    const result = await CartService.getCart();
    if (result.error !== undefined) {
      return;
    }
    setCartDetails(result.data);
    hideLoadingIndicator();
  };

  useEffect(() => {
    showLoadingIndicator();
    const loadCartDetails = async () => {
      const result = await CartService.getCart();
      if (result.error !== undefined) {
        return;
      }
      setCartDetails(result.data);
      hideLoadingIndicator();
    };
    loadCartDetails();
    return () => {
      console.log("onDispose");
    };
  }, []);

  const updateItem = (
    item: CartRes["items"][0],
    total: number,
    total_price_including_vat: number
  ) => {
    if (!cartDetails) return;
    const items = Array.from(cartDetails?.items ?? []);
    const index = items.findIndex((cartitem) => cartitem.id === item.id);
    if (index < 0) return;
    items[index] = item;
    setCartDetails((prev) => ({
      ...cartDetails,
      total_price: total,
      total_price_including_vat,
      items: items,
    }));
  };

  const showDeleteDailog = (item: CartRes["items"][0]) => {
    setDeleteCartItemId(item.id);
  };

  const deleteItem = (cartRes: CartRes) => {
    if (deleteCartItemId === undefined) return;
    if (!cartDetails) return;

    setCartDetails(cartRes);
    hideDeleteDailog();
  };

  const hideDeleteDailog = () => setDeleteCartItemId(undefined);

  const showRequestQuotationDailog = () =>
    setRequestQuotationDailogVisible(true);

  const hideRequestQuotationDailog = () =>
    setRequestQuotationDailogVisible(false);

  const showRequestQuotationSuccessDailog = (id: number) => setQuotationId(id);
  const hideRequestQuotationSuccessDailog = () => setQuotationId(null);

  return (
    <CartPageContext.Provider
      value={{
        state: {
          items: cartDetails?.items ?? [],
          deleteCartItemId,
          total: cartDetails?.total_price ?? 0,
          cartId: cartDetails?.id,
          totalPriceIncludingVat:
            cartDetails?.total_price_including_vat?.toFixed(2) ?? "0",
          vat: (
            (cartDetails?.total_price_including_vat ?? 0) -
            (cartDetails?.total_price ?? 0)
          ).toFixed(2),
          isRequestQuotationDailogVisible,
          isRequestQuotationSuccessDailogVisible: quotationId !== null,
          quotationId: quotationId,
        },
        updateItem,
        showDeleteDailog,
        hideDeleteDailog,
        deleteItem,
        showRequestQuotationDailog,
        hideRequestQuotationDailog,
        loadCartDetails,
        showRequestQuotationSuccessDailog,
        hideRequestQuotationSuccessDailog,
      }}
    >
      {!busy && props.children}
      {busy && <LoadingIndicator />}
      <RequestQuotationDailog />
      <RequestQuotationSuccessDailog />
    </CartPageContext.Provider>
  );
};
export const useCartPageCtx = (): CartPageState => {
  const state = React.useContext(CartPageContext);
  return state!;
};
