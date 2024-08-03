import { Icon, IconButton } from "@/components";
import React from "react";


export default function OtpVerficationPage() {
    return (
        <div className="linear-gradient bg-cyan-300 min-h-screen  flex flex-col justify-center items-center">
            <form className="bg-white  rounded-[24px] p-[48px] min-w-[523px] min-h-[525px] flex flex-col justify-start items-stretch gap-[40px]">
                <div className="flex flex-col justify-start items-center gap-[25px]">
                    <div className=" bg-cyan-100 rounded-full max-auto w-[110px] h-[110px] flex justify-center items-center">
                        <Icon className="ml-[10px]" icon="OtpPin" />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <h1 className=" text-[24px] leading-[110%] tracking-[-4.5%]">
                            رمز التحقق
                        </h1>
                        <h1 className="text-[#999999] text-[12px] leading-[110%] tracking-[-4.5%]">
                            لقد ارسلنا لك رمز التحقق على رقم هاتفك المحمول
                        </h1>
                    </div>
                    <div className="flex justify-center gap-8 mb-6">
                        <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                        <input className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                    </div>
                    <h1 className="text-[#999999] text-[12px] leading-[110%] tracking-[-4.5%]">
                        1:59
                    </h1>
                    <h1 className="text-[#00BCD4] text-[14px] leading-[110%] tracking-[-4.5%]">
                        إعادة إرسال رمز التحقق
                    </h1>
                    <button className="flex transition delay-150  justify-center items-center w-[100%] py-[22px] h-[64px] overflow-hidden rounded-[12px] border bg-stone-400 text-[18px] font-semibold leading-[110%] text-white tracking-[-0.45px]">
                        متابعة
                    </button>
                </div>



            </form>
        </div>
    );
}