import React from "react";
import { CheckboxProps, FormControlLabel, Icon } from "@mui/material";
import CustomCheckBox from "./CheckBox.style";

interface CustomCheckboxProps extends CheckboxProps {
  label?: string;
  useIcon?: boolean;
  iconName?: string;
  checkedIconName?: string;
  defaultCheck?: boolean;
  fontSize?: number;
  customColor?: string;
}

const CheckBox = React.forwardRef<HTMLButtonElement, CustomCheckboxProps>(
  (
    {
      label,
      useIcon,
      iconName,
      checkedIconName,
      defaultCheck,
      fontSize,
      customColor,
      ...props
    },
    ref
  ) => {
    const checkBoxProp = {
      icon: useIcon ? <Icon>{iconName}</Icon> : undefined,
      checkedIcon: useIcon ? (
        <Icon className="material-icons-outlined">{checkedIconName}</Icon>
      ) : undefined,
      ref,
      defaultChecked: defaultCheck,
      customsize: fontSize,
      customcolor: customColor,
      ...props,
    };

    const RenderedCheckBox: JSX.Element = label ? (
      <FormControlLabel
        control={<CustomCheckBox {...checkBoxProp} />}
        label={label}
      />
    ) : (
      <CustomCheckBox {...checkBoxProp} />
    );

    return RenderedCheckBox;
  }
);

export default CheckBox;
