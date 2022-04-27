import "./styles.css";
import Inventory from "./containers/Inventory";
import Characters from "./containers/Characters";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Destiny Item Manager</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Characters />
      <Inventory />
    </div>
  );
}
