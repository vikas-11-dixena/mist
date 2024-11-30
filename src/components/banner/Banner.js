import React from "react";
import "./banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate(); // Call useNavigate at the top level of the component

  const handleExploreClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <main className="banner-main">
      <div className="container">
        <h1 className="text-5xl font-bold mb-4 welcome-message">
          Welcome to our website
        </h1>
        <p className="text-xl mb-6 paragraph-message">
          Join us to explore the amazing features we offer!
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 btn-explore"
        >
          Explore now
        </button>
        <button
          onClick={() => navigate("/contact")} // Replace with the appropriate route for Contact Us
          className="bg-white text-green-500 font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 btn-explore"
        >
          Contact us
        </button>
      </div>
    </main>
  );
};

export default Banner;
