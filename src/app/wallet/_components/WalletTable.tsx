"use client";
import { Icon } from "@/components";
import React from "react";
import { useWalletCtx } from "./WalletProvider";
import { WalletRes } from "@/services";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

const Headers: ReadonlyArray<{
  title: React.ReactNode;
  renderValue: (value: WalletRes["history"][0]) => React.ReactNode;
}> = [
  {
    title: "المبلغ",
    renderValue: (history) => <span>{formatAmount(history.amount)} ر.س</span>,
  },
  {
    title: "نوع العملية",

    renderValue: ({ type }) => (
      <span> {type === "refund" ? "استرجاع" : "عملية شراء"}</span>
    ),
  },
  {
    title: "التاريخ",
    renderValue: ({ createdAt }) =>
      new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(Date.parse(createdAt)),
  },
  {
    title: (
      <span className="inline-flex justify-end w-full">
        <Icon icon="Replay" />
      </span>
    ),
    renderValue: ({ type }) => {
      return (
        <div className="flex justify-end items-stretch w-full h-full">
          <div
            className={cn(
              "w-11 h-11 inline-flex justify-center items-center rounded-[4px]",
              type === "refund" ? "bg-[#F7EAEA]" : "bg-[#EAF7EC]"
            )}
          >
            <Icon
              icon={type === "refund" ? "DeclineArrow" : "InclineArrow"}
              color={type === "refund" ? "#FB4E4E" : "#2AC769"}
            />
          </div>
        </div>
      );
    },
  },
];

export const WalletTable: React.FC<{}> = (props) => {
  const {
    state: { data },
  } = useWalletCtx();
  if (!data) return <></>;
  const history = data.history;
  if (history.length < 1) return <WalletNoHistory />;

  return (
    <div className="mt-6 rounded-xl border border-divider max-h-[432px]  overflow-scroll">
      <table className="md:w-full max-md:w-[768px] table-fixed  bg-netural-100 border-collapse">
        <thead className="bg-[#F9FAFB] sticky top-0">
          <tr className="p-6 rounded-xl">
            {Headers.map((value, index) => (
              <th
                key={index.toString()}
                className="p-6 text-start body_small text-subtitle font-semibold"
              >
                {typeof value.title === "string" ? (
                  <span>{value.title}</span>
                ) : (
                  value.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {history.map((history, histoIndex) => (
            <tr key={history.id.toString()}>
              {Headers.map((header, index) => (
                <td
                  key={`${index}-${histoIndex}`}
                  className="p-6 border-b border-divider"
                >
                  {header.renderValue(history)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const WalletNoHistory: React.FC<{}> = (props) => {
  return (
    <div className="mt-8">
      <p className="subtitle text-body">لاتوجد معاملات سابقة</p>
    </div>
  );
};

function formatAmount(value: number) {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
    value
  );
}
