import React, { useState , useEffect} from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments,setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect( () => {
    fetch('http://localhost:5000/appointmentsByDate', {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({date: selectedDate})
      })
      .then(res=>res.json())
      .then(data => setAppointments(data))
  },[selectedDate])
  return (
    <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center pt-5 pb-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        className="p-4"
                    />
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
  );
};

export default Dashboard;
