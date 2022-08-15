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
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#4AD395",
              color: "white",
            }),
        }),
      },
    },
  },
  typography: {
    fontFamily: [
      "SUIT-Medium",
      "Pretendard-Regular",
      "Roboto",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
