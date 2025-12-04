import React from "react";
import imgFacebook from "../assets/img/redes-sociais/facebook.png";
import imgInstagram from "../assets/img/redes-sociais/instagram.png";
import imgTwitter from "../assets/img/redes-sociais/twitter.png";
import imgMapa from "../assets/img/endereco-bikcraft.jpg";
import TituloPagina from "../components/TituloPagina";
import Input from "../components/Forms/Input";
import Texarea from "../components/Forms/Textarea";
import Button from "../components/Forms/Button";

function Contato() {
  return (
    <>
      <TituloPagina
        textoTitulo="Contato"
        textoSubtitulo="tire suas dúvidas com a gente"
      />
      <section className="contato animar_interno">
        <div className="container">
          <form className="formphp contato_form grid-8">
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Ex. João Silva"
            />
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="Ex. joaosilva@gmail.com"
            />
            <Input
              label="Telefone"
              type="tel"
              name="telefone"
              placeholder="Ex. 99 99999-9999"
            />
            <Texarea label="Mensagem" name="mensagem" />
            <Button name="enviar" type="submit" classe="btn btn-preto">
              Enviar
            </Button>
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
    </>
  );
}

export default Contato;
