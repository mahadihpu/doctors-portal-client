import React from 'react';

const AppointmentsByDataTable = ({appointments}) => {
    console.log(appointments)
    return (
        <table className="table table-borderless mt-5 ms-5">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Serial</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                    <tr>
                        <td>{index+1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.tephonest}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentsByDataTable;