import React from "react";
import "./Hero.css";
import Gambar1 from './Gambar1.svg';

const Hero = () => {

    return (
        <div class="container">
            <section class="hero">
                <div class="hero-left">
                    <h1>BADAN METEOROLOGI, KLIMATOLOGI, DAN GEOFISIKA</h1>
                    <h3>Cepat, Tepat, Akurat, Luas, dan Mudah Dipahami</h3>
                    <p>Dalam rangka mendukung dan mengemban tugas pokok dan fungsi serta memperhatikan kewenangan BMKG agar lebih efektif dan efisien, maka diperlukan aparatur yang ....</p>
                    <button className="button">Read More..</button>
                </div>
                <div class="hero-rigth">
                    <img className="hero-img" src={Gambar1} alt="hero-img" />
                </div>
            </section>
        </div>
    )
}

export default Hero;