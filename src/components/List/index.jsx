import Card from "../Card";
import { ReactComponent as NoCard } from "../../assets/NoCard.svg";
import "./style.css";

function List({ listTransactions, setListTransactions, currentType }) {
  function removeTransaction(id) {
    setListTransactions(
      listTransactions.filter(
        (transaction) => listTransactions.indexOf(transaction) !== id
      )
    );
  }

  return listTransactions.length > 0 ? (
    listTransactions.map((transaction, index) =>
      transaction.type === currentType || currentType === "all" ? (
        <Card
          transaction={transaction}
          id={index}
          key={index}
          removeTransaction={removeTransaction}
        />
      ) : (
        ""
      )
    )
  ) : (
    <>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <NoCard />
    </>
  );
}

export default List;
