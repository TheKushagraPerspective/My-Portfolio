import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import MyImage from "../../assets/circle-image.png";
import About from "../about/About";
import Services from "../Services/Services";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="home-main text-white py-5" id="home">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          {/* Left Side Content */}
          <section className="home-content mr-5 mb-4 mb-md-0">
            <h3 className="name-heading1 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "30px" }}>
              Hello, It's Me
            </h3>
            <h1 className="name-heading2 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "40px" }}>
              Kushagra Varshney
            </h1>
            <h3 className="name-heading3 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "30px" }}>
              And I'm a <span style={{ color: "#0ef" }} ref={typedRef}></span>
            </h3>
            <p className="animate__animated animate__fadeIn" style={{ fontSize: "15px" }}>
              I'm a web developer with extensive knowledge.<br />
              My expertise includes creating and designing websites, frontend design, and more...
            </p>
            <div className="home-sci mt-3">
              <a href="#" className="social-link btn btn-outline-light me-2">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="social-link btn btn-outline-light me-2">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="social-link btn btn-outline-light me-2">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://github.com/TheKushagraPerspective"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link btn btn-outline-light me-2"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>

            <a href="#about" className="btn-box mt-4">
              More About Me
            </a>
          </section>

          {/* Right Side Image */}
          <aside className="home-image text-center">
            <img src={MyImage} alt="Portfolio Profile" className="image-fluid" />
          </aside>
          
        </div>
        
      </main>
      

      <About />

      <Services />
    </>
  );
};

export default Home;
