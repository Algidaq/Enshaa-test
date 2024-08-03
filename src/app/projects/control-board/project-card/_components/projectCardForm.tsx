import Image from "next/image";
import logo from "../../../../../../public/assets/logo.png"
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import SlidBarControlBoard from "@/components/SlideBarControlBorder";


export default function ProjectCardForm() {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-2 justify-start items-start bg-[#F9FAFB] container mx-auto w-full h-full">
            <SlidBarControlBoard active="project-card" />
                      <div className="flex flex-col gap-8 justify-start items-start p-[30px] w-full h-full">
                <p>مشروع فيلا 3 طابق</p>
                <div className="flex flex-col gap-2 bg-[#ffffff] p-[20px] px-[50px] py-[50px] rounded-[12px]">
                    <h3 className="mb-4 text-lg font-medium leading-none text-[#532494] dark:text-white">بطاقة المشروع</h3>
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 mb-4 sm:grid-cols-1 gap-8">
                        <div className="relative z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الاسم </label>
                            <input type="text" name="project_name" id="projectName" placeholder="نص توضيحي" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> المدة </label>
                            <input
                                placeholder="نص توضيحي" name="projectType" id="projectType" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">المالك </label>
                            <input
                                placeholder="نص توضيحي" name="category" id="companyType" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الادارة المكلفة</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الاستشاري</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">التكلفة التقديرية</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">اصحاب المصلحة</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الشركاء</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="flex lg:flex-row md:col-span-2 flex-col lg:col-span-3">
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">النطاق</label>
                                <Textarea
                                    placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                            </div>
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">إجراءت العمل</label>
                                <Textarea
                                    placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:col-span-2 flex-col lg:col-span-3">
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">الاهداف</label>
                                <Textarea
                                    placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                            </div>
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">أسباب الاستعانة بالاستشاري</label>
                                <Textarea
                                    placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] placeholder:text-subtitle resize-none text-gray-900 h-40 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                            </div>
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">مدير المشروع</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">تاريخ البطاقة</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                        <div className="relative inline-block z-0 px-2 w-full group">
                            <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">رقم النسخة</label>
                            <input
                                placeholder="نص توضيحي" name="sub_category" id="first_name" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-4 w-full">
                    <button type="submit" className="w-[250px] rounded-[12px] text-[#666666] bg-[#FFFFFF] border-[1px] border-[#E6E6E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#532494] dark:focus:ring-blue-800">
                        إلغاء
                    </button>
                    <button className="w-[250px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        حفظ
                    </button>
                </div>
            </div>
        </div>
    )
}