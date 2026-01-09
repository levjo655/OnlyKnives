import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Knives() {
    return (
        <><div className="bg-bg min-h-screen text-primaryText">
            <Navbar />
            <h1>Knives</h1>
        </div><Footer /></>
    );
}