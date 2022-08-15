import React, { RefObject } from "react";
import { TextFieldProps, InputAdornment } from "@mui/material";
import CustomInput from "./Input.style";

interface InputProps {
  label?: string;
  value?: any;
  color?: TextFieldProps["color"];
  customColor?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;
  usePrefix?: boolean;
  prefixPosition?: "start" | "end";
  prefixComponent?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  rowsMax?: number;
  fullWidth?: boolean;
  placeholder?: string;
  defaultValue?: string | number | Date;
  type?: string;
  onChange?: (...event: any) => void;
  onKeyDown?: (...event: any) => void;
  onBlur?: (...event: any) => void;
  inputRef?: RefObject<HTMLInputElement>;
  InputLabelProps?: TextFieldProps["InputLabelProps"];
}

type customInputProps = InputProps & TextFieldProps;

const Input = React.forwardRef<HTMLInputElement, customInputProps>(
  (
    {
      label,
      color,
      value,
      customColor,
      disabled,
      required,
      readOnly,
      fullWidth,
      error,
      errorMessage,
      usePrefix,
      prefixPosition,
      prefixComponent,
      multiline,
      rows,
      rowsMax,
      onChange,
      onKeyDown,
      onBlur,
      placeholder,
      defaultValue,
      InputLabelProps,
      type = "text",
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
        value={value}
        placeholder={placeholder}
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
          readOnly,
        }}
        inputRef={ref}
        customcolors={customColor}
        multiline={multiline}
        rows={rows}
        fullWidth={fullWidth}
        maxRows={rowsMax}
        defaultValue={defaultValue}
        InputLabelProps={InputLabelProps}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        {...props}
      />
    );
  }
);

export default Input;
