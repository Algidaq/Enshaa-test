import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";
import axios, { Axios } from "axios";

interface AddSubItemsToCartRes {
  shoppingSession: ShoppingSession;
}

interface ShoppingSession {
  total: number;
  total_price: number;
  total_price_including_vat: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  couponId: null;
  accountId: number;
  stageId: null;
  items: CartItem[];
}

interface Product {
  sale_price: null;
  id: number;
  sku: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  img_url: string;
  img_alt: null;
  price: number;
  quantity: null;
  published: boolean;
  weight: null;
  weight_unit: string;
  createdAt: string;
  updatedAt: string;
  brandName: null;
  categoryName: string;
  saleId: null;
  sale: null;
}
export interface CartRes {
  total: number;
  id: number;
  total_price: number;
  total_price_including_vat: number;
  createdAt: string;
  updatedAt: string;
  couponId: null;
  accountId: number;
  stageId: null;
  items: CartItem[];
}

interface Product {
  price: number;
}

interface CartItem {
  price: number;
  sale_price: null;
  id: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  shoppingSessionId: number;
  productId: number;
  saleId: null;
  variantId?: number | null;
  product: CartProduct;
  variant: CartVariant | null;
}

interface CartProduct {
  sale_price: null;
  id: number;
  sku: string;
  name_ar: string;
  name_en: string;
  description_ar: null | string;
  description_en: null | string;
  img_url: string;
  img_alt: null;
  price: number;
  quantity: null | number;
  published: boolean;
  weight: null | number;
  weight_unit: string;
  createdAt: string;
  updatedAt: string;
  brandName: null;
  categoryName: string;
  saleId: null;
  sale: null;
}

interface CartVariant {
  sale_price: null;
  id: number;
  name_ar: string;
  name_en: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  productId: number;
  saleId: null;
  sale: null;
  product: Product;
}

export const CartService = {
  async addSubItemsToCart(params: {
    productId: number;
    qty: number;
    variantId?: number;
  }): Promise<PromiseResult<AddSubItemsToCartRes>> {
    try {
      const res = await HttpService.post("/api/cart/", {
        product_id: params.productId,
        quantity: params.qty,
        variantId: params.variantId,
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return {
        data: undefined,
        error: axios.isAxiosError(e) ? e.response?.data?.message : e,
      };
    }
  },

  async getCart(token?: string): Promise<PromiseResult<CartRes>> {
    try {
      console.log("token", token);
      const res = await HttpService.get("/api/cart", {
        headers: {
          Authorization: token,
        },
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return { data: undefined, error: e };
    }
  },

  async deleteCartItem(id: number): Promise<PromiseResult<any>> {
    try {
      const res = await HttpService.delete(`/api/cart/item/${id}`);
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return { data: undefined, error: e };
    }
  },
};
