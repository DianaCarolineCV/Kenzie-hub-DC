import { ReactComponent as Logo } from "../../assets/Nu Kenzie.svg";
import "./style.css";

function Header({ setPage }) {
  return (
    <div className="divHeader">
      <Logo />
      <button onClick={() => setPage(true)}>Início</button>
    </div>
  );
}

export default Header;
