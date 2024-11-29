import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-img">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
          alt=""
        />
      </div>
      <ul className="link-nav">
        <li>
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="custom-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/courses" className="custom-link">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/enquiry" className="custom-link">
            Enquiry
          </Link>
        </li>
      </ul>
      <div className="btn">
        <button className={true ? "logout" : "login"}>
          {true ? "logout" : "login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
