import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CustomThemeProvider } from "./Theme/themeConfig";  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
