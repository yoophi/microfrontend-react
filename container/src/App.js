import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import MicroFrontend from "./MicroFrontend";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();
const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cat and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");
  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exec path="/" component={Home} />
          <Route exec path="/cat/:greeting" component={GreetingCat} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
