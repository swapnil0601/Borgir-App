import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart, setShowCart] = useState(false);
  const onCloseHandler = () => {
    setShowCart(false);
  };
  const onShowHandler = () => {
    setShowCart(true);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={onCloseHandler} />}
      <Router>
        <Navbar onShow={onShowHandler} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
