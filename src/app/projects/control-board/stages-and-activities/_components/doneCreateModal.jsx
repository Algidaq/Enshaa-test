import Modal from 'react-modal';
import gifDone from '../../../../../../public/Animation - 1719748301279.gif';
import Image from 'next/image';
import "./style/modal.css"

Modal.setAppElement('#root');

const DoneModal = ({ isOpen, onClose }) => {
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
            className="modal flex flex-col items-center relative justify-center w-full h-full"
        >
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center gap-4 justify-center w-full h-full '>
                    <Image unoptimized width={100} height={100} src={gifDone} alt=
                        "loading..." />
                    <div className='flex flex-col gap-[10px] items-center justify-center'>
                        <p id="done" className=' font-bold text-[#03C7F3]'>نجاح</p>
                        <p id="succes-procese" className='text-[11px] text-[#999999]'>تمت الاضافة</p>
                    </div>
                    <button onClick={onClose} className="w-[150px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        تم
                    </button>
                </div>

            </div>
        </Modal>
    );
};

export default DoneModal;