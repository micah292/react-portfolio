import React from "react";
import Navbar from "../components/Navbar";
import Creations from "../components/Creations";
import Footer from "../components/Footer";

const Home = () => {
    return (
    <div>
        <Navbar/>
        <Creations />
        <Footer />
    </div>
    );
};

export default Home;