import { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


class Navbar extends Component {
    render() {
        function updateTime() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var dayName = now.getDay();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();

            // Mengubah bulan dan hari ke format string
            month = month < 10 ? "0" + month : month;
            day = day < 10 ? "0" + day : day;

            // Mengubah hari ke nama hari
            var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            dayName = dayNames[dayName];

            var timeString = dayName + ", " + day + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
            document.getElementById("waktu").innerText = timeString;
        }

        setInterval(updateTime, 1000);
        return (
            <div>
                <nav className="navbar">
                    <ul>   
                        <li>
                            <NavLink to={"/"}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cuaca"}>CUACA</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>ABOUT</NavLink>
                        </li>
                        <p id="waktu"></p>
                        <p id="lokasi"> Depok, Jawa Barat 32°C </p>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;