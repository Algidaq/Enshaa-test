"use client";
import { Icon, LinkButton, LoadingIndicator } from "@/components";
import { Order, OrderService, ProductsService } from "@/services";
import { ProductCard } from "@/ui";

import Link, { LinkProps } from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface OrdersState {
  state: "busy" | "idel" | "error" | "success" | "empty";
  page: number;
  error?: string;
  canLoadMore: boolean;
  orders: Array<Order>;
}

const kInitialState: OrdersState = {
  state: "busy",
  page: 1,
  canLoadMore: false,
  orders: [],
};

export const OrdersList: React.FC<{}> = ({}) => {
  const [state, setState] = useState(kInitialState);

  const updateState = (newState: Partial<OrdersState>) =>
    setState((prev) => ({ ...prev, ...newState }));

  const { ref, inView } = useInView();

  const loadInitialOrders = async () => {
    updateState({ state: "busy" });
    const result = await OrderService.getOrders({ page: 1 });
    if (result.error !== undefined) {
      return updateState({ state: "error", error: "un error occured" });
    }
    const orders = result.data;
    updateState({
      state: orders.length > 1 ? "success" : "empty",
      orders: orders,
      canLoadMore: orders.length >= 12,
      page: state.page + 1,
    });
    console.log("state", state);
  };

  useEffect(() => {
    loadInitialOrders();
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView]);

  const loadMoreData = async () => {
    if (!state.canLoadMore) return;
    const result = await OrderService.getOrders({ page: state.page });
    if (result.error !== undefined) {
      updateState({ canLoadMore: false });
      return;
    }
    const orders = result.data;
    if (orders.length < 1) {
      updateState({ canLoadMore: false });
      return;
    }
    updateState({
      orders: [...state.orders, ...orders],
      canLoadMore: orders.length >= 12,
      page: state.page + 1,
    });
  };

  if (state.state === "busy") {
    return (
      <div className="flex flex-col justify-center min-h-[500px] items-center h-[100%]">
        <LoadingIndicator />
      </div>
    );
  }

  if (state.state === "error") {
    return (
      <div className="container mx-auto flex flex-col justify-center min-h-[500px]">
        <div className="flex flex-row items-start justify-center gap-[1rem]">
          <span className="heading_3">حدث خطآ ما الرجاء</span>
          <button
            className="heading_3 text-primary-500"
            onClick={loadInitialOrders}
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  if (state.state === "empty") {
    return (
      <div className="container mx-auto flex flex-col justify-center min-h-[500px]">
        <div className="flex flex-row items-start justify-center gap-[1rem]">
          <span className="heading_3">لا يوجد طلبات سابقة</span>
          <Link href="/products" className="heading_3 text-primary-500">
            <span>متابعة التسوق</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="md:container md:mx-auto max-md:px-4 py-[2rem] flex flex-col gap-[2rem]">
      <div className="sticky top-0 h-[52px] border-b bg-netural-100 border-divider flex flex-row items-center gap-[0.75rem]">
        <span className="h-[28px] bg-[#E9E9E9] w-[28px] flex flex-row items-center justify-center rounded-[100%]">
          <Icon icon="Receipt" />
        </span>
        <span className="heading_4 text-netural-900">الطلبات االسابقة</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[2rem]">
        {state.orders.map((order) => (
          <OrderCard
            key={order.id}
            orderNumber={`# ${order.id}`}
            orderTotal={`${order.amount_due?.toFixed(2)} ر.س`}
            deliveryDate={new Date(
              Date.parse(order.createdAt)
            ).toLocaleDateString("en", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            status={OrderService.mapStatusToText(order.status)}
            href={`/orders/${order.id}`}
          />
        ))}
      </div>
      {state.canLoadMore && (
        <div
          ref={ref}
          className="w-full flex flex-row items-center justify-center"
        >
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};

const OrderCard: React.FC<{
  orderNumber: string | number;
  orderTotal: string;
  deliveryDate: string;
  status: React.ReactNode;
  href: LinkProps["href"];
}> = (props) => {
  return (
    <div className="rounded-[10px] flex flex-col items-center justify-center gap-8 bg-white p-[20px] bg-netural-100 border border-divider ">
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <p className="body_small text-body">رقم طلب :</p>
        <h2 className="subtitle text-netural-900" dir="ltr">
          {props.orderNumber}
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <p className="body_small text-body">تسعير المواد :</p>
        <span className="subtitle text-netural-900">{props.orderTotal}</span>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <p className="body_small text-body">التاريخ والوقت :</p>
        <span className="subtitle text-netural-900" dir="ltr">
          {props.deliveryDate}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 w-full">
        <span className="body_small text-body">الحالة :</span>
        {props.status}
      </div>
      <LinkButton
        variant="text"
        fullWidth
        className="border rounded-[0.75rem] border-divider text-netural-900 hover:text-netural-900"
        text="عرض تفاصيل الطلب"
        href={props.href}
      />
    </div>
  );
};
