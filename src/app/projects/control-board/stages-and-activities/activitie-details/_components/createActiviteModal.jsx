"use client"
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import "../style/modal.css"
import "../style/checkbox.css"
import DateModal from "@/components/DateModal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

Modal.setAppElement('#root');

const CreateActiviteModal = ({ isOpen, onClose }) => {
    const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
    const [dateModalIsOpen2, setDateModalIsOpen2] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate2, setSelectedDate2] = useState(new Date());


    const openDateModal = () => {
        setDateModalIsOpen(true);
    };

    const closeDateModal = (date) => {
        if (date) {
            setSelectedDate(date);
        }
        setDateModalIsOpen(false);
    };
    const openDateModal2 = () => {
        setDateModalIsOpen2(true);
    };

    const closeDateModal2 = (date) => {
        if (date) {
            setSelectedDate2(date);
        }
        setDateModalIsOpen2(false);
    };
    function done() {
        onClose();
    }

    function cancle() {
        onClose();
    }

    const formatDate = (date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const [checkedAr, setArChecked] = useState("");

    const [checkedEn, setEnChecked] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option, dropName) => {
        switch (dropName) {
            case "pending":
                toggleCheckedPending(option);
              break;
            case "completed":
                toggleCheckedCompleted(option);
              break;
            default:
              break;
          }
        setSelectedOption(option === selectedOption ? null : option);
    };

    const toggleCheckedPending = (checked) => {
        setArChecked(checked);
    };
    const toggleCheckedCompleted = (checked) => {
        setEnChecked(checked);
    };


    return (

        <Modal
            id='create-activite-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Select Date"
            className="modal flex flex-col bg-[#FFFFFF] rounded-[8px] items-center justify-center w-full"
        >
            <div className='flex flex-col items-start gap-[4px] p-[30px] justify-start w-full h-full'>
                <p className="text-[#532494]">إضافة نشاط جديد</p>

                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className="relative z-0 px-2 w-full group h-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> المرحلة </label>
                        <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" value={"الحفر والقواعد"} className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        />
                    </div>
                    <div className="relative z-0 px-2 w-full group h-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الاسم </label>
                        <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        />
                    </div>
                    <div className="relative z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto ">  تاريخ البداية </label>
                        <input type="text" onClick={openDateModal} name="start_date" id="dateStart" placeholder="إختر الزمن" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedDate ? formatDate(selectedDate) : ''} readOnly
                        />
                        {dateModalIsOpen && (
                            <DateModal isOpen={openDateModal} onClose={closeDateModal} ></DateModal>
                        )}
                    </div>
                    <div className="relative z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto ">  تاريخ النهاية </label>
                        <input type="text" onClick={openDateModal2} name="start_date" id="dateStart" placeholder="إختر الزمن" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedDate2 ? formatDate(selectedDate2) : ''} readOnly
                        />
                        {dateModalIsOpen2 && (
                            <DateModal isOpen={openDateModal2} onClose={closeDateModal2} ></DateModal>
                        )}
                    </div>
                    <div className="relative z-0 px-2 w-full group h-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> عدد الايام </label>
                        <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الحالة</label>
                        <input id={"option"} readOnly value={selectedOption} 
                            placeholder="قائمة منسدلة" name="projectType" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <svg aria-hidden="true" width="10" className="absolute top-[44px] left-[20px]" height="10" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6406 1.5L7.64062 7.5L1.64062 1.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full ml-[100px] mt-[14px] bg-[#FFFFFF]">

                                <div className="flex flex-row items-center justify-between w-full">
                                <div className={"checkbox"}>
                                        <input
                                            type="checkbox"
                                            checked={selectedOption === "قيد التقدم"}
                                            onChange={() => {
                                                handleOptionSelect("قيد التقدم", "pending");
                                            }}
                                            className={"input"}
                                            id="circle-checkbox"
                                        />
                                        <label htmlFor="circle-checkbox" className={"label"}></label>
                                    </div>
                                    <p>قيد التقدم</p>
   
                                </div>
                                <DropdownMenuSeparator />
                                <div className="flex flex-row items-center justify-between w-full">
                                <div className={"checkbox"}>
                                        <input
                                            type="checkbox"
                                            checked={selectedOption === "مكتمله"}
                                            onChange={() => {
                                                handleOptionSelect("مكتمله", "completed");
                                            }}
                                            className={"input"}
                                            id="circle-checkbox2"
                                        />
                                        <label htmlFor="circle-checkbox2" className={"label"}></label>
                                    </div>
                                    <p>مكتمله</p>
                                    
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="relative z-0 px-2 w-full group h-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الوصف</label>
                        <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between p-[10px] gap-4 w-full h-full">
                        <button onClick={onClose} type="submit" className="w-[250px] rounded-[12px] text-[#666666] bg-[#FFFFFF] border-[1px] border-[#E6E6E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#532494] dark:focus:ring-blue-800">
                            إلغاء
                        </button>
                        <button onClick={onClose} className="w-[250px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            إضافة
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default CreateActiviteModal;