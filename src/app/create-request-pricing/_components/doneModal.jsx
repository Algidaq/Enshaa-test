import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import gifDone from "../../../../public/Animation - 1719748301279.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";

Modal.setAppElement("#root");

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
    <Modal
      id="done-modal"
      isOpen={isOpen}
      ariaHideApp={false}
      contentLabel="Select Date"
      className="modal flex flex-col items-center relative justify-center mt[300px] "
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-[32px] items-center justify-center mt-[130px]">
          <Image
            unoptimized
            width={100}
            height={100}
            src={gifDone}
            className
            alt="loading..."
          />
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <p id="done" className=" font-bold text-[#03C7F3]">
              منتهي
            </p>
            <p id="succes-procese" className="text-[11px] text-[#2AC769]">
              تمت العملية بنجاح
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center judtify-center gap-2 w-full">
          <button
            onClick={done}
            className="w-[200px] mt-[40px] bg-[#532494] rounded-[12px] text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            عرض طلبات التسعير
          </button>
          <button
            onClick={cancle}
            className="w-[200px] mt-[40px] text-gray-500 bg-white border-[1px] w-full border-gray-500 rounded-[12px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            إلغاء
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DoneModal;
