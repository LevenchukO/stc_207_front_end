import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import ThemeProvider from "app/providers/themeProvider/ui/ThemeProvider";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundariy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
    <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
