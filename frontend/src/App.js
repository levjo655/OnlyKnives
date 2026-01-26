import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knives from "./pages/Knives";
import SmithSignup from "./pages/SmithSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knives" element={<Knives />} />
        <Route path="/smithsignup" element={<SmithSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
