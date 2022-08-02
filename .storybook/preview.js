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

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Global styles={reset} />
      <Story />
    </ThemeProvider>
  ),
];
