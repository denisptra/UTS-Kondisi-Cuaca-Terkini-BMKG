// Di tambahkan import componen untuk footer karena menggunkaan class
import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>&copy; 2024 Weather, Inc. Badan Meteorologi, Klimatologi, dan Geofisika. Hak Cipta Dilindungi Undang-Undang.</p>
                <h3>Ketentuan Penggunaan | Kebijakan Privasi | Kebijakan Cookie</h3>
            </footer>
        );
    }
}

export default Footer;