import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Home, Knives, SmithSignup, ComponentShowcase, Login } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knives" element={<Knives />} />
        <Route path="/smithsignup" element={<SmithSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/components" element={<ComponentShowcase />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
