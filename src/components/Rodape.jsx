import React from "react";

function Rodape() {
  return (
    <>
      <div class="quebra">
        <blockquote class="quote-externo container">
          <p>
            “O verdadeiro segredo da felicidade está em ter um genuino interesse
            por todos os detalhes da vida cotidiana”
          </p>
          <cite>WILLIAM MORRIS</cite>
        </blockquote>
      </div>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="grid-8 footer_historia">
              <h3>Nossa História</h3>
              <p>
                O Verdadeiro segredo da felicidade está em ter um genuino
                interesse por todos os detalhes da vida cotidiana cotidiana.
                interesse por todos os detalhes da vida cotidiana cotidiana
              </p>
            </div>
            <div className="grid-4 footer_contato">
              <h3>Contato</h3>
              <ul>
                <li> - 21 23232-4343</li>
                <li> - contato@bikcraft.com</li>
                <li> - Botafogo - RJ</li>
              </ul>
            </div>
            <div className="grid-4 footer_redes">
              <h3>Redes Sociais</h3>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <img
                      src="./assets/img/redes-sociais/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      src="./assets/img/redes-sociais/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img
                      src="./assets/img/redes-sociais/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copy">
          <div className="container">
            <p className="grid-16">
              Bikcraft 2016 - Alguns direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Rodape;
