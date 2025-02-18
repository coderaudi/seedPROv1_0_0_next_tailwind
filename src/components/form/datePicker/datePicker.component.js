"use client"
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const SmallDatePicker = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(dayjs(selectedDate));

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date.toDate());
  };

  return (
    <DatePicker
      value={startDate}
      onChange={handleDateChange}
      renderInput={(props) => <input {...props} style={datePickerStyle} />}
    />
  );
};

const datePickerStyle = {
  fontSize: "0.8rem",
  padding: "0.2rem 0.5rem",
  width: "120px",
};

export default SmallDatePicker;
