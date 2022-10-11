import illustration from "../../assets/illustration.svg";
import Nu from "../../assets/Nu Kenzie.png";
import "./style.css";

function HomePage({ setPage }) {
  return (
    <div className="App-div">
      <div className="App-information">
        <img src={Nu} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={() => setPage(false)}>Iniciar</button>
      </div>
      <img src={illustration} alt="ilustração" />
    </div>
  );
}

export default HomePage;
