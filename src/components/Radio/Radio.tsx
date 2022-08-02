import React from "react";
import {
  RadioGroupProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import CustomRadio from "./Radio.style";

interface CustomRadioProps extends RadioGroupProps {
  id?: string;
  label?: string | number;
  data: {
    value: string | number;
    dataLabel: string | number;
    disabled?: boolean;
  }[];
  row?: boolean;
  size?: "small" | "medium";
  customSize?: number;
  color?: "primary" | "secondary" | "default";
  customColor?: string;
  error?: boolean;
  errorMessage?: string;
  defaultValue?: string | number;
}

const Radio = React.forwardRef<HTMLButtonElement, CustomRadioProps>(
  (
    {
      id,
      label,
      data,
      row,
      size,
      customSize,
      color,
      customColor,
      error,
      errorMessage,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <FormControl error={error}>
        {label && (
          <FormLabel id={id} error={error} color={error ? "error" : "primary"}>
            {label}
          </FormLabel>
        )}
        <RadioGroup
          aria-labelledby={id}
          row={row}
          defaultValue={defaultValue || data[0].value}
          {...props}
        >
          {data.map(({ value, dataLabel, disabled }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={
                <CustomRadio
                  size={size}
                  customsize={customSize}
                  color={color}
                  customcolor={customColor}
                  ref={ref}
                />
              }
              label={dataLabel}
              disabled={disabled}
            />
          ))}
        </RadioGroup>
        {error && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    );
  }
);

export default Radio;
