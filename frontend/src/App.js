import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knives from "./pages/Knives";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knives" element={<Knives />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
