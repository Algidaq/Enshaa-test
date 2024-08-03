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
import { Button, InputErrorMsg } from "@/components";
import { useBusy } from "@/hooks";

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
  useEffect(() => {
    document.body.style.background = "#F9FAFB";
    return () => {
      document.body.style.background = "unset";
    };
  }, []);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(Qutation | null);
  const [textData, setTextData] = useState("");
  const [fileData, setFileData] = useState(null);
  const [showFormError, setShowFormError] = useState(false);

  const [busy, busyActions] = useBusy();

  const handleFilesChange = (value) => {
    setSelectedFile(value);
  };

  const handleTextChange = (e) => {
    setTextData(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create FormData object to send data as multipart/form-data
    if (selectedFile === null && textData.length === 0) {
      setShowFormError(true);
    } else {
      setShowFormError(false);
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
  const [doneModalIsOpen, setDoneModalIsOpen] = useState(false);
  const openDoneModal = () => {
    setDoneModalIsOpen(true);
  };

  const closeDoneModal = () => {
    setDoneModalIsOpen(false);
  };

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="md:container md:mx-auto max-md:px-4">
        <form
          action=""
          className="flex flex-col justify-end items-stretch mt-[48px] lg:gap-[100px] gap-[10px] bg-[#F9FAFB]"
        >
          <div className="flex lg:flex-row flex-col justify-between gap-[3rem] items-center bg-netural-100  md:py-[3rem] max-md:py-8 max-md:px-4 md:px-[112px] border border-divider rounded-[12px]">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <p className="heading_3 text-primary-500">يمكنك تحميل ملف</p>
              <FileUpload onChangeFilesAttached={handleFilesChange} />
            </div>

            <div className="flex flex-col items-start justify-start flex-[1] self-stretch gap-[30px]">
              <span className="heading_3 text-primary-500">
                أو كتابة المواد المطلوبة للتسعير
              </span>
              <div className="relative z-0 px-2 w-full group p-30 flex-[1]">
                <label className="absolute bg-netural-100 px-[12px] py-[4px] right-[1.5rem] top-[-1rem]">
                  <span className="body_small text-netural-600">التسمية</span>
                </label>
                <Textarea
                  id="textQutation"
                  onChange={handleTextChange}
                  value={textData}
                  name="textQutation"
                  placeholder="نص توضيحي"
                  className="resize-none h-[100%] w-full flex-[1] rounded-[0.75rem] border-divider p-[1.5rem] body_medium placeholder:body_medium placeholder:text-subtitle"
                />
              </div>
              {showFormError && (
                <InputErrorMsg
                  msg={"الرجاء إختيار ملف او كتابةالمواد المطلوبه"}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row items-end justify-end gap-[4rem] w-full ">
            <Button
              variant="text"
              text="إلغاء"
              className="border border-divider rounded-[0.75rem] hover:text-subtitle text-subtitle"
              onClick={(e) => e.preventDefault()}
            />
            <Button
              variant="filled"
              text="إنشاء طلب تسعير"
              className="max-w-[362px]"
              onClick={handleSubmit}
            />

            <DoneModal isOpen={doneModalIsOpen} onClose={closeDoneModal} />
          </div>
        </form>
      </div>
    </div>
  );
}
