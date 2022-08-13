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
  useCustomIcon?: boolean;
  sx?: any;
  icon?: ({
    label,
    type,
  }: {
    label: string | number;
    type: string;
  }) => JSX.Element;
  checkedIcon?: ({
    label,
    type,
  }: {
    label: string | number;
    type: string;
  }) => JSX.Element;
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
      useCustomIcon,
      icon,
      checkedIcon,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <FormControl error={error} sx={sx}>
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
              sx={{ margin: 0 }}
              control={
                <CustomRadio
                  size={size}
                  customsize={customSize}
                  color={color}
                  customcolor={customColor}
                  icon={
                    useCustomIcon
                      ? icon && icon({ label: dataLabel, type: "notChecked" })
                      : undefined
                  }
                  checkedIcon={
                    useCustomIcon
                      ? checkedIcon &&
                        checkedIcon({ label: dataLabel, type: "checked" })
                      : undefined
                  }
                  ref={ref}
                />
              }
              label={useCustomIcon ? undefined : dataLabel}
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
