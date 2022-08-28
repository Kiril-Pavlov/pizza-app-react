import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Pizza from "./components/Pizza/Pizza";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Navbar />
      <Routes>
        <Route path="pizza" element={<Home />}></Route>
        <Route path="pizza/:pizzaName" element={<Pizza />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/pizza" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
