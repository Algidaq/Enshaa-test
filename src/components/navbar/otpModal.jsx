import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import "./style/profileModal.css"
import { useRouter } from 'next/navigation';
import { Icon } from '../Icon';
import { apiUpdatePhone } from '@/service';

Modal.setAppElement('#root');

const OtpModal = ({ isOpen, onClose, phone }) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        phone_number: phone,
        otp: '',
    });

    async function done() {
        try {
            const response = await apiUpdatePhone(formData);
            // Assuming response.data contains your API response with 'name' and 'email' fields
            console.log(response)
            onClose();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function cancle() {
        onClose();
    }

    const swapCursor = (e) => {
        const input = e.target;
        const maxLengthReached = input.value.length >= 1;
        const noValue = input.value.length === 0;
        var one = document.getElementById("one");
        var two = document.getElementById("two");
        var three = document.getElementById("three");
        var foure = document.getElementById("four");

        if (maxLengthReached) {
            const nextInput = input.previousElementSibling;

            if (nextInput) {
                nextInput.focus();
            }

        }
        if (noValue) {
            const nextInput = input.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
        console.log(one.value)
        if (notEmpty(one.value) && notEmpty(two.value) && notEmpty(three.value) && notEmpty(foure.value)) {
            const sendButton = document.getElementById("send");
            sendButton.removeAttribute("disabled");
            sendButton.style.background = "#532494";
            sendButton.onclick = done;
            formData.otp=foure.value+""+three.value+""+two.value+""+one.value;
        } else {
            const sendButton = document.getElementById("send");
            sendButton.setAttribute("disabled", "disabled");
            sendButton.style.background = "#999999";
        }
    };

    function notEmpty(value) {
        if (value.length === 0 || value === " ") {
            return false;
        }
        return true;
    }

    return (
        <Modal
            id='otp-modal'
            isOpen={isOpen}
            ariaHideApp={false}
            className="modal flex flex-col items-center relative justify-center"
        >
            <div className='flex flex-col items-center justify-center gap-8 w-full p-[40px] h-full'>
                <div className='flex flex-col gap-[32px] items-center justify-center w-full '>
                    <div className='flex flex-row w-full justify-start w-full h-full pb-[30px]  gap-[30px]'>
                        <svg onClick={cancle} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" transform="matrix(-1 0 0 1 32 0.5)" fill="#F5F5F5" />
                            <path d="M21 11L11 21M11 11L21 21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div id="inputs" className='flex flex-col gap-8 items-center justify-center'>
                            <svg width="177" height="114" viewBox="0 0 177 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M90.8748 0.000648499C60.2691 0.000648499 35.4582 24.8115 35.4582 55.4173C35.4582 86.0231 60.2691 110.834 90.8748 110.834C121.481 110.834 146.292 86.0231 146.292 55.4173C146.292 24.8115 121.481 0.000648499 90.8748 0.000648499Z" fill="#CDF5FE" />
                                <path d="M109.232 41.1665H97.7524C95.7778 41.1582 93.8449 41.7546 92.1974 42.8806C90.5499 44.0066 89.2614 45.6119 88.4942 47.4942C87.7271 49.3765 87.5156 51.4515 87.8865 53.4579C88.2574 55.4642 89.1941 57.3122 90.5784 58.7688V63.4315C90.5783 63.7251 90.6624 64.0121 90.82 64.2562C90.9776 64.5004 91.2016 64.6907 91.4638 64.803C91.726 64.9154 92.0145 64.9448 92.2928 64.8875C92.5711 64.8302 92.8268 64.6887 93.0274 64.4811L95.7174 61.6983C96.3846 61.8597 97.0672 61.9433 97.7524 61.9477H109.232C110.559 61.9612 111.876 61.7024 113.106 61.1863C114.336 60.6701 115.455 59.9069 116.398 58.9407C117.341 57.9745 118.09 56.8245 118.601 55.5572C119.112 54.2898 119.375 52.9303 119.375 51.5571C119.375 50.1839 119.112 48.8244 118.601 47.557C118.09 46.2896 117.341 45.1396 116.398 44.1734C115.455 43.2073 114.336 42.444 113.106 41.9279C111.876 41.4118 110.559 41.153 109.232 41.1665ZM97.7524 53.0415C97.4687 53.0415 97.1914 52.9544 96.9555 52.7914C96.7196 52.6283 96.5358 52.3966 96.4272 52.1254C96.3186 51.8543 96.2902 51.5559 96.3456 51.2681C96.4009 50.9803 96.5375 50.7159 96.7381 50.5083C96.9387 50.3008 97.1943 50.1595 97.4726 50.1022C97.7508 50.045 98.0392 50.0744 98.3013 50.1867C98.5634 50.299 98.7875 50.4892 98.9451 50.7332C99.1027 50.9772 99.1868 51.2641 99.1868 51.5576C99.1866 51.9511 99.0354 52.3283 98.7664 52.6065C98.4975 52.8848 98.1328 53.0412 97.7524 53.0415ZM103.492 53.0415C103.208 53.0415 102.931 52.9544 102.695 52.7914C102.459 52.6283 102.275 52.3966 102.167 52.1254C102.058 51.8543 102.03 51.5559 102.085 51.2681C102.141 50.9803 102.277 50.7159 102.478 50.5083C102.678 50.3008 102.934 50.1595 103.212 50.1022C103.49 50.045 103.779 50.0744 104.041 50.1867C104.303 50.299 104.527 50.4892 104.685 50.7332C104.842 50.9772 104.926 51.2641 104.926 51.5576C104.926 51.9511 104.775 52.3283 104.506 52.6065C104.237 52.8848 103.872 53.0412 103.492 53.0415ZM109.232 53.0415C108.948 53.0415 108.671 52.9544 108.435 52.7914C108.199 52.6283 108.015 52.3966 107.906 52.1254C107.798 51.8543 107.769 51.5559 107.825 51.2681C107.88 50.9803 108.017 50.7159 108.217 50.5083C108.418 50.3008 108.673 50.1595 108.952 50.1022C109.23 50.045 109.518 50.0744 109.781 50.1867C110.043 50.299 110.267 50.4892 110.424 50.7332C110.582 50.9772 110.666 51.2641 110.666 51.5576C110.666 51.9511 110.515 52.3283 110.246 52.6065C109.977 52.8848 109.612 53.0412 109.232 53.0415Z" fill="#2CCFDB" />
                                <path d="M74.5517 80.7507H94.5313C95.6608 80.7493 96.7436 80.2798 97.5423 79.4451C98.341 78.6104 98.7902 77.4787 98.7915 76.2982V65.806H97.3698C97.0283 65.806 96.6878 65.7899 96.3425 65.7557L94.7015 67.4708C94.1057 68.0935 93.3466 68.5177 92.5201 68.6895C91.6937 68.8613 90.837 68.7732 90.0585 68.4361C89.28 68.0991 88.6146 67.5283 88.1465 66.7961C87.6784 66.0638 87.4285 65.2029 87.4286 64.3222V60.7836C85.5925 58.4291 84.5893 55.4851 84.5882 52.4477C84.591 48.9057 85.9385 45.5095 88.3349 43.0048C90.7312 40.5001 93.9807 39.0916 97.3698 39.0884H98.7896V34.5364C98.7883 33.3563 98.3393 32.2249 97.5411 31.3903C96.7428 30.5556 95.6604 30.0858 94.5313 30.084H74.5517C73.4222 30.0853 72.3394 30.5548 71.5407 31.3895C70.742 32.2242 70.2928 33.356 70.2915 34.5364V76.2942C70.2918 77.4753 70.7406 78.6081 71.5393 79.4437C72.3381 80.2792 73.4216 80.7493 74.5517 80.7507ZM84.5882 36.1157C84.869 36.1157 85.1435 36.2028 85.3769 36.3658C85.6104 36.5288 85.7924 36.7606 85.8998 37.0317C86.0073 37.3028 86.0354 37.6012 85.9806 37.889C85.9259 38.1768 85.7906 38.4412 85.5921 38.6488C85.3935 38.8563 85.1405 38.9976 84.8651 39.0548C84.5897 39.1121 84.3043 39.0827 84.0448 38.9704C83.7854 38.8581 83.5637 38.6679 83.4077 38.4239C83.2517 38.1799 83.1684 37.893 83.1684 37.5995C83.1684 37.206 83.318 36.8286 83.5842 36.5503C83.8505 36.2721 84.2116 36.1157 84.5882 36.1157ZM83.1684 71.7432H86.0089C86.3855 71.7432 86.7468 71.8996 87.0131 72.178C87.2795 72.4563 87.4291 72.8339 87.4291 73.2276C87.4291 73.6212 87.2795 73.9988 87.0131 74.2771C86.7468 74.5555 86.3855 74.7119 86.0089 74.7119H83.1684C82.7917 74.7119 82.4305 74.5555 82.1641 74.2771C81.8978 73.9988 81.7482 73.6212 81.7482 73.2276C81.7482 72.8339 81.8978 72.4563 82.1641 72.178C82.4305 71.8996 82.7917 71.7432 83.1684 71.7432Z" fill="#2CCFDB" />
                                <path opacity="0.485" d="M162.125 16.625C162.125 18.0342 162.543 19.4118 163.326 20.5835C164.109 21.7553 165.222 22.6685 166.524 23.2077C167.826 23.747 169.258 23.888 170.64 23.613C172.023 23.338 173.292 22.6593 174.288 21.6628C175.285 20.6662 175.963 19.3966 176.238 18.0144C176.513 16.6322 176.372 15.1996 175.832 13.8977C175.293 12.5958 174.38 11.4831 173.208 10.7003C172.036 9.91751 170.658 9.49981 169.249 9.5C167.365 9.51762 165.563 10.274 164.231 11.6064C162.898 12.9388 162.142 14.7409 162.125 16.625Z" fill="#E3D6F5" />
                                <path opacity="0.735" d="M0.625 89.4577C0.625 90.5537 0.950006 91.6251 1.55893 92.5365C2.16786 93.4478 3.03335 94.1581 4.04596 94.5775C5.05857 94.9969 6.17281 95.1067 7.24778 94.8929C8.32276 94.679 9.31021 94.1512 10.0852 93.3762C10.8602 92.6012 11.388 91.6138 11.6018 90.5388C11.8157 89.4638 11.7059 88.3496 11.2865 87.337C10.8671 86.3244 10.1568 85.4589 9.24545 84.85C8.33413 84.241 7.26271 83.916 6.16667 83.916C4.7014 83.9305 3.30023 84.5189 2.26408 85.5551C1.22792 86.5912 0.639437 87.9924 0.625 89.4577Z" fill="#E3D6F5" />
                                <path opacity="0.471" d="M157.375 110.041C157.375 110.824 157.607 111.59 158.042 112.241C158.476 112.892 159.095 113.399 159.818 113.699C160.541 113.999 161.337 114.077 162.105 113.925C162.873 113.772 163.578 113.395 164.132 112.842C164.686 112.288 165.063 111.583 165.216 110.815C165.368 110.047 165.29 109.251 164.99 108.528C164.691 107.804 164.184 107.186 163.533 106.751C162.882 106.316 162.116 106.084 161.333 106.084C160.287 106.093 159.285 106.513 158.545 107.253C157.805 107.993 157.385 108.994 157.375 110.041Z" fill="#CDF5FE" />
                            </svg>

                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h1 className=" text-[24px] leading-[110%] tracking-[-4.5%]">
                                    رمز التحقق
                                </h1>
                                <h1 className="text-[#999999] text-[12px] leading-[110%] tracking-[-4.5%]">
                                    لقد ارسلنا لك رمز التحقق على رقم هاتفك المحمول
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-8 mb-6">
                        <input id='one' onChange={swapCursor} className="w-12 h-12 text-center border border-[#E6E6E6] rounded-[8px] shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input id='two' onChange={swapCursor} className="w-12 h-12 text-center border border-[#E6E6E6] rounded-[8px] shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input id='three' onChange={swapCursor} className="w-12 h-12 text-center border border-[#E6E6E6] rounded-[8px] shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input id='four' onChange={swapCursor} className="w-12 h-12 text-center border border-[#E6E6E6] rounded-[8px] shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                    </div>
                    <p className='text-[#00BCD4]'>إعادة إرسال رمز التحقق</p>

                </div>
                <button id='send' onclick={done} disabled={true} className=" bg-[#999999] rounded-[12px] text-[#FFFFFF] focus:ring-4 w-full focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    متابعة
                </button>


            </div>
        </Modal>
    );
};

export default OtpModal;