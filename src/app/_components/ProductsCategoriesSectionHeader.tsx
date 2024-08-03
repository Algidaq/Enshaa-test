import React from "react";
import { Icon, Text } from "@/components";
import Link from "next/link";

export const ProductCategoriesSectionHeader: React.FC<{
  header: string;
  href: string;
  linkText: string;
}> = (props) => {
  return (
    <div className="flex flex-row justify-between items-start">
      <Text.h3 component="h5" className="text-primary-500">
        {props.header}
      </Text.h3>
      <Link href={props.href} className="flex flex-row gap-[1rem] items-center">
        <Text.bodySmall component="span" className="text-subtitle py-[1.5px]">
          {props.linkText}
        </Text.bodySmall>
        <Icon icon="ArrowLeft" color={"#999999"} />
      </Link>
    </div>
  );
};
