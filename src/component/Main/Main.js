import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import Weathers from "../Weathers/Weathers.js";
import "./Main.css";

const Main = () => {
    return (
        <div class="content">
            <p id="waktu"></p>
            <Weathers />
        </div>
    )
}

export default Main;