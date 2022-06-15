import "./styles.css";
import Inventory from "./containers/Inventory";
import Characters from "./containers/Characters";
import Vault from "./containers/Vault";
import Progress from "./containers/Progress";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/vault">Vault</Link>
          </li>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1> Destiny Item Manager</h1>

      {/* <Characters />
      <Vault />
      <Inventory /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inventory />} />
          <Route path="characters" element={<Characters />} />
          <Route path="vault" element={<Vault />} />
          <Route path="progress" element={<Progress />} />
        </Route>
      </Routes>
    </div>
  );
}
