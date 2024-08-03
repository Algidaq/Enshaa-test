import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import "./style/modal.css"

Modal.setAppElement('#root');

const CreateStageModal = ({ isOpen, onClose }) => {

    function done() {
        onClose();
    }

    function cancle() {
        onClose();
    }

    return (

        <Modal
            id='create-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Select Date"
            className="modal flex flex-col bg-[#FFFFFF] rounded-[8px] items-center justify-center w-full"
        >
            <div className='flex flex-col items-start gap-4 p-[30px] justify-start w-full h-full'>
                <p className="text-[#532494]">إضافة مرحلة</p>

                <div className='flex flex-col items-center gap-4 justify-center w-full h-full'>
                    <div className="relative z-0 px-2 w-full group h-full">
                        <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الاسم </label>
                        <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                        />

                    </div>
                    <div className="flex flex-row items-center justify-between gap-4 w-full h-full">
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

export default CreateStageModal;