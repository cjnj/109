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

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar></Navbar>
      <Home></Home>
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
