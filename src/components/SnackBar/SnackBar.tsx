import { forwardRef } from "react";
import {
  Snackbar as MuiSnackBar,
  Alert,
  AlertProps,
  Slide,
  SlideProps,
} from "@mui/material";

const MuiAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} variant="filled" ref={ref} {...props} />;
});

const transitionUp = (props: SlideProps) => <Slide {...props} direction="up" />;

interface Props {
  open: boolean;
  message: string;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  isError: boolean;
  hideTimeout?: number;
}

const SnackBar = ({
  open,
  message,
  onClose,
  isError,
  hideTimeout = 6000,
}: Props) => {
  const severity = isError ? "error" : "success";

  return (
    <MuiSnackBar
      open={open}
      autoHideDuration={hideTimeout}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={transitionUp}
    >
      <MuiAlert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </MuiAlert>
    </MuiSnackBar>
  );
};

export default SnackBar;
