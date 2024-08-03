"use client"
import React, { useState } from "react";
import SlidBarControlBoard from "@/components/SlideBarControlBorder";


export default function TimeLineSheet() {
    const [activeTab, setActiveTab] = useState('tab2');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    const weeks = [...Array(16)]
    const settingTimeSheet = {
        "items": [
            {
                "start": 1,
                "end": 5,
                "total": 5
            },
            {
                "start": 1,
                "end": 1,
                "total": 1
            },
            {
                "start": 2,
                "end": 3,
                "total": 2
            },
            {
                "start": 4,
                "end": 5,
                "total": 2
            },
            {
                "start": 5,
                "end": 9,
                "total": 5
            },
            {
                "start": 5,
                "end": 5,
                "total": 1
            },
            {
                "start": 6,
                "end": 6,
                "total": 1
            },
            {
                "start": 7,
                "end": 8,
                "total": 2
            },
            {
                "start": 8,
                "end": 9,
                "total": 2
            },
            {
                "start": 8,
                "end": 14,
                "total": 7
            },
            {
                "start": 8,
                "end": 9,
                "total": 2
            },
            {
                "start": 12,
                "end": 14,
                "total": 3
            },
        ]
    }

    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-2 justify-start items-start bg-[#F9FAFB] container mx-auto w-full h-full">
            <SlidBarControlBoard active="time-sheet" />
            <div className="flex flex-col gap-8 justify-start items-start p-[30px] w-full h-full">
                <p>مشروع فيلا 3 طابق</p>
                <div className="flex flex-row space-x-4 w-fit p-[5px] rounded-[12px] bg-[#F8F8F8]">
                    <button
                        className={`w-[200px] px-4 py-2 ${activeTab === 'tab1' ? 'bg-[#FFFFFF] text-[#8F5BD7] shadow-md rounded-[12px]' : 'text-[#CCCCCC]'}`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        إسبوع
                    </button>
                    <button
                        className={`w-[200px] px-4 py-2  ${activeTab === 'tab2' ? 'bg-[#FFFFFF] text-[#8F5BD7] shadow-md rounded-[12px]' : 'text-[#CCCCCC]'}`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        يوم
                    </button>
                </div>

                <div className="w-[890px] h-[938px] flex flex-row gap-2 justify-start bg-[#ffffff] rounded-[12px]">
                    <div className="flex flex-row border-l-[1px]  h-full w-[700px]">

                        <div className="flex flex-row-reverse w-full justify-start items-start h-full" >
                            {weeks.map((_, i) =>
                                <div key={i} className="relative flex flex-col justify-start gap-[21px]  border-r-[1px] w-fit h-full" >
                                    <div className="p-[8px]">d{i + 1}</div>
                                    {settingTimeSheet.items.map((item, j) =>

                                        <div className="relative path flex flex-row  gap-8" key={j}>
                                            {(i === (item.start - 1) && i === (item.end - 1)) ? <div className="w-full h-[15px] bg-[#8F5BD7] rounded-[12px] outline outline-2 outline-[#8F5BD7] z-10"></div> : i === (item.start - 1) ?
                                                <div className="w-full h-[15px] bg-[#8F5BD7] rounded-l-[12px] outline outline-2 outline-[#8F5BD7] "></div>
                                                :
                                                ((i === (item.end - 1)) ?
                                                    <div className="w-full h-[15px] bg-[#8F5BD7] outline outline-2 outline-[#8F5BD7] rounded-r-[12px] z-10"></div>
                                                    : ((i > (item.start - 1) && (i < (item.end - 1))) ?
                                                        < div className="w-full h-[15px] bg-[#8F5BD7] outline outline-2 outline-[#8F5BD7] z-10"></div >
                                                        :
                                                        < div className="w-full h-[15px] "></div >))}
                                        </div>
                                    )}
                                </div>)}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 w-full pt-[50px] pl-[20px] pr-[10px]">
                        <div className="flex flex-col items-start gap-4 justify-start w-full">
                            <h3 className="text-[#1A1A1A]">الحفر والقواعد</h3>
                            <div className="flex flex-col items-start gap-[11px] justify-start w-full">
                                <h4 className=" text-[#4D4D4D]">الحفر و الفواصل</h4>
                                <h4 className=" text-[#4D4D4D]">التاسيسات</h4>
                                <h4 className=" text-[#4D4D4D]">إستكمال اعمال العظم</h4>
                            </div>

                        </div>
                        <div className="flex flex-col items-start gap-4 justify-start w-full">
                            <h3 className="text-[#1A1A1A]">ابواب و شبابيك</h3>
                            <div className="flex flex-col items-start gap-[11px] justify-start w-full">
                                <h4 className=" text-[#4D4D4D]">الحفر و الفواصل</h4>
                                <h4 className=" text-[#4D4D4D]">التاسيسات</h4>
                                <h4 className=" text-[#4D4D4D]">إستكمال اعمال العظم</h4>
                            </div>

                        </div>
                        <div className="flex flex-col items-start gap-4 justify-start w-full">
                            <h3 className="text-[#1A1A1A]">عزل وتكييف</h3>
                            <div className="flex flex-col items-start gap-[11px] justify-start w-full">
                                <h4 className=" text-[#4D4D4D]">الحفر و الفواصل</h4>
                                <h4 className=" text-[#4D4D4D]">التاسيسات</h4>
                                <h4 className=" text-[#4D4D4D]">إستكمال اعمال العظم</h4>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </div >
    )
}