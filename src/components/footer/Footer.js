import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
          {/* Left Section: Logo and Contact  */}
          <div class="footer-left">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg"
              alt=""
              className="footer-logo"
            />
            <p>
              Email: <a href="mailto:contact@ineuron.ai">contact@ineuron.ai</a>
            </p>
            <p>
              Phone: <a href="tel:+918071176111">+91 8071176111</a>
            </p>
            <div class="footer-social-icons">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            {/* <img src="iso-certified.png" alt="ISO Certification" class="iso-logo"> */}
          </div>

          {/* Middle Section: Company  */}
          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Certificate verification</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Products */}
          <div class="footer-column">
            <h3>Products</h3>
            <ul>
              <li>
                <a href="#">One Neuron</a>
              </li>
              <li>
                <a href="#">Neuro Lab</a>
              </li>
              <li>
                <a href="#">Internship Portal</a>
              </li>
              <li>
                <a href="#">Hall of fame</a>
              </li>
              <li>
                <a href="#">Support System</a>
              </li>
              <li>
                <a href="#">Job Portal</a>
              </li>
              <li>
                <a href="#">Become an affiliate</a>
              </li>
              <li>
                <a href="#">Hackathon</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
