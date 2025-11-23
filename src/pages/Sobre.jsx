import React from "react";
import Topo from "../components/Topo";
import Qualidade from "../components/Qualidade";
import Rodape from "../components/Rodape";
import imgQualidade from "../assets/img/equipe-bikcraft.jpg";
import TituloPagina from "../components/TituloPagina";

function Sobre() {
  return (
    <>
      <Topo />
      <TituloPagina
        textoTitulo="Sobre"
        textoSubtitulo="Conheça mais sobre Bikcraft"
      />

      <section class="missao_sobre container animar_interno">
        <div class="grid-10">
          <h2 class="subtitulo-interno">História, Missão e Visão</h2>
          <p>
            Quando iniciamos a Bikcraft queriamos apenas um produto que
            adoraríamos utilizar. Eramos apaixonados por pedalar e também por
            fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho
            na garagem da nossa casa.
          </p>
          <p>
            Conheça os nossos produtos, pergunte para os nossos clientes e
            descubra a maravilha de ter uma Bikcraft na sua casa.
          </p>
        </div>

        <div class="grid-6">
          <h2 class="subtitulo-interno">Valores</h2>
          <ul>
            <li>– Qualidade no processo com </li>
            <li> – Foco no cliente sem perder a </li>
            <li> – Diversão, preservando a </li>
            <li> – Natureza com sustentabilidade</li>
          </ul>
        </div>

        <div class="grid-16 foto-equipe">
          <img src={imgQualidade} alt="Equipe Bikcraft" />
        </div>
      </section>

      <Qualidade />
      <Rodape />
    </>
  );
}

export default Sobre;
