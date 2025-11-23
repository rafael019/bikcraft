import React from "react";
import Topo from "../components/Topo";
import Rodape from "../components/Rodape";
import PortfolioList from "../components/PortfolioList";
import TituloPagina from "../components/TituloPagina";

function Portfolio() {
  return (
    <>
      <Topo />
      <TituloPagina
        textoTitulo="Portfólio"
        textoSubtitulo="Conheça os projetos que amamos mostrar"
      />

      <section class="container animar_interno">
        <ul class="rslides">
          <li>
            <blockquote class="quote_cliente">
              <p>
                “Nada melhor do que dar um rolê com a minha Bikcraft na orla.
                Essa é a minha companheira mais fiel, nunca me traiu e está
                sempre a minha disposição.”
              </p>
              <cite>Jhony Rato</cite>
            </blockquote>
          </li>
          <li>
            <blockquote class="quote_cliente">
              <p>
                “Aqueles que ainda não possuem uma Bikcraft, não sabem o que
                estão perdendo. A precisão é absurda e a velocidade
                transcendental. Nunca vida nada igual.”
              </p>
              <cite>Bernardo</cite>
            </blockquote>
          </li>
          <li>
            <blockquote class="quote_cliente">
              <p>
                “Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
                fez foi intensificar o meu amor por esta atividade. Recomendo à
                todos que amo.”
              </p>
              <cite>Barbara Moss</cite>
            </blockquote>
          </li>
        </ul>
      </section>

      <section class="portfolio animar_interno">
        <div class="container">
          <PortfolioList />
        </div>
      </section>

      <Rodape />
    </>
  );
}

export default Portfolio;
