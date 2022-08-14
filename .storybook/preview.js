import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material";
import Theme from "@/styles/theme";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <Global styles={reset} />
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  ),
];
