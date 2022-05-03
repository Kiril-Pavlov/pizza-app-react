
import './App.css';
import {Routes, Route} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About/index"
import Contact from "./pages/Contact/index"
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage/index';

//components
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"




function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='cartpage' element={<CartPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
