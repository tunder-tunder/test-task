// import logo from './logo.svg';
import './App.css';
import { DataTable } from "./DataTable";
import { Currency } from "./Currency";
// import { Header } from "./DataTable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/currency">Currency</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/currency">
              <Currency />
            </Route>
            <Route path="/">
              <Home />
              <DataTable /> {/* table of conent and a header  */}
            </Route>
          </Switch>
        </div>
      </Router>



    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}


export default App;
