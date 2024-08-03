import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";
interface QuotationFromCartRes {
  id: number;
  accountId: number;
  status: string;
  activityId: null;
  items: any[];
  updatedAt: string;
  createdAt: string;
  file_url: null;
  text: null;
  attached_file: null;
  quotation_amount: null;
}

export const QuotationService = {
  async createQuotationFromCart(
    cartId: number
  ): Promise<PromiseResult<QuotationFromCartRes>> {
    try {
      const res = await HttpService.post("/api/quotations/from-cart", {
        cartId: cartId,
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e) {
      return { data: undefined, error: "unable to create quotation from cart" };
    }
  },

  async createQuotationFromList(params: {
    items: Array<{
      id: number;
      productId: number;
      variantId: number | null;
      quantity: number;
    }>;
  }): Promise<PromiseResult<QuotationFromCartRes>> {
    try {
      const res = await HttpService.post("/api/quotations/from-list", {
        items: params.items,
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e) {
      return { data: undefined, error: "an error occurred" };
    }
  },
};
