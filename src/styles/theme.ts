import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4AD395",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
