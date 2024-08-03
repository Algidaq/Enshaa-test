import React from "react";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { Button, Icon, LinkButton, Text } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Order, OrderService } from "@/services";
import Image from "next/image";

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  const result = await OrderService.getOrderById({
    token: token,
    id: params.id,
  });

  if (result.error !== undefined) {
    redirect("/");
  }

  const order = result.data;

  return (
    <>
      <NavBar token={token} />
      <NavigationHeader />
      <main className="pt-[32px] md:container md:mx-auto max-md:px-4">
        <Header />
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-[2rem] gap-[4rem] mt-[2rem]">
          <div>
            <div className="flex flex-col gap-8">
              {order.items.map((item, index) => (
                <OrderProductCard
                  key={`${item.id.toString()}-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>
          <OrderDetailsSection order={order} />
        </div>
      </main>
    </>
  );
}

const Header: React.FC<{}> = () => {
  return (
    <div>
      <div className="flex flex-row justify-start items-start gap-[0.5rem]">
        <div className="w-[28px] h-[28px] rounded-[100%] flex flex-row  justify-center items-center bg-[#E9E9E9]">
          <Icon icon="Receipt" />
        </div>
        <span className="heading_4 self-center">متابعة الطلب</span>
      </div>
    </div>
  );
};
const NavigationHeader: React.FC<{}> = () => {
  return (
    <div className="w-[100wv] bg-[#E0ECF6] bg-opacity-[0.24]">
      <ul className="md:container md:mx-auto max-md:px-4 py-[1rem] flex flex-row flex-wrap gap-[1rem]">
        <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
          <Link
            href="/"
            className="md:subtitle max-md:body_small whitespace-nowrap text-[#5F6C7B]"
          >
            الصفحة الرئيسية
          </Link>
          <Icon icon="ArrowLeft" className="self-center" color="#5F6C7B" />
        </li>
        <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
          <Link
            href="/orders"
            className="md:subtitle max-md:body_small whitespace-nowrap text-[#5F6C7B]"
          >
            الطلبات االسابقة
          </Link>
          <Icon icon="ArrowLeft" className="self-center" color="#5F6C7B" />
        </li>
        <li className="py-[1rem] flex justify-start items-start gap-[0.75rem]">
          <p className="md:subtitle max-md:body_small whitespace-nowrap text-primary-500">
            متابعة الطلب
          </p>
        </li>
      </ul>
    </div>
  );
};

const OrderDetailsSection: React.FC<{ order: Order }> = ({ order }) => {
  const status = OrderService.mapStatusToText(order.status);
  return (
    <div className="flex flex-col items-stretch self-start lg:sticky lg:top-[2rem] md:gap-[3rem] max-md:gap-4">
      <div className="p-[1.5rem] border border-divider rounded-[0.75rem] flex flex-row items-center">
        <div className="flex flex-row flex-[1] items-center py-[1rem] gap-[1rem]">
          <span className="body_small text-body">متوقع التوصيل :</span>
        </div>
        <div className="flex flex-row flex-[1] items-center py-[1rem] gap-[1rem] justify-end">
          <span className="body_small text-body">تفاصيل العنوان :</span>
          <Icon icon="LocationPin" />
          <span className="subtitle text-primary-500">{order.destination}</span>
        </div>
      </div>
      <div className="p-[1.5rem] bg-[#F9F9FA] rounded-[0.75rem] flex flex-col items-stretch gap-[2.4rem]">
        <OrderDetailsListTile title="متابعة الطلب :" value={status} />
        <OrderDetailsListTile
          title="رقم الطلب :"
          value={`#${order.id}`}
          valueDir="ltr"
        />
        <OrderDetailsListTile
          title="تاريخ الطلب :"
          value={new Date(Date.parse(order.createdAt)).toLocaleDateString(
            "en",
            { day: "2-digit", month: "2-digit", year: "numeric" }
          )}
          valueDir="ltr"
        />
        <OrderDetailsListTile
          title="مبلغ الفاتورة :"
          value={`${order.amount_due.toFixed(2)} ر.س`}
        />
        <OrderDetailsListTile
          title="عدد المواد :"
          value={
            order.items.length > 1
              ? `${order.items.length} أصناف`
              : `${order.items.length} صنف`
          }
        />
      </div>
      <div className="flex flex-row items-start justify-between md:gap-[4rem] max-md:gap-8 pb-4">
        <LinkButton
          variant="outlined"
          text="الرئيسية"
          href="/"
          className="flex-[1]"
        />
        <LinkButton
          variant="filled"
          color="primary"
          text="إلى المتجر"
          href="/products"
          className="flex-[1]"
          prefetch
        />
      </div>
    </div>
  );
};

const OrderDetailsListTile: React.FC<{
  title: string;
  titleDir?: "rtl" | "ltr";
  value: string;
  valueDir?: "rtl" | "ltr";
}> = (props) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[2rem]">
      <span className="subtitle text-subtitle flex-[1]" dir={props.titleDir}>
        {props.title}
      </span>
      <span className="heading_3 text-body" dir={props.valueDir}>
        {props.value}
      </span>
    </div>
  );
};

const OrderProductCard: React.FC<{ item: Order["items"][0] }> = ({ item }) => {
  return (
    <div className="relative px-8 py-4 border border-divider rounded-[0.75rem] md:translate-y-4 md:hover:translate-y-0 md:transition-transform cursor-pointer">
      <Link
        href={`/products/${item.productId}`}
        className="absolute top-0 left-0 w-full h-full"
        prefetch
      />
      <div className="flex flex-row gap-4">
        <div className="w-[64px] h-[64px] p-4 relative rounded-full self-center bg-divider overflow-hidden">
          <Image
            src={item.product.img_url}
            alt={item.product.img_alt ?? ""}
            fill
          />
        </div>
        <div className="flex flex-col gap-2 flex-[1]">
          <span className="body_large md:line-clamp-2 max-md:line-clamp-1">
            {item.product.name_ar}
          </span>
          <div className="flex md:flex-row  gap-4">
            <div className="flex flex-row gap-2 body_medium">
              <span className="text-body">الكمية:</span>
              <span>{item.quantity}</span>
            </div>
            <div className="flex flex-row gap-2 body_medium">
              <span className="text-body">السعر:</span>
              <span>{item.product.price} ر.س</span>
            </div>
          </div>
          {item.variant && (
            <div>
              <div className="flex flex-row gap-2 body_medium">
                <span className="text-body">خيار المنتج:</span>
                <span>{item.variant?.name_ar}</span>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <span className="body_large text-primary-500">{`${(
            item.quantity * item.price
          ).toFixed(2)} ر.س`}</span>
        </div>
      </div>
    </div>
  );
};
