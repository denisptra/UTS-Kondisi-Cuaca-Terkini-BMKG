import React from "react";
import { NavLink } from "react-router-dom";
import "./Weather.css";

const Weather = (props) => {
    const { kecamatan, kota, propinsi, id } = props;
    return (
        <div className="weather">
            <div className="card">
                <NavLink to={`/detail/${id}`}>
                    <h4 id="provinsi">{propinsi}</h4>
                    <img id="img" src="https://data.bmkg.go.id/include/assets/img/cuaca.svg" width="70" height="70" />
                    <p className="kota">{kota}</p>
                    <p className="kecamatan">{kecamatan}</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Weather;