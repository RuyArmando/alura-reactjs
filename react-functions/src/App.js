import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import {Container, Typography } from "@material-ui/core"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={handelEnviarForm} validarCPF={handelValidarCPF} />
    </Container>
  );
}

function handelEnviarForm(dados){
  console.log(dados);
}

function handelValidarCPF(cpf){
  if(cpf.length !== 11)
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  else
    return {valido:true, texto: ""}
}

export default App;
