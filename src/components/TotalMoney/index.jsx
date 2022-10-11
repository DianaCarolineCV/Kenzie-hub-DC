import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalPrice = () => {
    return listTransactions.reduce((acc, act) => act.value + acc, 0);
  };
  return (
    <div className="total">
      <section>
        <h2>Valor total:</h2>
        <p>R$ {totalPrice()}</p>
      </section>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
