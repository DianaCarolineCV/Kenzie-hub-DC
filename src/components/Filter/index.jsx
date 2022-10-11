import "./style.css";

function Filter({ setCurrentType, currentType }) {
  return (
    <ul className="filter">
      <h2>Resumo financeiro</h2>
      <li>
        <button
          className={`${currentType === "all" ? "active" : ""}`}
          onClick={() => setCurrentType("all")}
        >
          Todos
        </button>
      </li>
      <li>
        <button
          className={`${currentType === "Entrada" ? "active" : ""}`}
          onClick={() => setCurrentType("Entrada")}
        >
          Entradas
        </button>
      </li>
      <li>
        <button
          className={`${currentType === "Despesa" ? "active" : ""}`}
          onClick={() => setCurrentType("Despesa")}
        >
          Despesas
        </button>
      </li>
    </ul>
  );
}

export default Filter;
