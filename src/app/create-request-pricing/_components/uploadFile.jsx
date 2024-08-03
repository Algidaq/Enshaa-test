"use client";

import { useState } from "react";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/extension/file-upload";
import { Paperclip } from "lucide-react";

const FileSvgDraw = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center rounded-lg p-3 ">
      <div className=" bg-[#F5F5F5] rounded-full p-3">
        <svg
          width="106"
          height="106"
          viewBox="0 0 106 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="53" cy="53" r="53" fill="#F5F5F5" />
          <path
            d="M72.875 59.625V62.275C72.875 65.9853 72.875 67.8405 72.1529 69.2577C71.5178 70.5043 70.5043 71.5178 69.2577 72.1529C67.8405 72.875 65.9853 72.875 62.275 72.875H43.725C40.0147 72.875 38.1595 72.875 36.7423 72.1529C35.4957 71.5178 34.4822 70.5043 33.8471 69.2577C33.125 67.8405 33.125 65.9853 33.125 62.275V59.625M64.0417 44.1667L53 33.125M53 33.125L41.9583 44.1667M53 33.125V59.625"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">انقر لاضافة ملفاتك</span>
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        (PDF,PNG,JPG) Max Size 5 MB
      </p>
    </div>
  );
};

const FileUploaderTest = ({ onChangeFilesAttached }) => {
  const [files, setFiles] = useState(File | null);

  const handleChange = () => {
    setFiles(files);
    console.log(files);
    // Send input value to parent component
    onChangeFilesAttached(files);
  };

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 5,
    multiple: false,
  };

  return (
    <div className="flex flex-col border-[1px] border-gray-500 rounded-[12px] w-[329px] h-[300px]">
      <FileUploader
        value={files}
        onChange={handleChange}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-white border-[1px] border-gray-300 rounded-lg p-2 flex flex-col "
      >
        <FileInput className="outline-dashed outline-1 outline-white">
          <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
            <FileSvgDraw />
          </div>
        </FileInput>
        <FileUploaderContent>
          {files &&
            files.length > 0 &&
            files.map((file, i) => (
              <FileUploaderItem key={i} index={i}>
                <Paperclip className="h-4 w-4 stroke-current" />
                <span>{file.name}</span>
              </FileUploaderItem>
            ))}
        </FileUploaderContent>
      </FileUploader>
    </div>
  );
};

export default FileUploaderTest;
