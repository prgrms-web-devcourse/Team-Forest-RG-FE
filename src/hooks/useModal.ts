import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  return {
    open,
    modalOpen,
    modalClose,
  };
};

export default useModal;
