// Core
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Pages
import App from "./App";
import { Provider } from "react-redux";
import { storeApp } from "./init/store";


render(
  <BrowserRouter>
    <Provider store={storeApp}>
        <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);