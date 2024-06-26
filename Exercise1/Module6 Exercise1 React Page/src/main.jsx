import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Greeting from "./greeting.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Greeting name="Jarrod">
      <h1>Jason</h1>
      <h1>Mary</h1>
    </Greeting>
  </React.StrictMode>
);
