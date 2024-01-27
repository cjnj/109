import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer'; // Adjust the import path based on your project structure
import QuantityPicker from './components/quantitypicker';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Navbar></Navbar>
      <Footer></Footer>
      <QuantityPicker></QuantityPicker>
    </div>
  );
}

export default App;

//crate a footer for the page

