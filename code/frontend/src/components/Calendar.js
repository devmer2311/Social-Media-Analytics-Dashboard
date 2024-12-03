
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './Calendar.css'; 

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());  

  
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date} 
        tileClassName={({ date, view }) => {
          
          if (date.toDateString() === new Date().toDateString()) {
            return 'highlight-today'; 
          }
        }}
      />
    </div>
  );
};

export default MyCalendar;
