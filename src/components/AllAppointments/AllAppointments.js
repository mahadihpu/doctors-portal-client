import React, { useEffect, useState } from 'react';
import AppointmentsByDataTable from '../Dashboard/AppointmentsByDataTable/AppointmentsByDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllAppointments = () => {
    const [appointments,setAppointments] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allAppointments')
          .then(res=>res.json())
          .then(data => setAppointments(data))
      },[])
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <AppointmentsByDataTable appointments={appointments}/>
                </div>
            </div>
        </section>
    );
};

export default AllAppointments;