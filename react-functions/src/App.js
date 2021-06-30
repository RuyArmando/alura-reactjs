import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";

import {Container, Typography } from "@material-ui/core"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={handelEnviarForm} />
    </Container>
  );
}

function handelEnviarForm(dados){
  console.log(dados);
}

export default App;
