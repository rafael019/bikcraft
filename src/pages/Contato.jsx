import React from "react";
import Topo from "../components/Topo";
import Rodape from "../components/Rodape";
import imgFacebook from "../assets/img/redes-sociais/facebook.png";
import imgInstagram from "../assets/img/redes-sociais/instagram.png";
import imgTwitter from "../assets/img/redes-sociais/twitter.png";
import imgMapa from "../assets/img/endereco-bikcraft.jpg";
import TituloPagina from "../components/TituloPagina";

function Contato() {
  return (
    <>
      <Topo />

      <TituloPagina
        textoTitulo="Contato"
        textoSubtitulo="tire suas dúvidas com a gente"
      />
      <section className="contato animar_interno">
        <div className="container">
          <form
            action="enviar.php"
            method="post"
            name="form"
            className="formphp contato_form grid-8"
          >
            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text" />
            <label for="email">E-mail</label>
            <input id="email" name="email" type="text" />
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="text" />

            <label className="nao-aparece">
              Se você não é um robô, deixe em branco.
            </label>
            <input type="text" className="nao-aparece" name="leaveblank" />
            <label className="nao-aparece">
              Se você não é um robô, não mude este campo.
            </label>
            <input
              type="text"
              className="nao-aparece"
              name="dontchange"
              value="http://"
            />

            <label for="mensagem">Mensagem</label>
            <textarea name="mensagem" id="mensagem"></textarea>

            <button
              id="enviar"
              name="enviar"
              type="submit"
              className="btn btn-preto"
            >
              Enviar
            </button>
          </form>

          <div className="contato_dados grid-8">
            <h3>Dados</h3>
            <span>+55 21 9999-9999</span> <span>contato@bikcraft.com</span>
            <span>Rua Ali Perto - Botafogo</span>
            <span>Rio de Janeiro - RJ - Brasil</span>
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src={imgFacebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={imgInstagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={imgTwitter} alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container contato_mapa">
        <a href="" target="_blank" className="grid-16">
          <img src={imgMapa} alt="Endereço Bikcraft" />
        </a>
      </section>

      <Rodape />
    </>
  );
}

export default Contato;
