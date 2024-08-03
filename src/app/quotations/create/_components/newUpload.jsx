import { useRef, useState } from "react";
import styles from "../_style/FileUpload.module.css"; // Import CSS module for styling
import { Paperclip } from "lucide-react";

const FileSvgDraw = ({ fileName, onRemoveFile }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg gap-[30px]">
      <div className=" bg-[#F5F5F5] rounded-full">
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
      <div className="flex flex-col gap-[24px] items-center">
        <span className="subtitle">انقر لاضافة ملفاتك</span>

        {fileName === undefined && (
          <p className="body_large text-subtitle">
            (PDF,PNG,JPG) Max Size 5 MB
          </p>
        )}
        {fileName !== undefined && (
          <div
            id="files"
            className={"flex flex-row gap-4 items-center justify-center"}
          >
            <Paperclip
              onClick={onRemoveFile}
              className="h-4 w-4 stroke-current"
            />
            <div
              className="max-w-[200px] whitespace-nowrap overflow-hidden"
              dir="ltr"
            >
              <span className="text-ellipsis">{fileName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FileUpload = ({ onChangeFilesAttached }) => {
  const fileInputRef = useRef(null); // Reference to the input element
  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file

  // Function to trigger file input click
  const handleClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input click
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file

    // Check file type and size
    if (file) {
      const allowedTypes = ["application/pdf", "image/jpg", "image/png"];
      const maxsize = 5 * 1024 * 1024; // 5MB in bytes

      if (allowedTypes.includes(file.type) && file.size <= maxsize) {
        setSelectedFile(file); // Store selected file in state
        onChangeFilesAttached(file);
      } else {
        console.error("Invalid file type or size");
        // Optionally show an error message to the user
      }
    }
  };

  // Function to remove selected file
  const handleRemoveFile = () => {
    setSelectedFile(null); // Clear selected file from state
    document
      .getElementById("files")
      .childNodes.forEach((e) => (e.textContent = ""));
    // Optionally clear the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col border-[1px] border-gray-500 rounded-[12px] py-[49px] px-[61px] border-divider">
      <div className={styles.fileUpload}>
        <input
          type="file"
          ref={fileInputRef}
          className={styles.fileInput}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.png"
          tabIndex={-1} // Hide from tab focus
          aria-hidden="true" // Hide from screen readers
          max="1" // Allow only one file to be selected
          maxsize={5 * 1024 * 1024} // 5MB maximum size
        />

        {/* Custom button to trigger file input click */}
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <FileSvgDraw
            onClick={handleClick}
            fileName={selectedFile?.name}
            onRemoveFile={handleRemoveFile}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
