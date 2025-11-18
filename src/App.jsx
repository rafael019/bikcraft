import React from "react";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <div>
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
            <a href="/produtos/" className="btn">
              Orçamento
            </a>
          </div>
        </section>

        <section className="produtos container animar">
          <h2 className="subtitulo">Produtos</h2>
          <ul className="produtos_lista">
            <li className="grid-1-3">
              <div className="produtos_icone">
                <img
                  src="./assets/img/produtos/passeio.png"
                  alt="Bikcraft Passeio"
                />
              </div>
              <h3>Passeio</h3>
              <p>
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação
              </p>
            </li>

            <li className="grid-1-3">
              <div className="produtos_icone">
                <img
                  src="./assets/img/produtos/esporte.png"
                  alt="Bikcraft Passeio"
                />
              </div>
              <h3>Esporte</h3>
              <p>
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação
              </p>
            </li>

            <li className="grid-1-3">
              <div className="produtos_icone">
                <img
                  src="./assets/img/produtos/retro.png"
                  alt="Bikcraft Passeio"
                />
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
            <a href="produtos.html" className="btn btn-preto">
              produtos
            </a>
          </div>
        </section>

        <section className="portfolio">
          <div className="container">
            <h2 className="subtitulo">Portfólio</h2>
            <ul className="portfolio_lista rslides_portfolio">
              <li>
                <div className="grid-8">
                  <img
                    src="./assets/img/portfolio/retro.jpg"
                    alt="Bicicleta Retro"
                  />
                </div>
                <div className="grid-8">
                  <img
                    src="./assets/img/portfolio/passeio.jpg"
                    alt="Bicicleta Passeio"
                  />
                </div>
                <div className="grid-16">
                  <img
                    src="./assets/img/portfolio/esporte.jpg"
                    alt="Bicicleta Esporte"
                  />
                </div>
              </li>
              <li>
                <div className="grid-8">
                  <img
                    src="./assets/img/portfolio/passeio.jpg"
                    alt="Bicicleta Passeio"
                  />
                </div>
                <div className="grid-8">
                  <img
                    src="./assets/img/portfolio/retro.jpg"
                    alt="Bicicleta Retro"
                  />
                </div>
                <div className="grid-16">
                  <img
                    src="./assets/img/portfolio/esporte.jpg"
                    alt="Bicicleta Esporte"
                  />
                </div>
              </li>
            </ul>
            <div className="call">
              <p>conheça mais o nosso portfólio</p>
              <a href="portfolio.html" className="btn">
                Portfólio
              </a>
            </div>
          </div>
        </section>

        <section className="qualidade container">
          <h2 className="subtitulo"> Qualidade</h2>
          <img src="./assets/img/bikcraft-qualidade.png" alt="Bikcraft" />
          <ul className="qualidade_lista">
            <li className="grid-1-3">
              <h3>Durabilidade</h3>
              <p>
                Ainda assim, existem dúvidas a respeiro de como a necessidade de
                renovação renovação renovação
              </p>
            </li>
            <li className="grid-1-3">
              <h3>Design</h3>
              <p>
                Ainda assim, existem dúvidas a respeiro de como a necessidade de
                renovação renovação renovação
              </p>
            </li>
            <li className="grid-1-3">
              <h3>Sustentabilidade</h3>
              <p>
                Ainda assim, existem dúvidas a respeiro de como a necessidade de
                renovação renovação renovação
              </p>
            </li>
          </ul>
          <div className="call">
            <p>conheça mais a nossa história</p>
            <a href="sobre.html" className="btn btn-preto">
              Sobre
            </a>
          </div>
        </section>

        <Rodape />
      </div>
    </>
  );
}

export default App;
