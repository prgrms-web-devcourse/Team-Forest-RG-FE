import { Divider as MuiDivider } from "@mui/material";

interface CustomDividerProps {
  variant?: "fullWidth" | "inset" | "middle";
  direction?: "horizontal" | "vertical";
  textAlign?: "left" | "center" | "right";
  flexItem?: boolean;
  children?: React.ReactNode;
  component?: React.ElementType;
}

const Divider = ({
  variant,
  direction,
  textAlign,
  flexItem,
  children,
  ...props
}: CustomDividerProps) => (
  <MuiDivider
    variant={variant}
    orientation={direction}
    textAlign={textAlign}
    flexItem={flexItem}
    {...props}
  >
    {children}
  </MuiDivider>
);

export default Divider;
