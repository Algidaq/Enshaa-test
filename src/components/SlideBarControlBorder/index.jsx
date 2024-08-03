"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png"
import { act, useEffect } from "react";

export default function SlidBarControlBoard(active) {
    function changeStyleOfActiveDiv(divId) {
        const div = document.getElementById(divId);
        div.style.background = "#E3D6F5";
        const paragraph = div.getElementsByTagName("p")[0];
        paragraph.style.color = "#532494";
        const arrowSvg = div.getElementsByTagName("svg");
        for (var i = 0; i < arrowSvg.length; i++) {
            const pathes = arrowSvg[i].getElementsByTagName("path")
            for (var j = 0; j < pathes.length; j++) {
                pathes[j].setAttribute('stroke', '#532494');
            }
        }

    }
    useEffect(() => {
        changeStyleOfActiveDiv(active.active);
    }, []);
    return (
        <div className='flex lg:flex-col md:flex-col flex-row bg-[#FFFFFF] gap-[60px] items-center justify-center w-[30%] h-[100%] p-[20px]'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <Image src={logo} className="h-[65px] w-[70px]" alt="Logo" />
                <p className='text-[20px] text-[#02A5CA]'>لوحة التحكم</p>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center w-full h-full p-[20px]'>
                <div id="control-board" className='flex flex-row gap-2 p-[10px] justify-between items-center w-full '>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2 23.7245C21.48 23.7245 21.62 23.7245 21.727 23.6669C21.8211 23.6163 21.8976 23.5356 21.9455 23.4362C22 23.3233 22 23.1754 22 22.8797V11.8981C22 11.6024 22 11.4546 21.9455 11.3416C21.8976 11.2423 21.8211 11.1615 21.727 11.1109C21.62 11.0534 21.48 11.0534 21.2 11.0534L18.8 11.0534C18.52 11.0534 18.38 11.0534 18.273 11.1109C18.1789 11.1615 18.1024 11.2423 18.0545 11.3416C18 11.4546 18 11.6024 18 11.8981V14.4323C18 14.728 18 14.8759 17.9455 14.9888C17.8976 15.0881 17.8211 15.1689 17.727 15.2195C17.62 15.2771 17.48 15.2771 17.2 15.2771H14.8C14.52 15.2771 14.38 15.2771 14.273 15.3346C14.1789 15.3852 14.1024 15.466 14.0545 15.5653C14 15.6783 14 15.8261 14 16.1218V18.656C14 18.9517 14 19.0996 13.9455 19.2125C13.8976 19.3119 13.8211 19.3926 13.727 19.4432C13.62 19.5008 13.48 19.5008 13.2 19.5008H10.8C10.52 19.5008 10.38 19.5008 10.273 19.5583C10.1789 19.6089 10.1024 19.6897 10.0545 19.7891C10 19.902 10 20.0498 10 20.3455V22.8797C10 23.1754 10 23.3233 10.0545 23.4362C10.1024 23.5356 10.1789 23.6163 10.273 23.6669C10.38 23.7245 10.52 23.7245 10.8 23.7245L21.2 23.7245Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 7.6744C10 7.37872 10 7.23087 10.0545 7.11794C10.1024 7.01859 10.1789 6.93783 10.273 6.88721C10.38 6.82966 10.52 6.82966 10.8 6.82966H13.2C13.48 6.82966 13.62 6.82966 13.727 6.88721C13.8211 6.93783 13.8976 7.01859 13.9455 7.11794C14 7.23087 14 7.37872 14 7.6744V10.2086C14 10.5043 14 10.6522 13.9455 10.7651C13.8976 10.8644 13.8211 10.9452 13.727 10.9958C13.62 11.0534 13.48 11.0534 13.2 11.0534H10.8C10.52 11.0534 10.38 11.0534 10.273 10.9958C10.1789 10.9452 10.1024 10.8644 10.0545 10.7651C10 10.6522 10 10.5043 10 10.2086V7.6744Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 14.01C3 13.7143 3 13.5664 3.0545 13.4535C3.10243 13.3542 3.17892 13.2734 3.273 13.2228C3.37996 13.1652 3.51997 13.1652 3.8 13.1652H6.2C6.48003 13.1652 6.62004 13.1652 6.727 13.2228C6.82108 13.2734 6.89757 13.3542 6.9455 13.4535C7 13.5664 7 13.7143 7 14.01V16.5442C7 16.8399 7 16.9877 6.9455 17.1007C6.89757 17.2 6.82108 17.2808 6.727 17.3314C6.62004 17.3889 6.48003 17.3889 6.2 17.3889H3.8C3.51997 17.3889 3.37996 17.3889 3.273 17.3314C3.17892 17.2808 3.10243 17.2 3.0545 17.1007C3 16.9877 3 16.8399 3 16.5442V14.01Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 3.4507C2 3.15501 2 3.00717 2.0545 2.89423C2.10243 2.79489 2.17892 2.71412 2.273 2.6635C2.37996 2.60596 2.51997 2.60596 2.8 2.60596H5.2C5.48003 2.60596 5.62004 2.60596 5.727 2.6635C5.82108 2.71412 5.89757 2.79489 5.9455 2.89423C6 3.00717 6 3.15501 6 3.4507V5.98492C6 6.28061 6 6.42845 5.9455 6.54139C5.89757 6.64073 5.82108 6.7215 5.727 6.77212C5.62004 6.82966 5.48003 6.82966 5.2 6.82966H2.8C2.51997 6.82966 2.37996 6.82966 2.273 6.77212C2.17892 6.7215 2.10243 6.64073 2.0545 6.54139C2 6.42845 2 6.28061 2 5.98492V3.4507Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-[#999999] text-[12px]'>لوحة التحكم</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Link href={"/projects/control-board/project-card"} className="w-full">
                    <div id="project-card" className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 12.4516H8M10 16.6753H8M16 8.22787H8M20 8.01669V18.9983C20 20.7724 20 21.6595 19.673 22.3371C19.3854 22.9332 18.9265 23.4178 18.362 23.7215C17.7202 24.0668 16.8802 24.0668 15.2 24.0668H8.8C7.11984 24.0668 6.27976 24.0668 5.63803 23.7215C5.07354 23.4178 4.6146 22.9332 4.32698 22.3371C4 21.6595 4 20.7724 4 18.9983V8.01669C4 6.24257 4 5.35551 4.32698 4.67788C4.6146 4.08182 5.07354 3.59722 5.63803 3.29351C6.27976 2.94824 7.11984 2.94824 8.8 2.94824H15.2C16.8802 2.94824 17.7202 2.94824 18.362 3.29351C18.9265 3.59722 19.3854 4.08182 19.673 4.67788C20 5.35551 20 6.24257 20 8.01669Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999999] text-[12px]">بطاقة المشروع</p>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <Link href={"/projects/control-board/time-sheet"} className="w-full">
                    <div id="time-sheet" className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 22.3534H4.6C4.03995 22.3534 3.75992 22.3534 3.54601 22.2383C3.35785 22.137 3.20487 21.9755 3.10899 21.7768C3 21.5509 3 21.2552 3 20.6639V3.34668M20 8.62631L16.0811 13.0429C15.9326 13.2103 15.8584 13.294 15.7688 13.3372C15.6897 13.3754 15.6026 13.3911 15.516 13.3829C15.4179 13.3736 15.3215 13.3207 15.1287 13.215L11.8713 11.4291C11.6785 11.3234 11.5821 11.2705 11.484 11.2612C11.3974 11.253 11.3103 11.2687 11.2312 11.3069C11.1416 11.3501 11.0674 11.4338 10.9189 11.6012L7 16.0178" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-[#999999] text-[12px]">المخطط الزمني</p>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>

                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18.4719C12 21.3878 14.2386 23.7516 17 23.7516C19.7614 23.7516 22 21.3878 22 18.4719C22 15.5561 19.7614 13.1923 17 13.1923C14.2386 13.1923 12 15.5561 12 18.4719ZM12 18.4719C12 17.2831 12.3721 16.1861 13 15.3036V5.80082M12 18.4719C12 19.3434 12.2 20.1656 12.5541 20.8901C11.7117 21.6416 9.76584 22.1677 7.5 22.1677C4.46243 22.1677 2 21.2222 2 20.0558V5.80082M13 5.80082C13 6.96716 10.5376 7.91267 7.5 7.91267C4.46243 7.91267 2 6.96716 2 5.80082M13 5.80082C13 4.63447 10.5376 3.68896 7.5 3.68896C4.46243 3.68896 2 4.63447 2 5.80082M2 15.3042C2 16.4705 4.46243 17.416 7.5 17.416C9.689 17.416 11.5793 16.925 12.4646 16.2141M13 10.5525C13 11.7188 10.5376 12.6643 7.5 12.6643C4.46243 12.6643 2 11.7188 2 10.5525" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className="text-[#999999] text-[12px]">مشتريات المشروع</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Link href={"/projects/control-board/stages-and-activities"} className="w-full">
                    <div id="stages-activities" className='flex flex-row gap-2 p-[10px] justify-between items-center w-full '>
                        <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.18734 12.4787H4.40817C3.87145 12.4787 3.6031 12.4787 3.3981 12.5938C3.21777 12.695 3.07117 12.8565 2.97929 13.0552C2.87484 13.2811 2.87484 13.5768 2.87484 14.1681V23.0379M15.8123 12.4787H18.5915C19.1282 12.4787 19.3966 12.4787 19.6016 12.5938C19.7819 12.695 19.9285 12.8565 20.0204 13.0552C20.1248 13.2811 20.1248 13.5768 20.1248 14.1681V23.0379M15.8123 23.0379V7.41022C15.8123 6.22747 15.8123 5.63609 15.6034 5.18434C15.4197 4.78697 15.1265 4.4639 14.7658 4.26143C14.3558 4.03125 13.8191 4.03125 12.7457 4.03125H10.254C9.18057 4.03125 8.64385 4.03125 8.23386 4.26143C7.87321 4.4639 7.58 4.78697 7.39624 5.18434C7.18734 5.63609 7.18734 6.22747 7.18734 7.41021V23.0379M21.0832 23.0379H1.9165M10.5415 8.25496H12.4582M10.5415 12.4787H12.4582M10.5415 16.7024H12.4582" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999999] text-[12px]">المراحل و الانشطة</p>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2.6015V6.96305C14 7.55442 14 7.85011 14.109 8.07598C14.2049 8.27467 14.3578 8.4362 14.546 8.53744C14.7599 8.65253 15.0399 8.65253 15.6 8.65253H19.7305M14 18.1558H8M16 13.9321H8M20 10.7519V18.367C20 20.1411 20 21.0282 19.673 21.7058C19.3854 22.3018 18.9265 22.7865 18.362 23.0902C17.7202 23.4354 16.8802 23.4354 15.2 23.4354H8.8C7.11984 23.4354 6.27976 23.4354 5.63803 23.0902C5.07354 22.7865 4.6146 22.3018 4.32698 21.7058C4 21.0282 4 20.1411 4 18.367V7.38534C4 5.61122 4 4.72416 4.32698 4.04653C4.6146 3.45048 5.07354 2.96587 5.63803 2.66216C6.27976 2.31689 7.11984 2.31689 8.8 2.31689H12.0118C12.7455 2.31689 13.1124 2.31689 13.4577 2.40442C13.7638 2.48202 14.0564 2.61001 14.3249 2.7837C14.6276 2.9796 14.887 3.25354 15.4059 3.80141L18.5941 7.16794C19.113 7.71581 19.3724 7.98975 19.5579 8.30943C19.7224 8.59286 19.8436 8.90186 19.9171 9.22509C20 9.58966 20 9.97706 20 10.7519Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">سجل المسوؤليات</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2.94378V7.30533C14 7.89671 14 8.19239 14.109 8.41827C14.2049 8.61695 14.3578 8.77849 14.546 8.87972C14.7599 8.99481 15.0399 8.99481 15.6 8.99481H19.7305M16 14.2744H8M16 18.4981H8M10 10.0507H8M14 2.65918H8.8C7.11984 2.65918 6.27976 2.65918 5.63803 3.00445C5.07354 3.30815 4.6146 3.79276 4.32698 4.38882C4 5.06644 4 5.9535 4 7.72763V18.7093C4 20.4834 4 21.3704 4.32698 22.0481C4.6146 22.6441 5.07354 23.1287 5.63803 23.4324C6.27976 23.7777 7.11984 23.7777 8.8 23.7777H15.2C16.8802 23.7777 17.7202 23.7777 18.362 23.4324C18.9265 23.1287 19.3854 22.6441 19.673 22.0481C20 21.3704 20 20.4834 20 18.7093V8.99474L14 2.65918Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">سجل المشاكل</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.28607V5.64762C11 6.23899 11 6.53468 11.109 6.76055C11.2049 6.95924 11.3578 7.12077 11.546 7.22201C11.7599 7.3371 12.0399 7.3371 12.6 7.3371H16.7305M13 12.6167H5M13 16.8404H5M7 8.39295H5M11 1.00146H5.8C4.11984 1.00146 3.27976 1.00146 2.63803 1.34673C2.07354 1.65044 1.6146 2.13505 1.32698 2.7311C1 3.40873 1 4.29579 1 6.06991V17.0515C1 18.8257 1 19.7127 1.32698 20.3904C1.6146 20.9864 2.07354 21.471 2.63803 21.7747C3.27976 22.12 4.11984 22.12 5.8 22.12H12.2C13.8802 22.12 14.7202 22.12 15.362 21.7747C15.9265 21.471 16.3854 20.9864 16.673 20.3904C17 19.7127 17 18.8257 17 17.0515V7.33702L11 1.00146Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">سجل المخاطر</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Link href={"/projects/control-board/lessons-learned"} className="w-full">
                    <div id="lessons-learned" className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 13.431V7.4122C20 5.63807 20 4.75101 19.673 4.07339C19.3854 3.47733 18.9265 2.99272 18.362 2.68902C17.7202 2.34375 16.8802 2.34375 15.2 2.34375H8.8C7.11984 2.34375 6.27976 2.34375 5.63803 2.68902C5.07354 2.99272 4.6146 3.47733 4.32698 4.07339C4 4.75101 4 5.63807 4 7.4122V18.3938C4 20.168 4 21.055 4.32698 21.7326C4.6146 22.3287 5.07354 22.8133 5.63803 23.117C6.27976 23.4623 7.11984 23.4623 8.8 23.4623H12M14 11.8471H8M10 16.0708H8M16 7.62338H8M14.5 20.2945L16.5 22.4064L21 17.6547" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999999] text-[12px]">الدروس المستفاده</p>
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10.0777L21 10.0777M9 3.74219L9 22.7489M7.8 3.74219H16.2C17.8802 3.74219 18.7202 3.74219 19.362 4.08745C19.9265 4.39116 20.3854 4.87577 20.673 5.47183C21 6.14945 21 7.03651 21 8.81064V17.6804C21 19.4545 21 20.3416 20.673 21.0192C20.3854 21.6153 19.9265 22.0999 19.362 22.4036C18.7202 22.7489 17.8802 22.7489 16.2 22.7489H7.8C6.11984 22.7489 5.27976 22.7489 4.63803 22.4036C4.07354 22.0999 3.6146 21.6153 3.32698 21.0192C3 20.3416 3 19.4545 3 17.6804V8.81063C3 7.03651 3 6.14945 3.32698 5.47183C3.6146 4.87577 4.07354 4.39116 4.63803 4.08745C5.27976 3.74219 6.11984 3.74219 7.8 3.74219Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">جدول الفواتير</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10.42L21 10.42M9 4.08447L9 23.0912M7.8 4.08447H16.2C17.8802 4.08447 18.7202 4.08447 19.362 4.42974C19.9265 4.73345 20.3854 5.21805 20.673 5.81411C21 6.49174 21 7.3788 21 9.15292V18.0227C21 19.7968 21 20.6839 20.673 21.3615C20.3854 21.9576 19.9265 22.4422 19.362 22.7459C18.7202 23.0912 17.8802 23.0912 16.2 23.0912H7.8C6.11984 23.0912 5.27976 23.0912 4.63803 22.7459C4.07354 22.4422 3.6146 21.9576 3.32698 21.3615C3 20.6839 3 19.7968 3 18.0227V9.15292C3 7.3788 3 6.49174 3.32698 5.81411C3.6146 5.21805 4.07354 4.73345 4.63803 4.42974C5.27976 4.08447 6.11984 4.08447 7.8 4.08447Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">جدول التوريدات</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex flex-row gap-2 p-[10px] justify-between items- w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5295 9.0777C12.9571 9.50861 12.2566 9.76209 11.5 9.76209C9.567 9.76209 8 8.10745 8 6.06635C8 4.02525 9.567 2.37061 11.5 2.37061C12.753 2.37061 13.8522 3.06585 14.4705 4.11092M6 21.4693H8.61029C8.95063 21.4693 9.28888 21.5121 9.61881 21.5976L12.3769 22.3053C12.9753 22.4593 13.5988 22.4742 14.2035 22.3502L17.253 21.7237C18.0585 21.558 18.7996 21.1507 19.3803 20.5542L21.5379 18.338C22.154 17.7062 22.154 16.681 21.5379 16.0481C20.9832 15.4783 20.1047 15.4141 19.4771 15.8974L16.9626 17.8345C16.6025 18.1125 16.1643 18.2621 15.7137 18.2621H13.2855L14.8311 18.262C15.7022 18.262 16.4079 17.5372 16.4079 16.6424V16.3185C16.4079 15.5755 15.9156 14.9276 15.2141 14.748L12.8286 14.1355C12.4404 14.036 12.0428 13.9858 11.6431 13.9858C10.6783 13.9858 8.93189 14.8293 8.93189 14.8293L6 16.1239M20 7.12227C20 9.16338 18.433 10.818 16.5 10.818C14.567 10.818 13 9.16338 13 7.12227C13 5.08117 14.567 3.42653 16.5 3.42653C18.433 3.42653 20 5.08117 20 7.12227ZM2 15.6753L2 21.7997C2 22.391 2 22.6867 2.10899 22.9126C2.20487 23.1113 2.35785 23.2728 2.54601 23.374C2.75992 23.4891 3.03995 23.4891 3.6 23.4891H4.4C4.96005 23.4891 5.24008 23.4891 5.45399 23.374C5.64215 23.2728 5.79513 23.1113 5.89101 22.9126C6 22.6867 6 22.391 6 21.7997V15.6753C6 15.0839 6 14.7882 5.89101 14.5623C5.79513 14.3637 5.64215 14.2021 5.45399 14.1009C5.24008 13.9858 4.96005 13.9858 4.4 13.9858L3.6 13.9858C3.03995 13.9858 2.75992 13.9858 2.54601 14.1009C2.35785 14.2021 2.20487 14.3637 2.10899 14.5623C2 14.7882 2 15.0839 2 15.6753Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">جدول الدفعات</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='flex flex-row gap-2 p-[10px] justify-between items-center w-full'>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9.04864L15 9.04864M15 9.04864C15 10.7982 16.3431 12.2164 18 12.2164C19.6569 12.2164 21 10.7982 21 9.04864C21 7.29912 19.6569 5.88086 18 5.88086C16.3431 5.88086 15 7.29912 15 9.04864ZM9 17.4961L21 17.4961M9 17.4961C9 19.2456 7.65685 20.6638 6 20.6638C4.34315 20.6638 3 19.2456 3 17.4961C3 15.7465 4.34315 14.3283 6 14.3283C7.65685 14.3283 9 15.7465 9 17.4961Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="text-[#999999] text-[12px]">الاعدادات</p>
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5007L9 13.1651L15 6.82959" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )

}