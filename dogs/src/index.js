import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

window.renderDogs = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountDogs = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Dogs-container")) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
