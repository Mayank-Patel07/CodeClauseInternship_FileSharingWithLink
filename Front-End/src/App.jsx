import React from "react";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import "./App.css";
import Work from "./Components/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Cart />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
