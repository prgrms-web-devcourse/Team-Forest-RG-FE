import React from "react";
import { TextFieldProps, InputAdornment } from "@mui/material";
import CustomInput from "./Input.style";

interface InputProps {
  label?: string;
  color?: TextFieldProps["color"];
  customColor?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  usePrefix?: boolean;
  prefixPosition?: "start" | "end";
  prefixComponent?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      color,
      customColor,
      disabled,
      required,
      error,
      errorMessage,
      usePrefix,
      prefixPosition,
      prefixComponent,
      ...props
    },
    ref
  ) => {
    const adornmentPosition =
      prefixPosition === "start" ? "startAdornment" : "endAdornment";

    return (
      <CustomInput
        label={label}
        color={color}
        disabled={disabled}
        required={required}
        error={error}
        helperText={error && errorMessage}
        InputProps={{
          [adornmentPosition]: usePrefix && (
            <InputAdornment position={prefixPosition || "start"}>
              {prefixComponent}
            </InputAdornment>
          ),
        }}
        ref={ref}
        customcolors={customColor}
        {...props}
      />
    );
  }
);

export default Input;
