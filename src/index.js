import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";

// import Info from "./components/TH3/Info";
// import AddComponent from "./components/TH3/AddComponent";
// import DataProvider from "./components/DataProvider";
// import UpdateComponent from "./components/TH3/UpdateComponent";
import store from "./ReduxHome/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
