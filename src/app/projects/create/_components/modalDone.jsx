import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ar from "date-fns/locale/ar";
import Modal from 'react-modal';
import gifDone from '../../../../../public/Animation - 1719748301279.gif';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

Modal.setAppElement('#root');

const DoneModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onClose(date);
    };
    async function done(){
        onClose();
        router.refresh("projects/create");
    }

    return (

        <Modal
            id='done-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Select Date"
            className="modal flex flex-col items-center relative justify-center "
        >
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-col gap-[32px] items-center justify-center'>
                    <Image unoptimized width={100} height={100} src={gifDone} className alt="loading..." />
                    <div className='flex flex-col gap-[10px] items-center justify-center'>
                        <p className=' font-bold'>نجاح</p>
                        <p className='text-[11px]'>تم إنشاء المشروع بنجاح</p>
                    </div>
                </div>

            
                <button onClick={done} className="w-[200px] mt-[40px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none   focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    تم
                </button>
                
            </div>
        </Modal>
    );
};

export default DoneModal;