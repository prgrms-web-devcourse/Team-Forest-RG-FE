import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import reset from "@/styles/reset";
import App from "@/App";

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
