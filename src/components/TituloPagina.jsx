import React from "react";

function TituloPagina({ textoTitulo, textoSubtitulo }) {
  return (
    <section className="introducao-interna interna_contato">
      <div className="container">
        <h1>{textoTitulo}</h1>
        <p>{textoSubtitulo}</p>
      </div>
    </section>
  );
}

export default TituloPagina;
