import { CircularProgress, CircularProgressProps } from "@mui/material";
import { Dim, SpinnerContainer } from "./Spinner.style";

const Spinner = (props: CircularProgressProps) => (
  <SpinnerContainer>
    <Dim />
    <CircularProgress {...props} sx={{ zIndex: 10 }} />
  </SpinnerContainer>
);

export default Spinner;
