import React from "react";
import wilson from "../../../images/wilson.png";
import emma from "../../../images/emma.png";
import aliza from "../../../images/aliza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import './Testimonials.css';

const Testimonials = () => {
  const testimonialData = [
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Wilson Harry",
      from: "California",
      img: wilson,
    },
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Emma Gomez",
      from: "California",
      img: emma,
    },
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Aliza Farari",
      from: "California",
      img: aliza,
    },
  ];
  return (
    <section className="services-container mt-5">
      <div className="row">
        <div className="col-md-6 ps-5">
          <h5 style={{ color: "#1CC7C1" }}>TESTIMONIALS</h5>
          <h2>
            What Our Patients <br /> Say
          </h2>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <FontAwesomeIcon
            className="info-icon me-5"
            icon={faQuoteRight}
            style={{
              color: "#1CC7C1",
              fontSize: "8em",
              float: "right",
              opacity: "0.2",
            }}
          />
        </div>
      </div>
      <div className="card-deck mt-5 testimonialsCard">
        {testimonialData.map((tesimonial) => (
          <div className="card" style={{width: '20rem', float: 'left',margin:'10px 20px',padding:'5px',boxShadow:'3px 3px 3px lightgray',border:'0.5px solid lightgray'}}>
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam distinctio quasi, minima et, libero officiis, odit ut perferendis error beatae eum exercitationem sit voluptas?
              </p>
              <div className="row">
                  <div className="col-3">
                      <img src={tesimonial.img} alt=""/>
                  </div>
                  <div className="col-9 ps-5">
                      <h5 className="text-primary mt-3">{tesimonial.name}</h5>
                      <p>{tesimonial.from}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
