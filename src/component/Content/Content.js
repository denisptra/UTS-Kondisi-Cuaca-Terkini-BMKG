import React from "react";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <div className="card-content">
                <p id="clock">00:00:00</p>
                <p>CUACA SAAT INI</p>
                <hr className="garis" />
                <div class="card-rigth">
                    <span>65 Km/J</span>
                    <h3>Angin </h3>
                    <hr className="garis" />
                    <span>85 Km/J</span>
                    <h3>Angin Kencang</h3>
                    <hr className="garis" />
                    <span style={{ color: "orange" }}>Buruk</span>
                    <h3>Kualitas Udara</h3>
                </div>
                <div className="card-left">
                    <h1><img src="https://www.awxcdn.com/adc-assets/images/weathericons/6.svg" width="50" height="50" />  32°C </h1>
                    <p>Sebagian Cerah</p>
                </div>
            </div>
            <div className="card-content">
                <p id="clock">00:00:00</p>
                <p>CUACA SAAT INI</p>
                <hr className="garis" />
                <div class="card-rigth">
                    <span>100 Km/J</span>
                    <h3>Angin </h3>
                    <hr className="garis" />
                    <span>200 Km/J</span>
                    <h3>Angin Kencang</h3>
                    <hr className="garis" />
                    <span style={{ color: "orange" }}>Buruk</span>
                    <h3>Kualitas Udara</h3>
                </div>
                <div className="card-left">
                    <h1><img src="https://www.awxcdn.com/adc-assets/images/weathericons/36.svg" width="50" height="50" />  28°C </h1>
                    <p>Sebagian Berawan</p>
                </div>
            </div>
            <div className="card-content">
                <p>CUACA MENDATANG</p>
                <hr className="garis" />
                <div className="card-left">
                    <h2>Badai petir di area ini akhir Selasa malam sampai Rabu siang</h2>
                </div>
            </div>
            <div className="card-content">
                <p>RADAR CUACA DEPOK</p>
                <hr className="garis" />
                <div className="card-map">
                    <img src="https://api.accuweather.com/maps/v1/radar/static/globalSIR/zxyuv/4/13/8/4/1.jpg?&imgwidth=768&imgheight=432&base_data=radar&apikey=de13920f574d420984d3080b1fa6132b" alt="" />
                </div>
                <p id="angin"><img src="https://www.awxcdn.com/adc-assets/images/components/maps/mapping-layers/temperature.jpg" width={30} alt="" /> <span> Suhu </span> </p>
                <p id="angin"> <img src="https://www.awxcdn.com/adc-assets/images/components/maps/mapping-layers/realvue-satellite.jpg" width={30} alt="" /> <span> Angin </span> </p>
            </div>
            <div className="card-content">
                <p id="clock">00:00:00</p>
                <p >KUALITAS UDARA</p>
                <hr className="garis" />
                <div class="card-rigth">
                    <span style={{ fontSize: "15px", color:"orange" }}>Buruk </span>
                </div>
                <div className="card-left">
                    <img src="" alt="" />
                    <p style={{ fontSize: "15px", marginLeft: "15px", width: "50%" }}>Udara mencapai tingkat polusi tinggi dan tidak sehat untuk kelompok yang sensitif. Kurangi waktu di luar ruang jika Anda merasakan gejala seperti kesulitan bernapas atau iritasi tenggorokan.</p>
                </div>
            </div>
        </div>
    )
}

export default Content;