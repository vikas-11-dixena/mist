import React from "react";
import "./contact.css";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="container">
        {/* Left side contact details */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>
            For any queries, Please reach out to us. Our Support team will get
            back to you within 24 hours.
          </p>
          <div className="contact-detail">
            <CiMail /> <a href="">contact@mist</a>
            <br />
            <br />
            <FaPhoneAlt /> <a href="">+91-1234567890</a>
            <br />
            <br />
            <img src="" alt="" />
          </div>
        </div>
        <div className="contact-right">
          <div>
            <button className="contact-form">Course Enquiry</button>
            <button className="contact-form">Corporate Enquiry</button>
          </div>
          <form action="">
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <div className="option-number">
              <select name="" id="">
                <option value=""></option>
              </select>
              <input type="tel" name="" id="" />
            </div>
            <textarea name="" id=""></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
