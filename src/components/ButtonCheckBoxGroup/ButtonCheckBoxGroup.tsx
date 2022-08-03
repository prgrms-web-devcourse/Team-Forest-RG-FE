import React from "react";
import { FormGroup, FormControl, FormLabel } from "@mui/material";
import ButtonCheckBox from "@/components/ButtonCheckBox";

interface ButtonCheckBoxGroupProps {
  data: {
    id: string | number;
    text: string | number;
    value: string | number;
    others?: any; // other props(optional)
  }[];
  btnColor?: string;
  checkedBtnColor?: string;
  btnStyle?: React.CSSProperties;
  label?: string;
  variant?: "filled" | "outlined" | "standard";
}

const ButtonCheckBoxGroup = React.forwardRef<
  HTMLButtonElement,
  ButtonCheckBoxGroupProps
>(
  (
    {
      btnColor,
      checkedBtnColor,
      btnStyle,
      label,
      variant = "standard",
      data = [],
      ...props
    },
    ref
  ) => (
    <FormControl component="fieldset" variant={variant}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <FormGroup>
        {data.map(({ id, text, value, others }) => (
          <ButtonCheckBox
            key={id}
            text={text}
            btnColor={btnColor}
            checkedBtnColor={checkedBtnColor}
            btnStyle={btnStyle}
            {...props}
            value={value}
            inputProps={{
              "data-id": text,
            }}
            inputRef={ref}
            disableRipple
            {...others} // other checkbox props(ex => style)
          />
        ))}
      </FormGroup>
    </FormControl>
  )
);

export default ButtonCheckBoxGroup;
