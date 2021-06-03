import React from "react";
import fluoride from '../../../images/fluoride.png';
import cavities from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img : fluoride
        },
        {
            name: 'Cavity Filling',
            img : cavities
        },
        {
            name: 'Teath Whitening',
            img : whitening
        }
    ];
  return (
    <section className="services-container mt-5 pt-5">
      <div className="text-center" style={{marginTop:'20px'}}>
        <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center mt-5 pt-5">
            <div className="w-75 row">
            {
                serviceData.map(service => <ServiceDetail service={service} ></ServiceDetail>)
            }
            </div>
        </div>
    </section>
  );
};

export default Services;
