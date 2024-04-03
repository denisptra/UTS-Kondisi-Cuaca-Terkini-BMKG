import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { getDetailWeather } from '../../Api';
import './Detail.css';
import AddWeatherForm from '../../component/AddFormWeather/AddWeatherForm.js';


const Detail = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  const addWeather = (weather) => {
    setDatas([...datas, weather]);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getDetailWeather(id);
        setDatas(weatherData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [id]);

  console.log(datas);

  return (
    <div >
      <Navbar />
      <p id='parameter'>ID {id}</p>
      {datas.map((item, index) => (
        <div class="card-1">
          <div className='card-detail' key={index}>
            {item.kodeCuaca === '1' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/1.png" alt="Weather Icon" />}
            {item.kodeCuaca === '2' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/2.png" alt="Weather Icon" />}
            {item.kodeCuaca === '3' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/3.png" alt="Weather Icon" />}
            {item.kodeCuaca === '0' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/0.png" alt="Weather Icon" />}
            {item.kodeCuaca === '4' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/4.png" alt="Weather Icon" />}
            {item.kodeCuaca === '45' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/45.png" alt="Weather Icon" />}
            {item.kodeCuaca === '60' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/60.png" alt="Weather Icon" />}
            {item.kodeCuaca === '61' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/61.png" alt="Weather Icon" />}
            {item.kodeCuaca === '63' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/63.png" alt="Weather Icon" />}
            {item.kodeCuaca === '95' && <img id='img-1' src="https://ibnux.github.io/BMKG-importer/icon/95.png" alt="Weather Icon" />}
            <h3> {item.cuaca}</h3>
            <p> {item.tempC} °C</p>
            <p> {item.tempF} °F</p>
            <p>Kode Cuaca :{item.kodeCuaca}</p>
            <p>Kelembapan {item.humidity} RH</p>
            <p> {item.jamCuaca}</p>
          </div>
        </div>
      ))}
      <AddWeatherForm onAddWeather={addWeather} />
      <Footer />
    </div>
  );
};

export default Detail;

