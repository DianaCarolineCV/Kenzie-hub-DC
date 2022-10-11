import "./reset.css";
import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
import HeaderPage from "./components/HeaderPage";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import Filter from "./components/Filter";
import List from "./components/List";
function App() {
  const [page, setPage] = useState(true);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: -150 },
  ]);
  const [currentType, setCurrentType] = useState("all");

  return (
    <div className="App">
      {page ? (
        <HomePage setPage={setPage} />
      ) : (
        <div>
          <header className="head">
            <HeaderPage setPage={setPage} />
          </header>
          <main className="main">
            <section className="formTotal">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <section className="filterList">
              <Filter
                setCurrentType={setCurrentType}
                currentType={currentType}
              />
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                currentType={currentType}
              />
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
