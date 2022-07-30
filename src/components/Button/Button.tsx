import { ButtonProps } from "@mui/material";
import CustomButton from "./Button.style";

interface CustomButtonProps extends ButtonProps {
  component?: string;
  customColor?: string;
  customHoverColor?: string;
  customTextColor?: string;
}

const MuiButton = ({
  children,
  variant,
  disabled,
  color,
  size,
  customColor,
  customHoverColor,
  customTextColor,
  ...props
}: CustomButtonProps) => {
  return (
    <CustomButton
      variant={variant || "contained"}
      color={color}
      size={size}
      disabled={disabled}
      customcolor={customColor}
      hovercolor={customHoverColor}
      fontcolor={customTextColor}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default MuiButton;
