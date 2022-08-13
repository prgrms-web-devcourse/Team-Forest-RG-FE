import React from "react";
import {
  SelectProps,
  InputLabel,
  MenuItem,
  FormControl,
  Select as MuiSelect,
  FormHelperText,
} from "@mui/material";

interface CustomProps extends SelectProps {
  variant?: "standard" | "outlined" | "filled";
  label?: string;
  data: {
    key: string | number;
    value: string | number;
    text: string | number | React.ReactNode;
  }[];
  autoWidth?: boolean;
  size?: "small" | "medium";
  error?: boolean;
  errorMessage?: string | number;
  disabled?: boolean;
  placeholder?: string;
  placeholderValue?: string | number | readonly string[];
}

const Select = React.forwardRef<HTMLInputElement, CustomProps>(
  (
    {
      variant,
      label,
      data,
      autoWidth,
      size,
      error,
      errorMessage,
      disabled,
      placeholder,
      placeholderValue = "none",
      ...props
    },
    ref
  ) => {
    return (
      <FormControl
        variant={variant}
        size={size}
        error={error}
        disabled={disabled}
        fullWidth
      >
        {label && <InputLabel>{label}</InputLabel>}
        <MuiSelect label={label} autoWidth={autoWidth} {...props} ref={ref}>
          {placeholder && (
            <MenuItem key={placeholder} value={placeholderValue} disabled>
              {placeholder}
            </MenuItem>
          )}
          {data.map(({ key, value, text }) => (
            <MenuItem key={key} value={value}>
              {text}
            </MenuItem>
          ))}
        </MuiSelect>
        {error && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Select;
