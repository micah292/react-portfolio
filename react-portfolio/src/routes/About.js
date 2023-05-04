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
        As a fresh graduate of the bootcamp im excited to see where i land next. It might have been difficult bbut very excited to continue my learning and propersity in full stack coding.
      </p>
      <br />
      <p>
        When im not working, i'm usually home with the family. Sometimes keeping things simple is the best way.
      </p>
      <br />
      <p>
        My goals are to broaden my understanding of web development as a whole.
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