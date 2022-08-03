import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import App from "@/App";
import reset from "./styles/reset";

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CookiesProvider>
      <Global styles={reset} />
    </RecoilRoot>
  </QueryClientProvider>
);
