import React from "react";
import dental_service from "../../../images/dental_service.png";

const FeaturedService = () => {
  return (
    <section className="featured-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img className="img-fluid" src={dental_service} alt="" />
          </div>
          <div className="col-md-7">
            <div className="mt-5 ms-4">
              <h2>
                Exceptional Dental Care, <br />
                On Your Terms
              </h2>
              <p className="mt-5 text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum laborum ut fugiat velit, facilis enim quis cupiditate, facere reprehenderit unde officiis. Ipsam vel modi pariatur, ratione qui dolor sit voluptates a voluptatum dolore. Rerum, neque.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit?
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio necessitatibus nesciunt maxime id sequi veniam soluta eveniet sunt? Fuga, cum.
              </p>
              <button className="btn btn-primary mt-4 pe-4 ps-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
