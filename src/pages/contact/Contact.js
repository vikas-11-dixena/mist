import React from "react";
import "./contact.css";
import { useState } from "react";

const Contact = () => {
  // State to track which button is active (Course Enquiry or Corporate Enquiry)
  const [enquiryType, setEnquiryType] = useState("course"); // 'course' or 'corporate'

  // Handle button click to switch enquiry type
  const handleEnquiryTypeChange = (type) => {
    setEnquiryType(type);
  };

  // Handle form submission (You can customize this as per your needs)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        For any queries, please reach out to us. Our support team will get back
        to you within 24 hours.
      </p>
      <div className="contact-content">
        {/* Left Contact Info Section */}
        <div className="contact-info">
          <p>
            <strong>Email:</strong> contact@ineuron.ai
          </p>
          <p>
            <strong>Phone:</strong> +91 8071176111
          </p>
          <img
            src="path/to/your/image.png" // Replace with your image URL
            alt="Customer Support Illustration"
            className="contact-image"
          />
        </div>

        {/* Right Form Section */}
        <div className="contact-form">
          <div className="button-group">
            <button
              className={`tab-button ${
                enquiryType === "course" ? "active" : ""
              }`}
              onClick={() => handleEnquiryTypeChange("course")}
            >
              Course Enquiry
            </button>
            <button
              className={`tab-button ${
                enquiryType === "corporate" ? "active" : ""
              }`}
              onClick={() => handleEnquiryTypeChange("corporate")}
            >
              Corporate Enquiry
            </button>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <div className="phone-input">
              <select>
                <option value="+91">IN +91</option>
                {/* Add other country codes if needed */}
              </select>
              <input
                type="tel"
                placeholder="Enter your phone number *"
                required
              />
            </div>
            <textarea placeholder="Your message *" required></textarea>

            {/* Show organization name only for corporate enquiry */}
            {enquiryType === "corporate" && (
              <input type="text" placeholder="Organization Name *" required />
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
