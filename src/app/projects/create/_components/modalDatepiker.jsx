import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ar from "date-fns/locale/ar";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const DatepickerModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onClose(date); 
  };

  const handleSubmit = () => {
    // Handle date selection, e.g., pass it to a parent component
    console.log('Selected date:', selectedDate);
    onClose(); // Close the modal
  };

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={()=>{onClose(null)}}
      ariaHideApp={false}
      contentLabel="Select Date"
      className="modal flex flex-col items-center relative justify-center mt[300px]"
    >
      <div className=''>
        <DatePicker
          selected={selectedDate}
          locale={ar}
          onChange={handleDateChange}
          inline
          dateFormat="dd/MM/yyyy"  
        />
      </div>
    </Modal>
  );
};

export default DatepickerModal;