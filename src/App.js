import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer'; // Adjust the import path based on your project structure
import QuantityPicker from './components/quantitypicker';
import Catalog from './components/pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

//crate a footer for the page

