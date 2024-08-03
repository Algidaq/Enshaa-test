/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link, { LinkProps } from "next/link";
import { Text, LinkButton, Button } from "@/components";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image?: string;
  link: string | LinkProps["href"];
  category: string;
  price: string;
  addToCart?: () => void;
  size?: "large" | "small";
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return props.size === "small" ? (
    <ProductCardSmall {...props} />
  ) : (
    <ProductCardLarge {...props} />
  );
};
const ProductCardLarge: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-start items-stretch h-[510px] max-w-[536px] border border-divider bg-netural-100 gap-[1rem] rounded-[0.75rem] overflow-hidden">
      <div className="h-[47%] bg-divider relative overflow-hidden">
        <Image
          src={props.image ?? ""}
          alt={""}
          className="absolute inset-0 w-[100%] h-[100%] object-contain"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="flex flex-col items-stretch gap-[1rem] flex-1">
        <div className="flex flex-row justify-start items-center p-[1rem] gap-[1rem] flex-1">
          <Text.h3 component="span" className="text-netural-900 flex-[1]">
            {props.name}
          </Text.h3>
          <Text.h3 component="span" className="text-primary-500">
            {props.price}
          </Text.h3>
        </div>
        <div className="p-[1rem] flex flex-row justify-start items-center">
          <Text.subtitle component="span" className="text-subtitle">
            {props.category}
          </Text.subtitle>
        </div>
        <div className="p-[1rem] flex flex-row justify-between items-center gap-[1.5rem]">
          <LinkButton variant="filled" href={props.link} text="عرض" fullWidth />
        </div>
      </div>
    </div>
  );
};

const ProductCardSmall: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="flex flex-col justify-start items-stretch max-h-[598px] border border-divider bg-netural-100 gap-[1rem] rounded-[0.75rem] overflow-hidden">
      <div className="h-[257px] xs:h-[164px] bg-divider relative overflow-hidden flex[1]">
        <Image
          unoptimized
          src={props.image ?? ""}
          alt={""}
          // className="absolute inset-0 w-[100%] h-[100%] object-contain"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="flex flex-col items-stretch gap-[1rem] flex-[1]">
        <div className="flex flex-row justify-start items-center p-[1rem] gap-[1rem] flex-[1]">
          <Text.h3
            component="span"
            className="text-netural-900 flex-[1] line-clamp-2"
          >
            {props.name}
          </Text.h3>
          <Text.h3 component="span" className="text-primary-500">
            {props.price}
          </Text.h3>
        </div>
        <div className="p-[1rem] flex flex-row justify-start items-center">
          <Text.subtitle component="span" className="text-subtitle">
            {props.category}
          </Text.subtitle>
        </div>
        <div className="p-[1rem] flex flex-col justify-between items-center gap-[1.5rem]">
          <LinkButton variant="filled" href={props.link} text="عرض" fullWidth />
        </div>
      </div>
    </div>
  );
};
