import {
  Dialog,
  DialogProps,
  DialogActions,
  DialogContent,
  DialogTitle,
  Portal,
} from "@mui/material";
import Button from "@/components/Button";

interface ModalProps extends DialogProps {
  label?: string | React.ReactNode;
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const Modal = ({
  label,
  open,
  onClose,
  onSubmit,
  children,
  ...props
}: ModalProps) => {
  const bodyEl = document.querySelector("body");
  return (
    <Portal container={bodyEl}>
      <Dialog open={open} onClose={onClose} scroll="paper" {...props}>
        {label && <DialogTitle>{label}</DialogTitle>}
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button color="error" onClick={onClose}>
            취소
          </Button>
          <Button color="primary" onClick={onSubmit}>
            신청
          </Button>
        </DialogActions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
