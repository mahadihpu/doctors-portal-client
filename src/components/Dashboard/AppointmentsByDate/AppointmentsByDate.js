import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h1>Appointments: {appointments.length}</h1>
        </div>
    );
};

export default AppointmentsByDate;