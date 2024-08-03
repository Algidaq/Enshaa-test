import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ar from "date-fns/locale/ar";
import Modal from 'react-modal';
import gifDone from '../../../public/Animation - 1719748301279.gif';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import "./style/profileModal.css"

Modal.setAppElement('#root');

const DoneModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onClose(date);
    };
    function done() {
        onClose();
    }

    function cancle() {
        onClose();
    }

    return (

        <Modal
            id='done-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Select Date"
            className="modal flex flex-col items-center relative justify-center w-full"
        >
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='flex flex-col items-center gap-4 justify-center w-full'>
                    <Image unoptimized width={100} height={100} src={gifDone} alt=
                        "loading..." />
                    <div className='flex flex-col gap-[10px] items-center justify-center'>
                        <p id="done" className=' font-bold text-[#03C7F3]'>منتهي</p>
                        <p id="succes-procese" className='text-[11px] text-[#2AC769]'>تمت العملية بنجاح</p>
                    </div>
                </div>

            </div>
        </Modal>
    );
};

export default DoneModal;