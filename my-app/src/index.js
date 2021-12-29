import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import user from "./components/task-1/user.json" ;
import Profile from "./components/task-1/components/user"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

ReactDOM.render(<Profile user={user} />, document.querySelector("#root"));
