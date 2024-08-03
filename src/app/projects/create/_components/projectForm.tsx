"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChangeEvent, useEffect, useState } from "react";
import { z } from "zod";
import DatepickerModal from "../_components/modalDatepiker"
import DoneModal from "../_components/modalDone"
import "../_style/DatepikerModal.css"
import "../_style/DoneModal.css"
import styled from "styled-components"
import { apiCreateProject } from "@/service";
import ErrorModal from "@/components/ErrorModal"
import { isObject } from "util";


interface CircleProps {
    checked: boolean;
}
const Circle = styled.div<CircleProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px double #000;
    merging: 6px;
    background-color: ${props => (props.checked ? '#532494' : 'transparent')};
    cursor: pointer`;
export default function ProjectForm() {
    const [projectType, setProjectType] = useState('');
    const [buildingArea, setBuildingArea] = useState('');
    const [landArea, setLandArea] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [formData, setFormData] = useState({
        name: '',
        type: projectType === "بناء" ? "build" : "repair",
        category: getCategory(buildingArea),
        sub_category: getSubCategory(landArea),
        building_area: '',
        land_area: '',
        floors: '',
        project_owner: '',
        project_manager: '',
        expected_start_date: selectedDate,
    });

    const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
    const [doneModalIsOpen, setDoneModalIsOpen] = useState(false);
    const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
    const openDateModal = () => {
        setDateModalIsOpen(true);
    };

    const closeDateModal = (date: Date) => {
        if (date) {
            setSelectedDate(date);
        }
        setDateModalIsOpen(false);
    };
    const openDoneModal = () => {
        setDoneModalIsOpen(true);
    };

    const closeDoneModal = () => {
        setDoneModalIsOpen(false);
    };
    const openErrorModal = () => {
        setErrorModalIsOpen(true);
    };

    const closeErrorModal = () => {
        setErrorModalIsOpen(false);
    };

    const formatDate = (date: Date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    function updateProjectTypeDropdown(option: string) {
        setProjectType(option);
    };
    function updateOrginizeTypeDropdown(option: string) {
        setBuildingArea(option);
    };
    function updateConstructTypeDropdown(option: string) {
        setLandArea(option);
    };
    const handleOptionSelect = (option: string, dropName: string) => {
        switch (dropName) {
            case 'type':
                updateProjectTypeDropdown(option)
                break;
            case 'orType':
                updateOrginizeTypeDropdown(option)
                break;
            case 'coType':
                updateConstructTypeDropdown(option)
                break;
            default:
                break;
        }
        setSelectedOption(option === selectedOption ? null : option);

    };
    const [data, setData] = useState<string>();

    const fetchData = async (dataSended: any) => {
        try {
            const data = await apiCreateProject(dataSended);
            setData(data);
            //console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleSubmit = async (e: any) => {
        var form = document.getElementById("myForm");
        function handleForm(event: any) { event.preventDefault(); }
        form?.addEventListener('submit', handleForm);
        if (notEmpty()) {
            e.preventDefault();
            try {
                formData.category = getCategory(buildingArea);
                formData.sub_category = getSubCategory(landArea);
                formData.expected_start_date = selectedDate;
                const response = await apiCreateProject(formData);
                console.log('created successfully:', response);
                console.log(response)

                openDoneModal()

            } catch (error) {
                console.error('Error creating data:', error);
                openErrorModal()
            }
        }


    };

    function validation(e: ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        var inputName = e.target.name;
        var value = e.target.value;
        var sendButton = document.getElementById("createButton");
        switch (inputName) {
            case "name":
                let nameError = document.getElementById("name-error");
                if (value.trim() === "" || value.length === 0) {
                    nameError ? nameError.innerHTML = "الرجاء إدخال اسم المشروع" : ""
                    break
                }
                nameError ? nameError.innerHTML = "" : ""
                break;
            case "projectType":
                setProjectType(value)
                let typeError = document.getElementById("type-error");
                if (value.trim() === "" || value.length === 0) {
                    typeError ? typeError.innerHTML = "الرجاء إختيار نوع المشروع" : ""
                    break;
                }
                typeError ? typeError.innerHTML = "" : ""
                break;
            case "category":
                setBuildingArea(value)
                let categoryError = document.getElementById("category-error");
                if (value.trim() === "" || value.length === 0) {
                    categoryError ? categoryError.innerHTML = "الرجاء إختيار فئة المشروع" : ""
                    break;
                }
                categoryError ? categoryError.innerHTML = "" : ""
                break;
            case "sub_category":
                var numberRegex = /^\d+$/;
                setLandArea(value)
                let subError = document.getElementById("sub-error");
                if (value.trim() === "" || value.length === 0) {
                    subError ? subError.innerHTML = "الرجاء إختيار الفئة الفرعية للمشروع" : ""
                    break;
                }
                subError ? subError.innerHTML = "" : ""
                break;
            case "building_area":
                var numberRegex = /^\d+$/;
                let buildError = document.getElementById("buildAreaError");
                if (value.trim() === "" || value.length === 0 || !numberRegex.test(value)) {
                    buildError ? buildError.innerHTML = "الرجاء ادخال المساحة بالطريقة الصحيحة" : ""
                    break;
                }
                buildError ? buildError.innerHTML = "" : ""
                break;
            case "land_area":
                var numberRegex = /^\d+$/;
                let landError = document.getElementById("landAreaError");
                if (value.trim() === "" || value.length === 0 || !numberRegex.test(value)) {
                    landError ? landError.innerHTML = "الرجاء ادخال المساحة بالطريقة الصحيحة" : ""
                    break;
                }
                landError ? landError.innerHTML = "" : ""
                break;
            case "floors":
                var numberRegex = /^\d+$/;
                let floorsError = document.getElementById("floorsError");
                if (value.trim() === "" || value.length === 0 || !numberRegex.test(value)) {
                    floorsError ? floorsError.innerHTML = "الرجاء ادخال عدد الطوابق بالطريقة الصحيحة" : ""
                    break;
                }
                floorsError ? floorsError.innerHTML = "" : ""
                break;
            case "project_owner":
                let ownerError = document.getElementById("ownerError");
                if (value.trim() === "" || value.length === 0) {
                    ownerError ? ownerError.innerHTML = "الرجاء ادخال الجهة المالكة" : ""
                    break;
                }
                ownerError ? ownerError.innerHTML = "" : ""
                break;
            case "project_manager":
                let managerError = document.getElementById("managerError");
                if (value.trim() === "" || value.length === 0) {
                    managerError ? managerError.innerHTML = "الرجاء ادخال مدير المشروع" : ""
                    break;
                }
                managerError ? managerError.innerHTML = "" : ""
                break;
            case "start_date":
                let dateError = document.getElementById("dateError");
                if (value.trim() === "" || value.length === 0) {
                    dateError ? dateError.innerHTML = "الرجاء ادخال التاريخ" : ""
                    break;
                }
                dateError ? dateError.innerHTML = "" : ""
                break;
            default:
                break;
        }
    }



    function getCategory(category: string) {
        switch (category) {
            case "سكني":
                return "residential"
            case "تجاري":
                return "commercial"
            case "صناعي":
                return "industrial"
            case "بنية تحتية":
                return "infrastructure"
            case "زراعي":
                return "agricultural"
            case "منشات خدمية":
                return "service_facility"
        }
    }
    function getSubCategory(subCategory: string) {
        switch (subCategory) {
            case "فيلا":

                return "villa";
            case "عمارة":

                return "residential_building";
            case "شقة":

                return "apartment";
            case "شاليه":

                return "chalet";

        }
    }
    function notEmpty() {
        console.log("in not empty")
        var inputs = document.getElementsByTagName("input");
        console.log(inputs)
        var error = false;
        var idLable = "";
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            console.log(input.value)
            if (empty(input.value)) {
                idLable = getIdLableError(input.id);
                error = true;
                break;
            }
            var lable = document.getElementById(getIdLableError(input.id))
            if (lable) {
                lable.innerHTML = "";
            }
        }
        if (error) {
            var lable = document.getElementById(idLable)
            console.log(idLable)
            if (lable) {
                lable.innerHTML = "الرجاء الادخال اولا";
            }
            return false;
        }

        return true;
    }

    function empty(param: string | null) {
        console.log("in empty")
        console.log(param)
        if (param) {
            if (param.length === 0 || param.trim() === "") {
                return true
            }
            return false;
        }

        return true;
    }
    function getIdLableError(id: string | undefined) {
        switch (id) {
            case "projectName":
                return "name-error"
            case "projectType":
                return "type-error"
            case "category":
                return "category-error"
            case "sub":
                return "sub-error"
            case "buildArea":
                return "buildAreaError"
            case "landArea":
                return "landAreaError"
            case "numberOfDors":
                return "floorsError"
            case "ownerName":
                return "ownerError"
            case "managerName":
                return "managerError"
            case "dateStart":
                return "dateError"
            default:
                return "";

        }
    }

    return (
        <div className="container max-auto mt-[40px]  bg-[#F9FAFB] w-full">
            <div className="flex justify-start pr-[120px] pl-[100px]">
                <form id="myForm" className=" p-[20px] bg-[#F9FAFB] mt-[40px] w-[1140px] flex flex-col  gap-[64px]">
                    <div className="flex flex-col gap-2 bg-[#ffffff] p-[20px] px-[50px] py-[50px] rounded-[12px]">
                        <h3 className="mb-4 text-lg font-medium leading-none text-[#532494] dark:text-white">تفاصيل المشروع جديد</h3>
                        <div className="grid lg:grid-cols-3 gap-4 mb-4 sm:grid-cols-2 gap-8">
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الاسم </label>
                                <input type="text" onChange={validation} name="name" id="projectName" placeholder="إسم المشروع" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                />
                                <label id="name-error" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                            </div>
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> النوع </label>
                                <input value={projectType} readOnly
                                    onChange={(e) => validation(e)} placeholder="نوع المشروع" name="projectType" id="projectType" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                                <label id="type-error" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <svg aria-hidden="true" width="10" className="absolute top-[44px] left-[20px]" height="10" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6406 1.5L7.64062 7.5L1.64062 1.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full ml-[100px] mt-[14px] bg-[#FFFFFF]">

                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("بناء", "type") }}>
                                            <Circle checked={selectedOption === 'بناء'} />

                                            <span>بناء</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("ترميم", "type") }}>
                                            <Circle checked={selectedOption === 'ترميم'} />
                                            <span>ترميم</span>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> نوع المنشأة </label>
                                <input value={buildingArea} readOnly
                                    onChange={(e) => validation(e)} placeholder="خيارات" name="category" id="category" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                                <label id="category-error" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <svg aria-hidden="true" width="10" className="absolute top-[44px] left-[20px]" height="10" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6406 1.5L7.64062 7.5L1.64062 1.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full ml-[100px] mt-[14px] bg-[#FFFFFF]">
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("سكني", "orType") }}>
                                            <Circle checked={selectedOption === 'سكني'} />

                                            <span>سكني</span>
                                        </div>
                                        <DropdownMenuSeparator />

                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("منشات خدمية", "orType") }}>
                                            <Circle checked={selectedOption === 'منشات خدمية'} />
                                            <span>منشات خدمية</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("تجاري", "orType") }}>
                                            <Circle checked={selectedOption === 'تجاري'} />
                                            <span>تجاري</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("صناعي", "orType") }}>
                                            <Circle checked={selectedOption === 'صناعي'} />
                                            <span>صناعي</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("بنية تحتية", "orType") }}>
                                            <Circle checked={selectedOption === 'بنية تحتية'} />
                                            <span>بنية تحتية</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("زراعي", "orType") }}>
                                            <Circle checked={selectedOption === 'زراعي'} />
                                            <span>زراعي</span>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                            <div className="relative inline-block z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> نوع البناء </label>
                                <input value={landArea} readOnly
                                    onChange={(e) => validation(e)} placeholder="خيارات" name="sub_category" id="sub" className="pr-[20px] text-gray-900 h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-sm focus:ring-blue-600 focus:border-blue-600 block w-full"
                                />
                                <label id="sub-error" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <svg aria-hidden="true" width="10" className="absolute top-[44px] left-[20px]" height="10" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6406 1.5L7.64062 7.5L1.64062 1.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full ml-[100px] mt-[14px] bg-[#FFFFFF]">
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("فيلا", "coType") }}>
                                            <Circle checked={selectedOption === 'فيلا'} />
                                            <span>فيلا</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("عمارة", "coType") }}>
                                            <Circle checked={selectedOption === 'عمارة'} />
                                            <span>عمارة</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("شقة", "coType") }}>
                                            <Circle checked={selectedOption === 'شقة'} />
                                            <span>شقة</span>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <div className="flex items-center gap-2 justify-between ml-[10px] mr-[10px]" onClick={() => { handleOptionSelect("شاليه", "coType") }}>
                                            <Circle checked={selectedOption === 'شاليه'} />
                                            <span>شاليه</span>
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#ffffff] p-[20px] px-[50px] py-[50px] rounded-[12px]">
                        <h3 className="mb-4 text-lg font-medium leading-none text-[#532494] dark:text-white">المساحات</h3>
                        <div className="grid lg:grid-cols-3 gap-4 mb-4 sm:grid-cols-2 gap-8">
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> مساحة المبنى </label>
                                <input type="text" onChange={validation} placeholder="أدخل المساحة بالمتر المربع" name="building_area" id="buildArea" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <label id="buildAreaError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                            </div>
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> مساحة الارض </label>
                                <input type="text" onChange={validation} placeholder="أدخل المساحة بالمتر المربع" name="land_area" id="landArea" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <label id="landAreaError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>

                            </div>
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">عدد الطوابق</label>
                                <input type="text" onChange={validation} placeholder="أدخل عدد الطوابق" name="floors" id="numberOfDors" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <label id="floorsError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>

                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 bg-[#ffffff] p-[20px] px-[50px] py-[50px] rounded-[12px]">
                        <div className=" flex flex-row items-center justify-between">
                            <h3 className="mb-4 text-lg font-medium leading-none text-[#532494] dark:text-white">الجهة المالكة</h3>
                            <h3 className="mb-4 text-lg font-medium leading-none text-[#532494] dark:text-white ml-[100px]">الموعد المتوقع للبدء</h3>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-4 mb-4 sm:grid-cols-2 gap-8">
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> الجهة المالكة </label>
                                <input type="text" onChange={validation} name="project_owner" id="ownerName" placeholder="أسم الجهة المالكة" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <label id="ownerError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                            </div>
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  "> مدير المشروع </label>
                                <input type="text" onChange={validation} name="project_manager" id="managerName" placeholder="مدير المشروع" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <label id="managerError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                            </div>
                            <div className="relative z-0 px-2 w-full group">
                                <label className="text-[11px] text-[#666666] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative mx-8 top-2 left-3 w-auto ">  التاريخ </label>
                                <input type="text" onChange={validation} onClick={openDateModal} name="start_date" id="dateStart" placeholder="إختر الزمن" className="h-12 bg-[#FFFFFF] rounded-[10px] border border-[#E6E6E6] text-gray-900 text-sm   focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedDate ? formatDate(selectedDate) : ''} readOnly
                                />
                                <label id="dateError" className="text-[11px] text-[red] dark:text-gray-300 bg-[#FFFFFF] pr-4 pl-4  relative w-auto  "></label>
                                {dateModalIsOpen && (
                                    <DatepickerModal isOpen={openDateModal} onClose={closeDateModal} ></DatepickerModal>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row items-center justify-end gap-4">
                        <button className="w-[250px] rounded-[12px] text-[#666666] bg-[#FFFFFF] border-[1px] border-[#E6E6E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#532494] dark:focus:ring-blue-800">
                            إلغاء
                        </button>
                        <button id="createButton" onClick={handleSubmit} className="w-[250px] bg-[#532494] rounded-[12px] text-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            إنشاء
                        </button>
                        {doneModalIsOpen && (
                            <DoneModal isOpen={openDoneModal} onClose={closeDoneModal} ></DoneModal>
                        )}
                        {errorModalIsOpen && (
                            <ErrorModal isOpen={openErrorModal} onClose={closeErrorModal} ></ErrorModal>
                        )}
                    </div>
                </form>
            </div>
        </div >
    )
}