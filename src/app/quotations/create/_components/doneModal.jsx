import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import gifDone from "../../../../../public/Animation - 1719748301279.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Dialog, LinkButton } from "@/components";

Modal.setAppElement("#modal");

const DoneModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onClose(date);
  };
  async function done() {
    onClose();
    router.push("/quotations");
  }

  function cancle() {
    onClose();
    router.refresh("/quotations/create");
  }

  return (
    <Dialog show={isOpen} selector="modal" onBackdropClick={cancle}>
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <div className="py-[80px] px-[152px] flex flex-col items-stretch bg-netural-100 rounded-[0.75rem] gap-[48px]">
          <Image
            unoptimized
            width={100}
            height={100}
            src={gifDone}
            alt="loading..."
            className="self-center"
          />
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <p id="done" className=" font-bold text-[#03C7F3]">
              منتهي
            </p>
            <p id="succes-procese" className="text-[11px] text-[#2AC769]">
              تمت العملية بنجاح
            </p>
          </div>
          <div className="flex flex-col gap-[32px] items-stretch">
            <LinkButton
              href="/quotations"
              variant="filled"
              text="عرض طلبات التسعير"
              className="w-[362px]"
            />
            <Button variant="outlined" text="إلغاء" onClick={cancle} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DoneModal;
