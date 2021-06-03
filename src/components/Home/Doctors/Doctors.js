import React from "react";
import doctor from "../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Doctors = () => {
  const doctorData = [
    {
      name: "Dr. Caudi",
      phone: "+61 2345 4556 992",
      img: doctor,
    },
    {
      name: "Dr. Caudi",
      phone: "+61 2345 4556 992",
      img: doctor,
    },
    {
      name: "Dr. Caudi",
      phone: "+61 2345 4556 992",
      img: doctor,
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="row text-center">
        <div className="ps-5">
          <h4 style={{ color: "#1CC7C1" }}>OUR DOCTORS</h4>
        </div>
      </div>
      <div className="card-deck mt-5 testimonialsCard">
        {doctorData.map((doctor) => (
          <div
            className="card"
            style={{
              width: "18rem",
              float: "left",
              margin: "10px 20px",
              border: "none",
            }}
          >
            <div className="card-body" style={{ textAlign: "center" }}>
              <img src={doctor.img} alt="" className="img-fluid" />
              <h5 className="text-primary mt-3">{doctor.name}</h5>
              <div className="ms-5">
              <FontAwesomeIcon
                  className="info-icon me-2 mt-1"
                  icon={faPhone}
                  style={{
                    color: "#1CC7C1",
                    fontSize:'1rem',
                    float: 'left',
                  }}
                />
                <p style={{float: 'left'}}>{doctor.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
