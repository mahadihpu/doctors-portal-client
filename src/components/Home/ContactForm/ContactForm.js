import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
    return (
        <section className="contact-form mt-5 pt-5">
      <div className="container">
        <div className="row w-75" style={{margin: '0 auto'}}>
          <div className="col text-white py-3" style={{zIndex: 1}}>
          <div className="text-center pb-3">
              <h5 className="text-primary">CONTACT US</h5>
              <h2>Always Stay Connected to Us</h2>
          </div>
            <form>
                <input type="email" className="form-control pt-2 pb-2" name="email" placeholder="Email Adress*" id=""/>
                <input type="text" className="form-control pt-2 pb-2 mt-4" name="" placeholder="Subject*" id=""/>
                <textarea name="" className="form-control mt-4" id="" placeholder="Your Message*" cols="30" rows="10"></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ContactForm;