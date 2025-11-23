import React from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;
