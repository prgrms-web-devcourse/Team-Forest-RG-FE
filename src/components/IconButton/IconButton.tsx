import { IconButton, IconButtonProps, Icon } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
  iconName: string;
  component?: string;
}

const MuiIconButton = ({
  iconName,
  children,
  ...props
}: CustomIconButtonProps) => (
  <IconButton {...props}>
    {children}
    <Icon>{iconName}</Icon>
  </IconButton>
);

export default MuiIconButton;
