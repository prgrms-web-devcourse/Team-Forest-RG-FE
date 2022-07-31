import React from "react";
import { CheckboxProps, FormControlLabel, Checkbox, Icon } from "@mui/material";

interface CustomCheckboxProps extends CheckboxProps {
  label?: string;
  useIcon?: boolean;
  iconName?: string;
  checkedIconName?: string;
}

const CheckBox = React.forwardRef<HTMLButtonElement, CustomCheckboxProps>(
  ({ label, useIcon, iconName, checkedIconName }, ref) => {
    const checkBoxProp = {
      icon: useIcon ? <Icon>{iconName}</Icon> : null,
      checkedIcon: useIcon ? (
        <Icon className="material-icons-outlined">{checkedIconName}</Icon>
      ) : null,
      ref,
    };

    const CustomCheckbox: JSX.Element = label ? (
      <FormControlLabel
        control={<CheckBox {...checkBoxProp} />}
        label={label}
      />
    ) : (
      <Checkbox {...checkBoxProp} />
    );

    return CustomCheckbox;
  }
);

export default CheckBox;
