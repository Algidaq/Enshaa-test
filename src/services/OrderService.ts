import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";
import { ProductsService } from "./ProductsService";
import { Product } from "@/service/product";
import { Variant } from "@/model";

type OrderRequest =
  | { cartId: number; destination: string; tran_ref: string }
  | { cartId: number; destination: string; payment_method: string };
type OrderStatus =
  | "WAITING-FOR-PAYMENT"
  | "PAID"
  | "DELIVERY-IN-PROGRESS"
  | "COMPLETED"
  | "CANCELLED";
export interface Order {
  id: number;
  destination: string;
  status: OrderStatus;
  amount_paid: number;
  amount_due: number;
  items: OrderItem[];
  accountId: number;
  tran_ref: null;
  payment_method: string;
  updatedAt: string;
  createdAt: string;
  type: unknown;
  delivery_fees: unknown;
}

interface OrderItem {
  id: number;
  price: number;
  sale_price: unknown;
  quantity: number;
  productId: number;
  variantId: number;
  orderId: number;
  updatedAt: string;
  createdAt: string;
  quotationId: unknown;
  variant?: Variant | null;
  product: Product;
}

const kArabicOrderStatusMap: Record<OrderStatus, string> = {
  "WAITING-FOR-PAYMENT": "بإنتظار الدفع",
  PAID: "تم الدفع",
  "DELIVERY-IN-PROGRESS": "جاري التوصيل",
  COMPLETED: "مكتمل",
  CANCELLED: "مكتمل",
};

export const OrderService = {
  async placeBankTransferOrder(
    request: OrderRequest,
    token?: string
  ): Promise<PromiseResult<Order>> {
    try {
      const res = await HttpService.post(
        "/api/orders",
        {
          destination: request.destination,
          payment_method: "bank_transaction",
        },
        {
          headers: { Authorization: token },
        }
      );
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return { error: e, data: undefined };
    }
  },

  async placeCardTransferOrder(
    request: OrderRequest,
    token?: string
  ): Promise<PromiseResult<{ redirect_url: string }>> {
    try {
      const res = await HttpService.post("/api/orders/v2", {
        destination: request.destination,
        payment_method: "card_transaction",
        return_url: "http://localhost:3000/orders",
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e) {
      return { data: undefined, error: "An Error Occured" };
    }
  },

  async getOrderById(params: {
    id: number;
    token?: string;
  }): Promise<PromiseResult<Order>> {
    try {
      const res = await HttpService.get(`/api/orders/${params.id}`, {
        headers: { Authorization: params.token },
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return { data: undefined, error: e };
    }
  },

  async getOrders(params: {
    token?: string;
    page?: number;
  }): Promise<PromiseResult<Array<Order>>> {
    try {
      const result = await HttpService.get("/api/orders", {
        params: { page: params.page ?? 1, limit: 12 },
        headers: {
          Authorization: params.token,
        },
      });
      const data: { rows: Array<Order>; count: number } = result.data;
      return {
        data: data.rows,
        error: undefined,
      };
    } catch (e: any) {
      return { data: undefined, error: e };
    }
  },
  mapStatusToText(status: OrderStatus, locale: "en" | "ar" = "ar") {
    const text =
      locale === "ar"
        ? kArabicOrderStatusMap[status]
        : kArabicOrderStatusMap[status];
    return text ?? "";
  },
};
