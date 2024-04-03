import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Cuaca from './pages/Weather/Cuaca.js';
import Detail from './pages/Weather/Detail.js';
import About from './pages/Weather/About.js'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cuaca" element={<Cuaca />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
