import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Translator } from "react-translator-component";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/context";
import ThemeProvider from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ContextProvider>
        <Translator>
          <App />
        </Translator>
      </ContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
