import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import "./style/profileModal.css"
import { useRouter } from 'next/navigation';
import { Icon } from '../Icon';
import { apiGetProfile } from '@/service';

Modal.setAppElement('#root');

const PhoneModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [phone, setPhone] = useState(null);
    const [formData, setFormData] = useState({
        phone_number: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiGetProfile();
                const { phone_number } = response; // Assuming response.data contains your API response with 'name' and 'email' fields
                setFormData({ phone_number });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    async function done(e) {
        onClose(phone);
    }

    function cancle() {
        onClose();
    }

    return (

        <Modal
            id='phone-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            className="modal flex flex-col items-center relative justify-center"
        >
            <div className='flex flex-col items-center justify-center gap-8 w-full p-[40px] h-full'>
                <div className='flex flex-col gap-[32px] items-center justify-center w-full '>
                    <div className='flex flex-row w-full border-b-[1px] border-[#E6E6E6] justify-start w-full h-full pb-[30px]  gap-[100px]'>
                        <svg onClick={cancle} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0.5)" fill="#F5F5F5" />
                            <path d="M21 11L11 21M11 11L21 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="48.5" cy="48.5" r="48" fill="#E3D6F5" />
                                <path d="M42.4671 43.2556C43.6271 45.6716 45.2084 47.936 47.2111 49.9387C49.2137 51.9413 51.4781 53.5226 53.8941 54.6826C54.102 54.7824 54.2059 54.8323 54.3373 54.8706C54.8046 55.0068 55.3784 54.909 55.7741 54.6256C55.8854 54.5459 55.9807 54.4506 56.1712 54.2601C56.7539 53.6774 57.0452 53.3861 57.3382 53.1956C58.443 52.4773 59.8673 52.4773 60.9721 53.1956C61.2651 53.3861 61.5564 53.6774 62.1391 54.2601L62.4639 54.5849C63.3496 55.4706 63.7925 55.9135 64.0331 56.3891C64.5115 57.335 64.5115 58.4522 64.0331 59.3981C63.7925 59.8737 63.3496 60.3166 62.4639 61.2023L62.2012 61.4651C61.3185 62.3478 60.8771 62.7891 60.2771 63.1262C59.6112 63.5002 58.5771 63.7692 57.8134 63.7669C57.1251 63.7648 56.6547 63.6313 55.714 63.3643C50.6583 61.9294 45.8877 59.2219 41.9078 55.242C37.9278 51.262 35.2203 46.4914 33.7854 41.4357C33.5184 40.495 33.3849 40.0246 33.3828 39.3364C33.3806 38.5727 33.6495 37.5385 34.0235 36.8727C34.3606 36.2726 34.802 35.8313 35.6847 34.9486L35.9474 34.6858C36.8331 33.8001 37.276 33.3572 37.7516 33.1167C38.6976 32.6382 39.8147 32.6382 40.7606 33.1166C41.2362 33.3572 41.6791 33.8001 42.5648 34.6858L42.8896 35.0106C43.4723 35.5933 43.7636 35.8846 43.9541 36.1776C44.6724 37.2824 44.6724 38.7067 43.9541 39.8115C43.7636 40.1045 43.4723 40.3958 42.8896 40.9785C42.6991 41.169 42.6038 41.2643 42.5241 41.3756C42.2408 41.7714 42.1429 42.3451 42.2791 42.8124C42.3175 42.9439 42.3673 43.0478 42.4671 43.2556Z" stroke="#532494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-[#999999] text-[24px]'>تغيير الرقم</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[2px] w-full'>
                        <div className="relative z-0 w-full group">
                            <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4 z-10 relative mx-8 top-2 left-3 w-auto  ">الرقم القديم</label>
                            <div className='flex flex-row border-[1px] border-[#E6E6E6] pr-[10px] rounded-[10px]'>
                                <div className="flex self-center flex-row items-center gap-[12px] t-[20px]">
                                    <Icon icon="SaudiFlag" />
                                    <Icon icon="ArrowDown" />
                                </div>
                                <input type="text" name="projectName" value={formData.phone_number} id="projectName" placeholder="رقم الجوال القديم" className=" h-12 border-l-0 border-[#E6E6E6] bg-white rounded-[10px] text-gray-900 text-sm focus:outline-none focus:border-[#E6E6E6] block w-full p-2.5"
                                />
                            </div>
                        </div>
                        <div className="relative z-0 w-full group">
                            <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4 z-10 relative mx-8 top-2 left-3 w-auto  ">الرقم الجديد</label>
                            <div className='flex flex-row border-[1px] border-[#E6E6E6] pr-[10px] rounded-[10px]'>
                                <div className="flex self-center flex-row items-center gap-[12px] t-[20px]">
                                    <Icon icon="SaudiFlag" />
                                    <Icon icon="ArrowDown" />
                                </div>
                                <input type="text" onChange={handlePhoneChange} name="projectName" id="projectName" placeholder="رقم الجوال الجديد" className=" h-12 border-l-0 border-[#E6E6E6] bg-white rounded-[10px] text-gray-900 text-sm focus:outline-none focus:border-[#E6E6E6] block w-full p-2.5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={done} className=" bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    تم
                </button>
            </div>
        </Modal>
    );
};

export default PhoneModal;