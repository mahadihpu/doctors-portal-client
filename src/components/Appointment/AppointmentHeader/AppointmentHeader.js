import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
  return (
    //I need to add
    <main style={{ height: 600 }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>

      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
