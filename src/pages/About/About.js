import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="main-about">
        <div className="container">
          <h2>About</h2>
          <div className="paragraph-about">
            <p>
              Surbhi Sharma is associated with the Midas Institute of Software
              Technology (MIST), an educational center focused on equipping
              students with software and IT skills. The institute is located in
              Raipur, Chhattisgarh, and provides programs designed to help
              students excel in the tech industry. MIST also organizes
              initiatives like coding challenges, job-oriented programs, and
              industry-relevant workshops to enhance career readiness. For more
              details about their offerings or Surbhi Sharma's contributions,
              you can contact us at 1234567890, for more inquiries.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
          <div className="our-mission">
            <h2 className="heading-about"> Our Mission </h2>
            <p className="our-mission-about">
              Our mission is to empower aspiring developers through accessible,
              affordable education in Full Stack Development (MERN stack),
              Python programming, and practical framework applications. We
              believe that learning should break barriers and foster curiosity
              beyond traditional methods.
            </p>
            <p className="our-mission-about">
              Our goal is to bridge economic and educational gaps, making
              experiential skills attainable for all. By prioritizing hands-on
              learning, we encourage students to push boundaries, explore their
              potential, and step into the world of technology with confidence.
              Together, let’s innovate and 'build together.'
            </p>
          </div>
          <div className="our-vission">
            <h2 className="heading-about"> Our Vission </h2>
            <p className="our-mission-about">
              Our vision is to create a transformative learning environment that
              nurtures innovation, cultivates technical excellence, and bridges
              the gap between education and industry needs.
            </p>
            <p className="our-mission-about">
              We aim to empower individuals with cutting-edge skills to ensuring
              they are ready to thrive in the ever-evolving world of technology.
              By fostering a culture of curiosity, collaboration, and continuous
              growth, we envision a future where our students lead the way in
              building a more connected, advanced, and inclusive digital world.
            </p>
          </div>
          <div className="our-services">
            <h2 className="heading-services">Our Services</h2>
            <div className="services-grid">
              <div className="services-item">
                <img src="" alt="" />
                <h3>Skill Development Workshops</h3>
                <p>
                  Regular workshops on coding best practices, debugging, and
                  optimization. Industry-focused sessions led by experienced
                  professionals.
                </p>
              </div>
              <div className="services-item">
                <img src="" alt="" />
                <h3>Project-Based Learning</h3>
                <p>
                  Real-world projects to apply theoretical knowledge. Assistance
                  in building portfolio-worthy projects. Collaborative group
                  projects to simulate industry scenarios.
                </p>
              </div>
              <div className="services-item">
                <img src="" alt="" />
                <h3>Placement Assistance</h3>
                <p>
                  Resume building and interview preparation. We also provide
                  connections with leading tech companies for internships and
                  job placements.
                </p>
              </div>
              <div className="services-item">
                <img src="" alt="" />
                <h3>Affordable and Flexible Learning</h3>
                <p>
                  Cost-effective courses accessible to all. Flexible schedules
                  for working professionals and students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
