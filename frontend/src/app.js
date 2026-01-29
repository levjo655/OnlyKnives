import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Knives, SmithSignup } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/knives" element={<Knives />} />
      <Route path="/smithsignup" element={<SmithSignup />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
