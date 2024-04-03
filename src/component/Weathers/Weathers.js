import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather.js";
import { getWeatherList } from "../../Api.js";
import "./Weathers.css";
import AddWeatherForm from "../AddFormWeather/AddWeatherForm.js";

const Weathers = (props) => {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Menangkap data result API dan menambahkan penanganan kesalahan
        getWeatherList().then((result) => {
            setDatas(result);
        });
    }, []);

   

    const filteredData = datas.filter((data) =>
        `${data.kota} ${data.propinsi}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    return (
        <div className="container-fluid">
            <h2 style={{ fontFamily: "fantasy" }}>
                 Perkiraan Cuaca 3 Hari di seluruh Indonesia
            </h2>
                <input
                    type="text"
                    id="search"
                    placeholder="Search...."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            <div className="weather">
                {filteredData.map((data) => (
                    <Weather
                        id={data.id}
                        kota={data.kota}
                        propinsi={data.propinsi}
                        kecamatan={data.kecamatan}
                    />
                ))}
            </div>
        </div>
    );
};

export default Weathers;