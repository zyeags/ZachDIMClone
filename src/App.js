import "./styles.css";
import Inventory from "./containers/Inventory";
import Characters from "./containers/Characters";

export default function App() {
  return (
    <div className="App">
      <h1> Destiny Item Manager</h1>

      <Characters />
      <Inventory />
    </div>
  );
}
