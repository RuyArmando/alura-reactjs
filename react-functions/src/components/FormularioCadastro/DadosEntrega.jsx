import React from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="estado"
        select
        //value={age}
        //onChange={handleChange}
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
