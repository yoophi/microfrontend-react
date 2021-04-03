import "./App.css";

import { Route, Router } from "react-router-dom";

import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
}

export default App;
