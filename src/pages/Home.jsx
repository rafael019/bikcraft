import React from "react";
import Topo from "../components/Topo";
import Qualidade from "../components/Qualidade";
import Rodape from "../components/Rodape";
import { Link } from "react-router-dom";
import imgPasseio from "../assets/img/produtos/passeio.png";
import imgEsporte from "../assets/img/produtos/esporte.png";
import imgRetro from "../assets/img/produtos/retro.png";
import PortfolioList from "../components/PortfolioList";

function Home() {
  return (
    <>
      <Topo />
      <section className="introducao">
        <div className="container">
          <h1>Bicicletas Feitas a Mão</h1>
          <blockquote className="quote-externo">
            <p>
              “não tenha nada em sua casa que você não considere útil ou
              acredita ser bonito”
            </p>
            <cite>WILLIAM MORRIS</cite>
          </blockquote>
          <Link to="/produtos/" className="btn">
            Orçamento
          </Link>
        </div>
      </section>

      <section className="produtos container animar">
        <h2 className="subtitulo">Produtos</h2>
        <ul className="produtos_lista">
          <li className="grid-1-3">
            <div className="produtos_icone">
              <img src={imgPasseio} alt="Bikcraft Passeio" />
            </div>
            <h3>Passeio</h3>
            <p>
              Ainda assim, existem dúvidas a respeito de como a necessidade de
              renovação
            </p>
          </li>

          <li className="grid-1-3">
            <div className="produtos_icone">
              <img src={imgEsporte} alt="Bikcraft Passeio" />
            </div>
            <h3>Esporte</h3>
            <p>
              Ainda assim, existem dúvidas a respeito de como a necessidade de
              renovação
            </p>
          </li>

          <li className="grid-1-3">
            <div className="produtos_icone">
              <img src={imgRetro} alt="Bikcraft Passeio" />
            </div>
            <h3>Retro</h3>
            <p>
              Ainda assim, existem dúvidas a respeito de como a necessidade de
              renovação
            </p>
          </li>
        </ul>

        <div className="call">
          <p>clique aqui e veja os detalhes dos produtos</p>
          <Link to="produtos" className="btn btn-preto">
            produtos
          </Link>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <h2 className="subtitulo">Portfólio</h2>
          <PortfolioList />
          <div className="call">
            <p>conheça mais o nosso portfólio</p>
            <Link to="portfolio" className="btn">
              Portfólio
            </Link>
          </div>
        </div>
      </section>
      <Qualidade />
      <Rodape />
    </>
  );
}

export default Home;
