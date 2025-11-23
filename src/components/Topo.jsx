import React from "react";
import { NavLink } from "react-router-dom";
import LogoSite from "../assets/img/bikcraft.png";
function Topo() {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="grid-4">
          <img src={LogoSite} alt="Bikcraft" />
        </NavLink>
        <nav className="grid-12 header_menu">
          <ul>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfólio</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Topo;
