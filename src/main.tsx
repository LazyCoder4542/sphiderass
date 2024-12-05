import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./context/theme";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider defaultTheme="light" enableSystem={false} enableColorScheme={false}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
