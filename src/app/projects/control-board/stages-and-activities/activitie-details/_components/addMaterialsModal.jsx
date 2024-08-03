import Modal from 'react-modal';
import "../style/modal.css"
import Image from 'next/image';
import productImage from "../../../../../../../public/cosl1.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

Modal.setAppElement('#root');
export default function AddMaterialsModal({ isOpen, onClose }) {
    function add() {
        let div = document.getElementById("number");
        let value = Number(div.innerHTML);
        div.innerHTML = value + 1;
    }

    function min() {
        let div = document.getElementById("number");
        let value = Number(div.innerHTML);
        if (value != 0) {
            div.innerHTML = value - 1;
        }
    }
    return (

        <Modal
            id='material-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Select Date"
            className="modal flex flex-col items-center relative justify-center w-full h-full"
        >
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center gap-8 justify-center w-full p-[20px] h-full '>
                    <div className='flex flex-col items-center justify center gap-8 w-full h-full' >
                        <div className='flex flex-col items-center justify center p-[10px] w-full border-b-[1px] border-[#E0E0E0]'>
                            <Image unoptimized width={150} height={150} src={productImage} alt=
                                "loading..." />
                        </div>

                        <div className='flex flex-col gap-[10px] items-center justify-center w-full'>
                            <p id="done" className=' font-bold text-[#03C7F3]'>معجون ساف</p>
                            <p id="succes-procese" className='text-[11px] text-[#999999]'>100 ريال سعودي</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify center gap-4 w-[80%] h-full '>
                        <div className='flex flex-row gap-4 justify-center items-center w-full'>
                            <button onClick={min} className='bg-[#03C7F3] text-[#FFFFFF] p-[10px] rounded-[8px] pr-[20px] pl-[20px]'>-</button>
                            <div id="number" className='pr-[70px] pl-[70px] border-[1px] border-[#E0E0E0] rounded-[5px] pt-[10px] pb-[10px]'>1</div>
                            <button onClick={add} className='bg-[#03C7F3] text-[#FFFFFF] p-[10px] pr-[20px] pl-[20px] rounded-[8px]'>+</button>
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الخيارات</label>
                            <input id={"option"} readOnly
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
                        <button onClick={onClose} className="w-full bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            تم
                        </button>
                    </div>

                </div>

            </div>
        </Modal>
    )
}