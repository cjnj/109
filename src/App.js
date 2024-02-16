import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"; // Adjust the import path based on your project structure
import QuantityPicker from "./components/quantitypicker";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Hello World</h1>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
