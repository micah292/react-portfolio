import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutMe from "../components/AboutMe";

const About = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2
  heading="ABOUT"
  text={
    <div>
      <p>
        As 
      </p>
      <br />
      <p>
        pop
      </p>
      <br />
      <p>
        goal
      </p>
    </div>
  }
/>

        <AboutMe />
        <Footer />
    </div>
    );
};

export default About;