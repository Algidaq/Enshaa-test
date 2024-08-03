"use client"
import Quotation from "@/service/qutation";
import { format, toZonedTime } from 'date-fns-tz';
import { ar } from 'date-fns/locale'; 

export default function QutationsDetails({ qutation }:{ qutation : Quotation}) {
     function formatDateTime(dateTimeString:string){
        // Convert UTC date string to zoned date (for timezone handling)
        const zonedDate = toZonedTime(dateTimeString, 'Asia/Riyadh'); // Adjust timezone as per your requirements
        
        // Format the zoned date
        const formattedDate = format(zonedDate, "dd MMMM, yyyy - hh:mm a", { locale: ar });
        
        return formattedDate;
      };
      
    return (
        <div>
            <div className="container max-auto flex flex-col justify-end items-center pt-[20px] pl-[70px] pr-[70px] mb-[40] bg-[#ffffff] gap-4" >
                <div className="flex flex-row items-center justify-between w-full p-[30px] pb-[20px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-full ">
                        <svg width="16" height="16" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.995 19H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.995 10H14.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.995 12H14.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.995 8H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.995 6H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.995 14H13.425" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>رقم طلب عروض الأسعار {qutation.id}</p>
                    </div>
                    <div className="flex flex-row items-center justify-end w-full">
                        <p>تم الإنشاء في</p>
                        <p>{formatDateTime(qutation.createdAt)}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 p-[80px] pt-[80] w-[800px]">
                    <svg width="100" height="100" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="64.5" cy="64" r="64" fill="#F5F5F5" />
                        <path d="M69.8434 61.334H53.8434M59.1768 72.0007H53.8434M75.1768 50.6673H53.8434M85.8434 50.134V77.8673C85.8434 82.3477 85.8434 84.5879 84.9715 86.2992C84.2045 87.8045 82.9806 89.0284 81.4753 89.7954C79.7641 90.6673 77.5238 90.6673 73.0434 90.6673H55.9768C51.4963 90.6673 49.2561 90.6673 47.5448 89.7954C46.0395 89.0284 44.8157 87.8045 44.0487 86.2992C43.1768 84.5879 43.1768 82.3477 43.1768 77.8673V50.134C43.1768 45.6536 43.1768 43.4134 44.0487 41.7021C44.8157 40.1968 46.0395 38.9729 47.5448 38.2059C49.2561 37.334 51.4963 37.334 55.9768 37.334H73.0434C77.5238 37.334 79.7641 37.334 81.4753 38.2059C82.9806 38.9729 84.2045 40.1968 84.9715 41.7021C85.8434 43.4134 85.8434 45.6536 85.8434 50.134Z" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#1A1A1A] text-[18px]">لم يتم ارسال العرض بعد ، ستقوم الادارة بارسال العرض في اقرب فرصة</p>
                    <p className="text-[#4D4D4D] text-[16px] text-center">قد نجحت في طلب عرض تسعير رقم # 70-5779-6816 سوف تتلقى عرض أسعار خلال الـ 30-45 دقيقة القادمة. في حال كان لديك أية استفسارات لا تتردد في التواصل معنا عبر البريد الالكتروني</p>
                </div>
            </div>
        </div>
    )
}