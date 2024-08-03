import {
  Component,
  lazy,
  LazyExoticComponent,
  Suspense,
  SVGProps,
} from "react";
import SaudiFlag from "./svgs/Saudi-Flag.svg";
import ArrowDown from "./svgs/ArrowDown.svg";
import ArrowRight from "./svgs/RightArrow.svg";
import Attchment from "./svgs/Attchment.svg";
import Phone from "./svgs/Phone.svg";
import Chart from "./svgs/Chart.svg";
import Box from "./svgs/Box.svg";
import Speaker from "./svgs/Speaker.svg";
import Document from "./svgs/Document.svg";
import CircleCheck from "./svgs/CircleCheck.svg";
import Search from "./svgs/Search.svg";
import ArrowLeft from "./svgs/ArrowLeft.svg";
import CategoryBox from "./svgs/CategoryBox.svg";
import Facebook from "./svgs/Facebook.svg";
import Instagram from "./svgs/Insta.svg";
import LinkedIn from "./svgs/LinkedIn.svg";
import Twitter from "./svgs/Twitter.svg";
import Plus from "./svgs/Plus.svg";
import Minus from "./svgs/Minus.svg";
import ExclamationMark from "./svgs/ExclamationMark.svg";
import Cart from "./svgs/Cart.svg";
import Settings from "./svgs/Settings.svg";
import Receipt from "./svgs/Receipt.svg";
import Stack from "./svgs/Stack.svg";
import TrashCan from "./svgs/Trash.svg";
import CreditCardSearch from "./svgs/CreditCardSearch.svg";
import Check from "./svgs/check.svg";
import CreditCard from "./svgs/CreditCard.svg";
import BankTransfer from "./svgs/BankTransfer.svg";
import ArrowUp from "./svgs/ArrowUp.svg";
import LocationPin from "./svgs/LocationPin.svg";
import Profile from "./svgs/Profile.svg";
import OtpPin from "./svgs/otp-icon.svg";
import PowerOff from "./svgs/PowerOff.svg";
import HumbrugerMenu from "./svgs/HumburgerMenu.svg";
import Cross from "./svgs/Cross.svg";
import Wallet from "./svgs/wallet.svg";
import Replay from "./svgs/Replay.svg";
import DeclineArrow from "./svgs/DeclineArrow.svg";
import InclineArrow from "./svgs/InclineArrow.svg";

const Icons = {
  DeclineArrow,
  InclineArrow,
  Replay,
  Wallet,
  Cross,
  HumbrugerMenu,
  PowerOff,
  Profile,
  LocationPin,
  ArrowUp,
  CreditCard,
  BankTransfer,
  Check,
  CreditCardSearch,
  Receipt,
  Stack,
  TrashCan,
  Settings,
  Cart,
  Plus,
  Minus,
  SaudiFlag,
  ArrowDown,
  ArrowRight,
  Attchment,
  Phone,
  Chart,
  Box,
  Speaker,
  Document,
  CircleCheck,
  Search,
  ArrowLeft,
  CategoryBox,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ExclamationMark,
  OtpPin,
};

export type AppIcons = keyof typeof Icons;

export const Icon: React.FC<{ icon: AppIcons } & SVGProps<SVGElement>> = ({
  icon,
  ...props
}) => {
  const Component: React.FC<SVGProps<SVGElement>> = Icons[icon];

  if (!Component) return <></>;
  return <Component {...props} />;
};
interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  width?: number | string;
  height?: number | string;
}
export const IconButton: React.FC<IconButtonProps> = ({
  width = "24px",
  height = "24px",
  className,
  ...props
}) => {
  const _width = typeof width === "number" ? `${width}px` : width;
  const _height = typeof height === "number" ? `${height}px` : height;

  return (
    <button
      role="button"
      className={[
        `h-[${_height}] w-[${_width}]`,
        "flex flex-row justify-center items-center",
        `${className ?? ""}`,
      ].join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};
