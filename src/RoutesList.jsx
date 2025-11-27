import React from "react";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function RoutesList() {
  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default RoutesList;
