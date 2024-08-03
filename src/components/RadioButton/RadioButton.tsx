import React from "react";
import { Icon } from "../Icon";

export const RadioButton: React.FC<{
  isSelected?: boolean;
  onCheck?: () => void;
}> = (props) => {
  return (
    <span
      onClick={props.onCheck}
      className={[
        "h-[24px] w-[24px] border border-divider rounded-[100%] flex items-center justify-center cursor-pointer",
        props.isSelected
          ? "bg-primary-500 border-primary-500"
          : "bg-netural-200",
      ].join(" ")}
    >
      <Icon icon="Check" color={props.isSelected ? "#FFFFFF" : "#CCCCCC"} />
    </span>
  );
};
