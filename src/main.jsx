import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContextProvider from "./contexts/MainContext.jsx";
import CalculateContextProvider from "./contexts/CalculateContext.jsx";
import RiceContextProvider from "./contexts/RiceContext.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MainContextProvider>
      <CalculateContextProvider>
        <RiceContextProvider>
          <App />
        </RiceContextProvider>
      </CalculateContextProvider>
    </MainContextProvider>
  </React.StrictMode>
);
