import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
       As a fresh out of bootcamp student im ready to go all in and learn as much as i can as soon as i can!
      </p>
      <br />
      
      <p>
       My end goals are to learn as much as i can and to be as quick as possibly can.
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