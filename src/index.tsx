import React from "react";
import "./app/styles/index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/ui/App";
import { StoreProvider } from "./app/ui/StoreProvider";
import { Web3Provider } from "src/app/ui/Web3Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StoreProvider>
    <Web3Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3Provider>
  </StoreProvider>
);
