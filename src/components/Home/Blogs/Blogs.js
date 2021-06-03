import React from "react";
import wilson from "../../../images/wilson.png";
import emma from "../../../images/emma.png";
import aliza from "../../../images/aliza.png";
import './Blogs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  const blogData = [
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Dr. Wilson Harry",
      date: "29 May , 2021",
      img: wilson,
      title:'2 Times of Brush can keep your teeth healthy'
    },
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Dr. mma Gomez",
      date: "29 May , 2021",
      img: emma,
      title:'The tooth cancer is taking a Challenge'
    },
    {
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, totam?",
      name: "Dr. Aliza Farari",
      date: "29 May , 2021",
      img: aliza,
      title:'How to keep your teeth healthy'
    },
  ];
  return (
    <section className="services-container mt-5 pt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR BLOG</h5>
        <h2>From Our Blog News</h2>
      </div>
      <div className="card-deck mt-5 testimonialsCard">
        {blogData.map((blog) => (
          <div
            className="card blog-card"
          >
            <div className="card-body">
              <div className="row pt-2 pb-3">
                <div className="col-3">
                  <img src={blog.img} alt="" className="card-hover" />
                </div>
                <div className="col-9 ps-5 blog-title">
                  <h5 className="mt-3">{blog.name}</h5>
                  <p>{blog.date}</p>
                </div>
              </div>
              <h5 className='pt-2'>{blog.title}</h5>
              <p className="card-text pt-2 pb-1 card-hover">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ipsam distinctio quasi.
              </p>
              <button className="btn learn-btn"><FontAwesomeIcon className="info-icon me-5" icon={faArrowRight}/></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
