import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import user from "./user.json";
import Profile from "./components/user"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();



ReactDOM.render(<Profile userAvatar={user.avatar} userName={user.username} userTag={user.tag} userLocation={user.location} userFollowers={user.stats.followers} userViews={user.stats.views} userLikes={user.stats.likes} />, document.querySelector("#root"));
