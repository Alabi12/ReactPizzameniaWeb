import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Pizzatypes from './Components/PizzaType/Pizzatype';
import AboutPizza from './Components/AboutPizza/AboutPizza';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <AboutPizza />
    <Pizzatypes />
    <Footer />
    </>
  );
}

export default App;
