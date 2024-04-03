import React, { useState } from "react";
import './AddWeatherForm.css';

const AddWeatherForm = ({ onAddWeather }) => {
    const [formData, setFormData] = useState({
        cuaca: "",
        tempC: "",
        tempF: "",
        humidity: "",
        jamCuaca: "",
        kodeCuaca: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddWeather(formData);
    }


    return (
        <div className="container-2">
            <section className="form-2">
                {/* <div className="form-left-2">
                    <img src="" alt="img-form" />
                </div> */}
                <div className="form-right-2">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="label-6" for="provinsi">Cuaca</label>
                            <input className="input-2" type="text" id="cuaca" name="cuaca" onChange={handleChange} />
                        </div>

                        <div>
                            <label className="label-6" for="kota">Fahrenhit</label>
                            <input className="input-2" type="text" id="tempF" name="tempF" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label-6" for="kecamatan">Celcius</label>
                            <input className="input-2" type="text" id="tempC" name="tempC" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label-6" for="kecamatan">Kelembapan</label>
                            <input className="input-2" type="text" id="humidity" name="humidity" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label-6" for="kecamatan">Waku Cuaca</label>
                            <input className="input-3" type="time" id="jamCuaca" name="jamCuaca" onChange={handleChange} />
                        </div>
                        <br />
                        <div>
                            <label className="label-6" for="kecamatan">Kode Cuaca</label>
                            <select name="kodeCuaca" className="input-4" id="kodeCuaca" onChange={handleChange}>
                                <option value=""></option>
                                <option value="0">Panas</option>
                                <option value="1">Cerah Berawan</option>
                                <option value="2">Cerah</option>
                                <option value="3">Berawan</option>
                                <option value="4">Berawan Tebal</option>
                                <option value="45">Mendung  </option>
                                <option value="60">Hujan Ringan</option>
                                <option value="61">Hujan Sedang</option>
                                <option value="63">Hujan Badai</option>
                                <option value="95">Hujan Petir</option>
                            </select>
                        </div>

                        <button className="button-2" type="submit">Submit</button>
                    </form>
                    
                </div>
            </section>
        </div>
    )
}

export default AddWeatherForm;