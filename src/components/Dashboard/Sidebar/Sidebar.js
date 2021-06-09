import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/appointment" className="text-white links">
                        <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/allAppointments" className="text-white links">
                        <FontAwesomeIcon icon={faCalendar} />Appointments
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addDoctor" className="text-white links">
                        <FontAwesomeIcon icon={faUsers} /> Add Doctor
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white links">
                        <FontAwesomeIcon icon={faFileAlt} />Prescriptions
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white links" >
                      <FontAwesomeIcon icon={faCog} />Settings
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} />Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;