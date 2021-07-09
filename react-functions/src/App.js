import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
        <FormularioCadastro aoEnviar={handelEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function handelEnviarForm(dados) {
  console.log(dados);
}

export default App;
