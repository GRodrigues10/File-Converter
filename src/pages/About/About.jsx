import React from "react";
import Header from "../../components/Header/Header";
import { StylesAbout } from "./Styles";

function About() {
  return (
    <>
      <Header />
      <StylesAbout>
        <div className="about">
          <h1>Sobre</h1>
          <p>
            Uma aplicação web que permite ao usuário selecionar ou arrastar
            arquivos e convertê-los para diferentes formatos, como DOC, PDF,
            TXT, XLSX e ZIP. O sistema oferece uma interface simples com botões
            intuitivos, suporte para resetar a escolha do arquivo e selecionar
            rapidamente o formato de saída. Ideal para conversões rápidas
            diretamente no navegador, sem necessidade de instalar programas
            adicionais.
          </p>
        </div>
      </StylesAbout>
    </>
  );
}

export default About;
