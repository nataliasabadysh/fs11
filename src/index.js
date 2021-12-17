// Core
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";

// Pages
import App from "./App";

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);