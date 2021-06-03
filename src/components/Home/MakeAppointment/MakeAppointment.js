import React from "react";
import doctor from "../../../images/doctor.png";
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 d-none d-md-block">
            <img className="img-fluid" src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-3" style={{zIndex: 1}}>
            <div className="mt-3 ms-4">
              <h5 className="text-primary">APPOINTMENT</h5>
              <h2 className="my-4">Make An Appointment <br /> Today</h2>
              <p className="mt-5 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                necessitatibus nesciunt maxime id sequi veniam soluta eveniet
                sunt? Fuga, cum.
              </p>
              <button className="btn btn-primary mt-4 pe-4 ps-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
