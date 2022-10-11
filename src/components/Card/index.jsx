// import trash from "../../assets/trash.svg";
import "./style.css";

function Card({ transaction, id, removeTransaction }) {
  return (
    <div
      className={`card ${transaction.type === "Entrada" ? "border" : ""}`}
      id={id}
    >
      <div>
        <section className="description">
          <p> {transaction.description}</p>
          <h3>{transaction.type}</h3>
        </section>
        <section className="value">
          <h4>R$ {transaction.value}</h4>
          <button id={id} onClick={() => removeTransaction(id)}>
            <img src="" alt="Lixeira" />
          </button>
        </section>
      </div>
    </div>
  );
}

export default Card;
