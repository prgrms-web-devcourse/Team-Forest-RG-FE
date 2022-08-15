import { Menu as MuiMenu, MenuProps, PaperProps } from "@mui/material";

interface Props {
  handleClose: () => void;
  targetEl: HTMLElement | null;
  menuOptions?: Omit<MenuProps, "open">;
  children: React.ReactNode;
}

const PaperStyle: Partial<PaperProps> = {
  style: {
    maxHeight: "12rem",
    width: "12rem",
  },
};

const Menu = ({ handleClose, targetEl, children, menuOptions = {} }: Props) => (
  <MuiMenu
    open={!!targetEl}
    anchorEl={targetEl}
    onClose={handleClose}
    PaperProps={PaperStyle}
    {...menuOptions}
  >
    {children}
  </MuiMenu>
);

export default Menu;
