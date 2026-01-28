import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Knives, SmithSignup } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/knives" element={<Knives />} />
      <Route path="/smithsignup" element={<SmithSignup />} />
    </Routes>
  </BrowserRouter>
);

export default App;
