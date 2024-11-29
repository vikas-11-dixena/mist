import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <main className="banner-main">
      <div className="container">
        <h1
          className="text-5xl 
                               font-bold mb-4  welcome-message"
        >
          Welcome to our website
        </h1>
        <p className="text-xl mb-6 paragraph-message">
          Join us to explore the amazing features we offer!
        </p>
        <button
          className="bg-white text-green-500
                                   font-semibold py-2 px-6 
                                   rounded-full hover:bg-Green-700 
                                   transition duration-300  btn-explore"
        >
          Explore now
        </button>
      </div>
    </main>
  );
};

export default Banner;
