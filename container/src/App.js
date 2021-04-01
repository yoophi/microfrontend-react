import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cat and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
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
            <img width="400px" src="https://cataas.com/cat/says/hello" />
          </div>
          <div className="dog">
            <img width="400px" src="https://random.dog/17525-12354-23454.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exec path="/" render={() => <Home history={history} />} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
