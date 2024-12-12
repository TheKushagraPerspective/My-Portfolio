import React from "react";
import AboutImage from "../../assets/circle-image.png";
import "./about.css";

const About = () => {
  return (
    <section className="about-main" id="about">
      <div className="container about-container d-flex align-items-center justify-content-between">
        {/* Left Side Image */}
        <div className="about-image" style={{ flex: 1 }}>
          <img
            src={AboutImage}
            alt="My-Image-For-About-Section"
            className="about-inner-img"
          />
        </div>
        {/* Right Side Text */}
        <div className="about-text" style={{ flex: 1 }}>
          <h2> About <span>Me</span> </h2>
          <h4>Full Stack Developer</h4>
          <p>
            I am Kushagra Varshney, a passionate Full Stack Developer from Budaun, Uttar Pradesh. Currently, I am pursuing my B.Tech in Computer Science Engineering (CSE) from Lovely Professional University, where I am in my 3rd year, 5th semester. Throughout my academic journey, I have developed a strong foundation in web development, focusing on both front-end and back-end technologies. 
            With a keen interest in building robust and scalable applications, I have gained hands-on experience in working with modern web development frameworks and tools such as React, Node.js, MongoDB, Express, and more. I have also created several projects that showcase my skills in building functional and user-friendly websites. My projects range from e-commerce platforms to personal portfolio websites, each with a focus on improving user experience and performance.
            As a developer, I am constantly exploring new technologies and best practices to stay up-to-date with the rapidly evolving tech landscape. My goal is to continue growing as a Full Stack Developer, contributing to innovative projects, and delivering high-quality solutions that make a real-world impact.
          </p>
          <a href="#about" className="btn-box mt-4"> More About Me</a>
        </div>
      </div>
    </section>


    
  );
};

export default About;
