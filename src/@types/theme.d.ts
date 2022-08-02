declare module "@mui/material/styles" {
  interface Theme {
    status: {
      primary: string;
    };
    palette: {
      primary: {
        main: string;
      };
    };
  }
  interface ThemeOptions {
    status?: {
      primary?: string;
    };
    palette?: {
      primary?: {
        main: string;
      };
    };
  }
  // eslint-disable-next-line no-unused-vars
  export function createTheme(options: ThemeOptions): Theme;
}
