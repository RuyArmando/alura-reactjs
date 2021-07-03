import React, { useState } from "react";
import cep from "cep-promise";
import { TextField, Button, MenuItem } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cepEntrega, setCepEntrega] = useState("");
  const [enderecoEntrega, setEnderecoEntrega] = useState("");
  const [numeroEntrega, setNumeroEntrega] = useState("");
  const [bairroEntrega, setBairroEntrega] = useState("");
  const [cidadeEntrega, setCidadeEntrega] = useState("");
  const [estadoEntrega, setEstadoEntrega] = useState("");

  // {
  //   "cep":  "05010000",
  //   "state":  "SP",
  //   "city":  "São Paulo",
  //   "street":  "Rua Caiubí",
  //   "neighborhood":  "Perdizes",
  // }
  function consultarCep(dados) {
    cep(dados)
      .then((result) => {
        setEnderecoEntrega(result.street);
        setBairroEntrega(result.neighborhood);
        setCidadeEntrega(result.city);
        setEstadoEntrega(result.state);
      })
      .catch(console.log);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({
          cepEntrega,
          enderecoEntrega,
          numeroEntrega,
          bairroEntrega,
          cidadeEntrega,
          estadoEntrega,
        });
      }}
    >
      <TextField
        value={cepEntrega}
        onChange={(event) => setCepEntrega(event.target.value)}
        onBlur={(event) => consultarCep(event.target.value)}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={enderecoEntrega}
        onChange={(event) => setEnderecoEntrega(event.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numeroEntrega}
        onChange={(event) => setNumeroEntrega(event.target.value)}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={bairroEntrega}
        onChange={(event) => setBairroEntrega(event.target.value)}
        id="bairro"
        label="Bairro"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cidadeEntrega}
        onChange={(event) => setCidadeEntrega(event.target.value)}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={estadoEntrega}
        onChange={(event) => setEstadoEntrega(event.target.value)}
        id="estado"
        select
        label="UF"
        variant="outlined"
        margin="normal"
      >
        <MenuItem value={"AC"}>AC</MenuItem>
        <MenuItem value={"AL"}>AL</MenuItem>
        <MenuItem value={"AP"}>AP</MenuItem>
        <MenuItem value={"AM"}>AM</MenuItem>
        <MenuItem value={"BA"}>BA</MenuItem>
        <MenuItem value={"CE"}>CE</MenuItem>
        <MenuItem value={"DF"}>DF</MenuItem>
        <MenuItem value={"ES"}>ES</MenuItem>
        <MenuItem value={"GO"}>GO</MenuItem>
        <MenuItem value={"MA"}>MA</MenuItem>
        <MenuItem value={"MG"}>MG</MenuItem>
        <MenuItem value={"MT"}>MT</MenuItem>
        <MenuItem value={"MS"}>MS</MenuItem>
        <MenuItem value={"PA"}>PA</MenuItem>
        <MenuItem value={"PB"}>PB</MenuItem>
        <MenuItem value={"PE"}>PE</MenuItem>
        <MenuItem value={"PI"}>PI</MenuItem>
        <MenuItem value={"PR"}>PR</MenuItem>
        <MenuItem value={"RJ"}>RJ</MenuItem>
        <MenuItem value={"RN"}>RN</MenuItem>
        <MenuItem value={"RO"}>RO</MenuItem>
        <MenuItem value={"RR"}>RR</MenuItem>
        <MenuItem value={"RS"}>RS</MenuItem>
        <MenuItem value={"SC"}>SC</MenuItem>
        <MenuItem value={"SE"}>SE</MenuItem>
        <MenuItem value={"SP"}>SP</MenuItem>
        <MenuItem value={"TO"}>TO</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
