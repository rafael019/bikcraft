import React from "react";
import bikQualidade from "../assets/img/bikcraft-qualidade.png";

function Qualidade() {
  return (
    <section class="qualidade container">
      <h2 class="subtitulo">Qualidade</h2>
      <img src={bikQualidade} alt="Bikcraft" />
      <ul class="qualidade_lista">
        <li class="grid-1-3">
          <h3>Durabilidade</h3>
          <p>
            Ainda assim, existem dúvidas a respeiro de como a necessidade de
            renovação renovação renovação
          </p>
        </li>
        <li class="grid-1-3">
          <h3>Design</h3>
          <p>
            Ainda assim, existem dúvidas a respeiro de como a necessidade de
            renovação renovação renovação
          </p>
        </li>
        <li class="grid-1-3">
          <h3>Sustentabilidade</h3>
          <p>
            Ainda assim, existem dúvidas a respeiro de como a necessidade de
            renovação renovação renovação
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Qualidade;
