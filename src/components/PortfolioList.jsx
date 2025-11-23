import React from "react";
import imgPortRetro from "../assets/img/portfolio/retro.jpg";
import imgPortPasseio from "../assets/img/portfolio/passeio.jpg";
import imgPortEsporte from "../assets/img/portfolio/esporte.jpg";

function PortfolioList() {
  return (
    <ul class="portfolio_lista rslides_portfolio">
      <li>
        <div class="grid-8">
          <img src={imgPortRetro} alt="Bicicleta Retro" />
        </div>
        <div class="grid-8">
          <img src={imgPortPasseio} alt="Bicicleta Passeio" />
        </div>
        <div class="grid-16">
          <img src={imgPortEsporte} alt="Bicicleta Esporte" />
        </div>
      </li>
      <li>
        <div class="grid-8">
          <img src={imgPortPasseio} alt="Bicicleta Passeio" />
        </div>
        <div class="grid-8">
          <img src={imgPortRetro} alt="Bicicleta Retro" />
        </div>
        <div class="grid-16">
          <img src={imgPortEsporte} alt="Bicicleta Esporte" />
        </div>
      </li>
    </ul>
  );
}

export default PortfolioList;
