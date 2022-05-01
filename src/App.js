import "./styles.css";
import Inventory from "./containers/Inventory";
import Characters from "./containers/Characters";
import Vault from "./containers/Vault";

export default function App() {
  return (
    <div className="App">
      <h1> Destiny Item Manager</h1>

      <Characters />
      <Vault />
      <Inventory />
    </div>
  );
}
