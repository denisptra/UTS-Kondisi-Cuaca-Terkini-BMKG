import axios from "axios";

export const getWeatherList = async () => {
    const weather = await axios.get(
        `https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json`
    );

    return weather.data;
};

export const getDetailWeather = async (id) => {
    const weather = await fetch(
        `https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`
    );
    return weather.json();
};

// async function getDetailWeather(id) {
//     const response = await fetch(`https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`);
//     return response.json();
//   }


//  export async function getDetailWeather(id) {
//     const weather = await fetch(`https://ibnux.github.io/BMKG-importer/cuaca/${id}.json`);
//     return weather.json();
//   };

// export const getWeatherList = async () => {
//     const url = "https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json"
    
//       try {
//         const weather = await axios.get(url);
//         return weather.data.results;
//       } catch (error) {
//         console.error('Error fetching character list:', error);
//       };
//     };