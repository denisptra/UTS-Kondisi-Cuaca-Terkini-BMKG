import React from "react";
import Main from "../component/Main/Main";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import Content from "../component/Content/Content";


const Home = () => {

    return (
        <div>
            <Navbar />
            <Hero/>
            <Content/>
            <Footer />
        </div>
    );
};

export default Home;