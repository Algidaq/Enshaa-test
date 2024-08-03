'use client'
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import "./style/profileModal.css"
import { Icon } from '../Icon';
import { apiGetProfile, apiUpdateProfile } from '@/service';
import Profile from "@/service/profile"
import { useEffect, useState } from 'react';

Modal.setAppElement('#root');

const ProfileModal = ({ isOpen, onClose }) => {

    async function done(e) {
        e.preventDefault();

        try {
            const response = apiUpdateProfile(formData);
            console.log('Update successful:', response);
            onClose();
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiGetProfile();
                const { full_name, email, phone_number } = response; // Assuming response.data contains your API response with 'name' and 'email' fields
                setFormData({ full_name, email, phone_number });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (

        <Modal
            id='profile-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            className="modal flex flex-col items-center relative justify-center"
        >
            <div className='flex flex-col items-center justify-center gap-8 w-full p-[40px] h-full'>
                <div className='flex flex-col gap-[32px] items-center justify-center w-full '>
                    <div className='flex flex-row w-full border-b-[1px] border-[#E6E6E6] justify-start w-full h-full pb-[30px]  gap-[70px]'>
                        <svg onClick={onClose} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0.5)" fill="#F5F5F5" />
                            <path d="M21 11L11 21M11 11L21 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="48.5" cy="48.5" r="48" fill="#E3D6F5" />
                                <path d="M61.8332 63.5C61.8332 61.1741 61.8332 60.0111 61.5461 59.0648C60.8998 56.9341 59.2324 55.2667 57.1017 54.6204C56.1554 54.3333 54.9924 54.3333 52.6665 54.3333H44.3332C42.0072 54.3333 40.8443 54.3333 39.8979 54.6204C37.7673 55.2667 36.0999 56.9341 35.4536 59.0648C35.1665 60.0111 35.1665 61.1741 35.1665 63.5M55.9998 41C55.9998 45.1421 52.642 48.5 48.4998 48.5C44.3577 48.5 40.9998 45.1421 40.9998 41C40.9998 36.8579 44.3577 33.5 48.4998 33.5C52.642 33.5 55.9998 36.8579 55.9998 41Z" stroke="#532494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-[#999999] text-[24px]'>الملف الشخصي</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[2px] w-full'>
                        <div className="relative z-0  w-full group">
                            <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الاسم </label>
                            <input type="text" onChange={handleChange} name="full_name" value={formData.full_name} id="projectName" placeholder="الاسم" className="h-12 bg-white rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:outline-none focus:border-[#E6E6E6][#E6E6E6]blue-600 block w-full p-2.5"
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">البريد الالكتروني</label>
                            <input type="text" onChange={handleChange} name="email" value={formData.email} id="projectName" placeholder="البريد الالكتروني" className="h-12 bg-white rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:outline-none focus:border-[#E6E6E6][#E6E6E6]blue-600 block w-full p-2.5"
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4 z-10 relative mx-8 top-2 left-3 w-auto  ">رقم الجوال</label>
                            <div className='flex flex-row border-[1px] border-[#E6E6E6] pr-[10px] rounded-[10px]'>
                                <div className="flex self-center flex-row items-center gap-[12px] t-[20px]">
                                    <Icon icon="SaudiFlag" />
                                    <Icon icon="ArrowDown" />
                                </div>
                                <input type="text" onChange={handleChange} name="phone_number" value={formData.phone_number} id="projectName" placeholder="رقم الجوال" className=" h-12 border-l-0 border-[#E6E6E6] bg-white rounded-[10px] text-gray-900 text-sm focus:outline-none focus:border-[#E6E6E6] block w-full p-2.5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={done} className=" bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    حفظ
                </button>


            </div>
        </Modal>
    );
};

export default ProfileModal;