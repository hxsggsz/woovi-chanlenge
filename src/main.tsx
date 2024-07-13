import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeManagerProvider } from "@/context/theme-context.tsx";
import Header from "@/components/header.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer.tsx";
import "./i18n";
import { AlertProvider } from "./context/alert-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeManagerProvider>
      <AlertProvider>
        <Header />
        <CssBaseline />
        <App />
        <Footer />
      </AlertProvider>
    </ThemeManagerProvider>
  </React.StrictMode>,
);