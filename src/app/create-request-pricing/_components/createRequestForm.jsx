"use client";
import { Textarea } from "@/components/ui/textarea";
import FileUploaderTest from "./uploadFile";
import { useEffect, useState } from "react";
import DoneModal from "./doneModal";
import "../_style/DoneModal.css";
import { apiCreateQuotationFromTextOrFile } from "@/service";
import { Qutation } from "@/service/qutation";
import { z } from "zod";
import FileUpload from "./newUpload";

const formSchema = z.object({
  text: z.string().optional(),
  fileAttach: z
    .string()
    .optional()
    .refine((r) =>
      r?.length == 0
        ? "select one approches"
        : "select qutation by text or file"
    ),
});
export default function RequestPricingForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(Qutation | null);
  const [textData, setTextData] = useState("");
  const [fileData, setFileData] = useState(null);
  const handleFilesChange = (value) => {
    setSelectedFile(value);
  };

  const handleTextChange = (e) => {
    setTextData(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleSubmit = async () => {
    var pError = document.getElementById("error");

    // Create FormData object to send data as multipart/form-data
    if (selectedFile === null && textData.length === 0) {
      if (pError === null) {
        return;
      } else {
        pError.style.display = pError.style.display = "block";
      }
    } else {
      const formData = new FormData();
      console.log(selectedFile);
      if (textData.length !== 0) {
        formData.append("text", textData);
      } else {
        formData.append("quotation_file", selectedFile);
      }
      console.log(formData);
      await fetchData(formData);
      if (data?.length === 0) {
        //open error modal
        console.log("in error");
      } else {
        console.log(data);
        openDoneModal();
        clearInputs();
      }
    }
  };
  function clearInputs() {
    setSelectedFile(null);
    setTextData("");
  }
  const fetchData = async (requestData) => {
    try {
      const data = await apiCreateQuotationFromTextOrFile(requestData);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  async function postData() {
    var text = document.getElementById("textQutation")?.textContent;
    console.log(text);
    const requestData = {
      text: text,
    };

    fetchData(requestData);

    console.log(data);
    openDoneModal();
  }
  const [doneModalIsOpen, setDoneModalIsOpen] = useState(true);
  const openDoneModal = () => {
    setDoneModalIsOpen(true);
  };

  const closeDoneModal = () => {
    setDoneModalIsOpen(false);
  };

  return (
    <div className="container max-auto bg-[#F9FAFB]">
      <form
        action=""
        className="flex flex-col justify-end items-center pt-[64px] lg:gap-[100px] gap-[10px] bg-[#F9FAFB]"
      >
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 bg-white p-[40px] lg:w-[1150px] w-[800px] h-[1200px] lg:h-[500px]">
          <div className="flex flex-col items-start justify-start gap-8 p-30">
            <p>يمكنك تحميل ملف</p>
            <FileUpload onChangeFilesAttached={handleFilesChange} />
          </div>
          <div className="flex flex-col items-start justify-start gap-4 p-30">
            <p>أو كتابة المواد المطلوبة للتسعير</p>
            <div className="relative z-0 px-2 w-full group p-30">
              <label className="text-[11px] text-gray-900 dark:text-gray-300 bg-white pr-4 pl-4  relative mx-8 top-2 left-3 w-auto  ">
                التسمية
              </label>
              <Textarea
                id="textQutation"
                onChange={handleTextChange}
                value={textData}
                name="textQutation"
                placeholder="نص توضيحي"
                className="resize-none w-[588px] h-[300px]"
              />
            </div>
            <p id="error" className="text-red-600 hidden">
              {" "}
              الرجاء إختيار ملف او كتابةالمواد المطلوبه
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-4 w-full pl-[70px] mb-[30px]">
          <button
            type="submit"
            className="w-[250px] rounded-[12px] text-gray-500 bg-white border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#532494] dark:focus:ring-blue-800"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-[250px] bg-[#532494] rounded-[12px] text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            إنشاء طلب تسعير
          </button>
          {doneModalIsOpen && (
            <DoneModal
              isOpen={openDoneModal}
              onClose={closeDoneModal}
            ></DoneModal>
          )}
        </div>
      </form>
    </div>
  );
}
