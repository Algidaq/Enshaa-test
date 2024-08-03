import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ar from "date-fns/locale/ar";
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import "./style/profileModal.css"

Modal.setAppElement('#root');

const CancelModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onClose(date);
    };
    async function done() {
        onClose();
        //add action from rejected
    }

    function cancle() {
        onClose();
    }

    return (

        <Modal
            id='cancel-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            className="modal flex flex-col items-center relative justify-center"
        >
            <div className='flex flex-col items-center justify-center p-[30px]'>
                <div className='flex flex-col gap-[10px] items-center justify-center'>
                    <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_3226_7181)">
                            <rect x="10.5" y="8" width="80" height="80" rx="10" fill="#FB4E4E" />
                        </g>
                        <path d="M39.0202 36.0633C42.8668 29.4008 44.7901 26.0696 47.3284 25.0026C49.3562 24.1502 51.6418 24.1502 53.6696 25.0026C56.2079 26.0696 58.1312 29.4008 61.9778 36.0633L71.2994 52.2087C75.1459 58.8712 77.0692 62.2024 76.7241 64.9342C76.4484 67.1165 75.3056 69.0959 73.5535 70.4258C71.3603 72.0906 67.5137 72.0906 59.8206 72.0906H41.1774C33.4843 72.0906 29.6377 72.0906 27.4445 70.4258C25.6924 69.0959 24.5496 67.1165 24.2739 64.9342C23.9288 62.2024 25.8521 58.8712 29.6987 52.2087L39.0202 36.0633Z" fill="white" />
                        <rect x="47.875" y="37.1816" width="5.2508" height="19.353" rx="2.6254" fill="#FB4E4E" />
                        <rect x="47.875" y="60.2812" width="5.2508" height="5.2508" rx="2.6254" fill="#FB4E4E" />
                        <defs>
                            <filter id="filter0_d_3226_7181" x="0.5" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.305882 0 0 0 0 0.392157 0 0 0 0.22 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3226_7181" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3226_7181" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <div className='flex flex-col gap-[10px] items-center justify-center'>
                        <p id="done" className=' font-bold text-[#532494]'>هل أنت متاكد ؟</p>
                    </div>
                </div>
            </div>
            <div className='mb-[10px] flex flex-row items-center judtify-between w-full border-t-[1px] border-[#E6E6E6] h-full'>
                <button onClick={cancle} className="w-full text-[#999999] w-[166px] bg-white rounded-br-[20px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    إلغاء
                </button>
                <div className='h-full w-[0] border-[1px] border-[#E6E6E6]'></div>
                <button onClick={done} className=" w-full text-[#FB4E4E]  w-[166px] rounded-br-[20px] bg-white border-l-[1px] border-[#E6E6E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     تسجيل خروج
                </button>

            </div>
        </Modal>
    );
};

export default CancelModal;