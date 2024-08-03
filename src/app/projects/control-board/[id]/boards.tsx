"use client"
import { useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import logo from "../../../../../public/assets/logo.png"
import Image from 'next/image';
import { Project } from '@/service/project';
import { newDate } from 'react-datepicker/dist/date_utils';
import SlidBarControlBoard from '@/components/SlideBarControlBorder';

export default function Boards({ project }: { project: Project }) {
    const value = project.progress;
    const formatDate = (date: string) => {
        let dateInput = new Date(date);
        if (!dateInput) return '';
        const day = dateInput.getDate().toString().padStart(2, '0');
        const month = (dateInput.getMonth() + 1).toString().padStart(2, '0');
        const year = dateInput.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="flex flex-row gap-2 justify-start items-start bg-[#F9FAFB] w-full h-full">

            <SlidBarControlBoard active="control-board" />
            <div className="flex flex-col gap-8 justify-start items-start p-[30px] w-full h-full">
                <p>{project.project_name}</p>
                <div className="flex lg:flex-row md:flex-col flex-col gap-[30px] justify-start items-start w-full h-full">
                    <div className="flex flex-col justify-between bg-[#FFFFFF] p-[20px] gap-4 h-[445px] w-[400px]" >
                        <div className="flex flex-col justify-center items-center gap-[40px] w-full ">
                            <div className="flex flex-row gap-2 justify-start items-start border-b-[1px] border-[#E6E6E6] pb-[10px] w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 20.6622C9.98901 18.9331 12 15.7014 12 12C12 8.29859 9.98901 5.06687 7 3.33782M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>تقدم المشروع</p>
                            </div>

                            <div className='p-[10px]' style={{ width: '200px' }}>
                                <CircularProgressbar
                                    value={value}
                                    text={`${value}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        pathColor: "#532494",
                                        textColor: "#532494",
                                        trailColor: "#E3D6F5",
                                        textSize: 14,
                                    })}

                                />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-row justify-center gap-4 items-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12.0063" r="12" fill="#532494" />
                                </svg>
                                <p>تقدم المشروع</p>
                            </div>
                            <div className='flex flex-row gap-4 justify-center items-center'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.6699" cy="12.0063" r="12" fill="#C7ADEB" />
                                </svg>
                                <p>ما تبقى للمشروع</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[40px] justify-center items-center  w-[500px] h-full'>
                        <div className='flex flex-row justify-between gap-[40px] w-full'>
                            <div className='flex flex-col bg-[#FFFFFF] gap-[32px] p-[24px] w-[262px]'>
                                <div className='flex gap-4 flex-row justify-start items-start border-b-[1px] border-[#E6E6E6] pb-[10px]'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1699 19L17.1699 21L21.6699 16.5M22.6551 12.5499C22.6649 12.3678 22.6699 12.1845 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.4354 7.00643 21.858 12.4084 21.9966M12.6699 6V12L16.4083 13.8692" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>المسار الزمني</p>
                                </div>

                                <div className='flex gap-4 flex-row justify-start items-start pb-[10px]'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.6699" cy="12" r="12" fill="#2AC769" />
                                    </svg>
                                    <p>في المسار الزمني</p>
                                </div>
                            </div>
                            <div className='flex flex-col bg-[#FFFFFF] gap-[32px] p-[24px] w-[262px]'>
                                <div className='flex gap-4 flex-row justify-start items-start border-b-[1px] border-[#E6E6E6] pb-[10px]'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.83496 10C2.83496 10 2.95628 9.15076 6.471 5.63604C9.98572 2.12132 15.6842 2.12132 19.1989 5.63604C20.4442 6.88131 21.2483 8.40072 21.6111 10M2.83496 10V4M2.83496 10H8.83496M22.835 14C22.835 14 22.7136 14.8492 19.1989 18.364C15.6842 21.8787 9.98572 21.8787 6.471 18.364C5.22573 17.1187 4.42166 15.5993 4.05879 14M22.835 14V20M22.835 14H16.835" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p>حالة المشروع</p>
                                </div>

                                <div className='flex gap-4 flex-row justify-start items-start pb-[10px]'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.835" cy="12" r="12" fill="#F6A609" />
                                    </svg>
                                    <p>قيد العمل</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 bg-[#FFFFFF] w-full h-full p-[24px]'>
                            <div className='flex gap-4 flex-row justify-start items-start border-b-[1px] border-[#E6E6E6] pb-[24px]'>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.66992 8.5V12.5L12.1699 14M9.66992 4C4.9755 4 1.16992 7.80558 1.16992 12.5C1.16992 17.1944 4.9755 21 9.66992 21C14.3643 21 18.1699 17.1944 18.1699 12.5C18.1699 7.80558 14.3643 4 9.66992 4ZM9.66992 4V1M7.66992 1H11.6699M17.9989 4.59204L16.4989 3.09204L17.2489 3.84204M1.34094 4.59204L2.84094 3.09204L2.09094 3.84204" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>الجدول الزمني للمشروع</p>
                            </div>
                            <div className='flex flex-col gap-4 justify-center items-center w-full h-full'>
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <div className='flex gap-4 flex-row'>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.6699 10H3.66992M16.6699 2V6M8.66992 2V6M11.1699 14L12.6699 13V18M11.4199 18H13.9199M8.46992 22H16.8699C18.5501 22 19.3902 22 20.0319 21.673C20.5964 21.3854 21.0553 20.9265 21.3429 20.362C21.6699 19.7202 21.6699 18.8802 21.6699 17.2V8.8C21.6699 7.11984 21.6699 6.27976 21.3429 5.63803C21.0553 5.07354 20.5964 4.6146 20.0319 4.32698C19.3902 4 18.5501 4 16.8699 4H8.46992C6.78976 4 5.94969 4 5.30795 4.32698C4.74346 4.6146 4.28452 5.07354 3.9969 5.63803C3.66992 6.27976 3.66992 7.11984 3.66992 8.8V17.2C3.66992 18.8802 3.66992 19.7202 3.9969 20.362C4.28452 20.9265 4.74346 21.3854 5.30795 21.673C5.94969 22 6.78976 22 8.46992 22Z" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>تاريخ البداية :</p>
                                    </div>
                                    <p>{formatDate(project.start_date)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <div className='flex gap-4 flex-row'>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.6699 10H3.66992M16.6699 2V6M8.66992 2V6M9.66992 16L11.6699 18L16.1699 13.5M8.46992 22H16.8699C18.5501 22 19.3902 22 20.0319 21.673C20.5964 21.3854 21.0553 20.9265 21.3429 20.362C21.6699 19.7202 21.6699 18.8802 21.6699 17.2V8.8C21.6699 7.11984 21.6699 6.27976 21.3429 5.63803C21.0553 5.07354 20.5964 4.6146 20.0319 4.32698C19.3902 4 18.5501 4 16.8699 4H8.46992C6.78976 4 5.94969 4 5.30795 4.32698C4.74346 4.6146 4.28452 5.07354 3.9969 5.63803C3.66992 6.27976 3.66992 7.11984 3.66992 8.8V17.2C3.66992 18.8802 3.66992 19.7202 3.9969 20.362C4.28452 20.9265 4.74346 21.3854 5.30795 21.673C5.94969 22 6.78976 22 8.46992 22Z" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>التاريخ المتوقع للانتهاء :</p>
                                    </div>
                                    <p>{formatDate(project.expected_end_date)}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <div className='flex gap-4 flex-row'>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6699 10L21.6699 3M21.6699 3H15.6699M21.6699 3V9M10.6699 14L3.66992 21M3.66992 21H9.66992M3.66992 21L3.66992 15" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>مساحة الارض :</p>
                                    </div>
                                    <p>{project.land_area} m ²</p>
                                </div>
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <div className='flex gap-4 flex-row'>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.66992 3H8.46992C6.78976 3 5.94969 3 5.30795 3.32698C4.74346 3.6146 4.28452 4.07354 3.9969 4.63803C3.66992 5.27976 3.66992 6.11984 3.66992 7.8V8M8.66992 21H8.46992C6.78976 21 5.94969 21 5.30795 20.673C4.74346 20.3854 4.28452 19.9265 3.9969 19.362C3.66992 18.7202 3.66992 17.8802 3.66992 16.2V16M21.6699 8V7.8C21.6699 6.11984 21.6699 5.27976 21.3429 4.63803C21.0553 4.07354 20.5964 3.6146 20.0319 3.32698C19.3902 3 18.5501 3 16.8699 3H16.6699M21.6699 16V16.2C21.6699 17.8802 21.6699 18.7202 21.3429 19.362C21.0553 19.9265 20.5964 20.3854 20.0319 20.673C19.3902 21 18.5501 21 16.8699 21H16.6699" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p>مساحة البناء :</p>
                                    </div>
                                    <p>{project.building_area} m ²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}