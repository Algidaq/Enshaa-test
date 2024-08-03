"use client"
import DateModal from "@/components/DateModal";
import SlidBarControlBoard from "@/components/SlideBarControlBorder";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';


export default function LessonsLearnedForm() {
    const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const openDateModal = () => {
        setDateModalIsOpen(true);
    };

    const closeDateModal = (date: Date) => {
        if (date) {
            setSelectedDate(date);
        }
        setDateModalIsOpen(false);
    };
    const formatDate = (date:Date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-2 justify-start items-start bg-[#F9FAFB] container mx-auto w-full h-full">
            <SlidBarControlBoard active="lessons-learned" />
            <div className="flex flex-col gap-8 justify-start items-start p-[30px] w-full h-full">
                <p className="text-[#532494] font-bold">مشروع فيلا 3 طابق</p>
                <div className="grid grid-cols-3 gap-2 bg-[#ffffff] p-[20px] px-[30px] py-[30px] rounded-[12px] w-full">
                    <div className="relative inline-block z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">اسم المشروع</label>
                        <input
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">تاريخ التقرير</label>
                        <input
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            value={selectedDate ? formatDate(selectedDate) : ''} readOnly onClick={openDateModal} />
                        {dateModalIsOpen && (
                            <DateModal isOpen={openDateModal} onClose={closeDateModal} ></DateModal>
                        )}
                    </div>
                    <div className="relative inline-block z-0 px-2 w-full group">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">مدير المشروع</label>
                        <input
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 w-[75%] group col-span-2 ">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">اعضاء الفريق</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 bg-[#ffffff] p-[20px] px-[30px] py-[30px] rounded-[12px] w-full">
                    <p className="col-span-2 text-[#532494] font-bold">الاهداف</p>
                    <div className="relative inline-block z-0 px-2 group w-full ">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">ما هي الأهداف من تنفيذ المشروع</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">هل تم تحقيق هذه الأهداف</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="py-[10px]  w-full col-span-2 rounded-[5px] bg-[#E3D6F5] flex justify-center items-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M12 4V20" stroke="#532494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">ما هي الأهداف التي تم تحقيقها و اضافتها بنهاية المشروع  </label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-[#ffffff] p-[20px] px-[30px] py-[30px] rounded-[12px] w-full">
                    <p className="col-span-3 text-[#532494] font-bold">الدروس المستفادة</p>
                    <div className="relative inline-block z-0 px-2 group w-full ">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">ما الذي تم انجازه بشكل ممتاز في المشروع</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">كيف يمكن تطوير هذه العمليات المرة الأخرى </label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الشخص المحدد للمهمة</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="py-[10px]  w-full col-span-3 rounded-[5px] bg-[#E3D6F5] flex justify-center items-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M12 4V20" stroke="#532494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full ">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">ما الذي لم يتم انجازه بشكل جيد في المشروع</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">كيف يمكن تطوير هذه العمليات المرة الأخرى</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="relative inline-block z-0 px-2 group w-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الشخص المحدد للمهمة</label>
                        <Textarea
                            placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                        />
                    </div>
                    <div className="py-[10px]  w-full col-span-3 rounded-[5px] bg-[#E3D6F5] flex justify-center items-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M12 4V20" stroke="#532494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-4 w-full col-span-3">
                    <button type="submit" className="w-[250px] rounded-[12px] text-[#666666] bg-[#FFFFFF] border-[1px] border-[#E6E6E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#532494] dark:focus:ring-blue-800">
                        إلغاء
                    </button>
                    <button className="w-[250px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        حفظ
                    </button>
                </div>
            </div>

        </div>
    )
}