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
  onClose?: () => void;
  onSubmit?: () => void;
  closeText?: string;
  submitText?: string;
}

const Modal = ({
  label,
  open,
  onClose,
  onSubmit,
  closeText,
  submitText,
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
          {onClose && (
            <Button color="error" onClick={onClose}>
              {closeText || "취소"}
            </Button>
          )}
          {onSubmit && (
            <Button color="primary" onClick={onSubmit}>
              {submitText || "확인"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
