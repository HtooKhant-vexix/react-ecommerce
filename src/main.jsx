import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StateContextProvider } from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </BrowserRouter>
);
