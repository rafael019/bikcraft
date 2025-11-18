import React from "react";

function Topo() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="index.html" className="grid-4">
            <img src="./assets/img/bikcraft.png" alt="Bikcraft" />
          </a>
          <nav className="grid-12 header_menu">
            <ul>
              <li>
                <a href="sobre.html">Sobre</a>
              </li>
              <li>
                <a href="produtos.html">Produtos</a>
              </li>
              <li>
                <a href="portfolio.html">Portfólio</a>
              </li>
              <li>
                <a href="contato.html">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Topo;
