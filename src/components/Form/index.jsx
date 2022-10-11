import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [descricao, setDescricaoInput] = useState("");
  const [valor, setDescricaoValor] = useState("");
  const [tipoDeValor, setDescricaoTipoValor] = useState("Despesa");
  const arr = [
    { description: descricao, type: tipoDeValor, value: parseInt(valor) },
  ];

  function formSubmit() {
    setListTransactions([...listTransactions, ...arr]);
    setDescricaoInput("");
    setDescricaoTipoValor("Entrada");
    setDescricaoValor("");
  }

  return (
    <form onSubmit={(event) => formSubmit(event.preventDefault())} required>
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        placeholder="Digite sua descrição"
        id="descricao"
        onChange={(event) => setDescricaoInput(event.target.value)}
        value={descricao}
        required
      />
      <span>Ex: Compra de roupas</span>
      <div>
        <div>
          <label htmlFor="valor">Valor</label>
          <div>
            <input
              type="number"
              placeholder="R$"
              id="valor"
              onChange={(event) => setDescricaoValor(event.target.value)}
              value={valor}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="tipoDeValor">Tipo de Valor</label>
          <select
            name="tipoDeValor"
            id="tipoDeValor"
            onChange={(event) => {
              setDescricaoTipoValor(event.target.value);
            }}
            value={tipoDeValor}
          >
            <option value="Despesa">Despesa</option>
            <option value="Entrada">Entrada</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
}

export default Form;
