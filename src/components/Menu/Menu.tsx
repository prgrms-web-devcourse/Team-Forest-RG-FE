import { Menu as MuiMenu, MenuProps } from "@mui/material";

interface Props {
  handleClose: () => void;
  targetEl: HTMLElement | null;
  menuOptions?: Omit<MenuProps, "open">;
  children: React.ReactNode;
}

const Menu = ({ handleClose, targetEl, children, menuOptions = {} }: Props) => (
  <MuiMenu
    open={!!targetEl}
    anchorEl={targetEl}
    onClose={handleClose}
    PaperProps={{
      style: {
        maxHeight: "500px",
      },
    }}
    {...menuOptions}
  >
    {children}
  </MuiMenu>
);

export default Menu;
