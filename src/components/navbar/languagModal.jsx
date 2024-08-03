import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "./style/profileModal.css";
import styles from "./style/checkbox.css";
import { useRouter } from "next/navigation";
import { Icon } from "../Icon";
import { Checkbox } from "../ui/checkbox";
Modal.setAppElement("#root");

const LanguagModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);
  const [checkedAr, setArChecked] = useState("");
  const [checkedEn, setEnChecked] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option, dropName) => {
    switch (dropName) {
      case "ar":
        toggleCheckedAr(option);
        break;
      case "en":
        toggleCheckedEn(option);
        break;
      default:
        break;
    }
    setSelectedOption(option === selectedOption ? null : option);
  };

  const toggleCheckedAr = (checked) => {
    setArChecked(checked);
  };
  const toggleCheckedEn = (checked) => {
    setEnChecked(checked);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onClose(date);
  };
  async function done() {
    onClose();
  }

  function cancle() {
    onClose();
  }

  return (
    <Modal
      id="languag-modal"
      isOpen={isOpen}
      ariaHideApp={false}
      className="modal flex flex-col items-center relative justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full p-[40px] h-full">
        <div className="flex flex-col gap-[32px] items-center justify-center w-full ">
          <div className="flex flex-row w-full border-b-[1px] border-[#E6E6E6] justify-start w-full h-full pb-[30px]  gap-[100px]">
            <svg
              onClick={done}
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                transform="matrix(-1 0 0 1 32 0.5)"
                fill="#F5F5F5"
              />
              <path
                d="M21 11L11 21M11 11L21 21"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex flex-col gap-4 items-center justify-center">
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="48.5" cy="48.5" r="48" fill="#E3D6F5" />
                <path
                  d="M48.5002 31.834C52.669 36.3979 55.0381 42.3207 55.1668 48.5007C55.0381 54.6806 52.669 60.6034 48.5002 65.1673M48.5002 31.834C44.3314 36.3979 41.9622 42.3207 41.8335 48.5007C41.9622 54.6806 44.3314 60.6034 48.5002 65.1673M48.5002 31.834C39.2954 31.834 31.8335 39.2959 31.8335 48.5007C31.8335 57.7054 39.2954 65.1673 48.5002 65.1673M48.5002 31.834C57.7049 31.834 65.1668 39.2959 65.1668 48.5007C65.1668 57.7054 57.7049 65.1673 48.5002 65.1673M32.6669 43.5007H64.3335M32.6668 53.5007H64.3335"
                  stroke="#532494"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#999999] text-[24px]">تغيير اللغة</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[40px] w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <p>العربية</p>
              <div className={"checkbox"}>
                <input
                  type="checkbox"
                  checked={selectedOption === "العربية"}
                  onChange={() => {
                    handleOptionSelect("العربية", "ar");
                  }}
                  className={"input"}
                  id="circle-checkbox"
                />
                <label htmlFor="circle-checkbox" className={"label"}></label>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <p>English</p>
              <div className={"checkbox"}>
                <input
                  type="checkbox"
                  checked={selectedOption === "English"}
                  onChange={() => {
                    handleOptionSelect("English", "en");
                  }}
                  className={"input"}
                  id="circle-checkbox2"
                />
                <label htmlFor="circle-checkbox2" className={"label"}></label>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={done}
          className=" bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          حفظ
        </button>
      </div>
    </Modal>
  );
};

export default LanguagModal;
