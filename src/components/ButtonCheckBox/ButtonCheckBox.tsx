import {
  RgButton,
  RgButtonChecked,
  RgCustomCheckbox,
} from "./ButtonCheckBox.style";

interface ButtonCheckBoxProps {
  text: string | number;
  disableRipple?: boolean;
  btnColor?: string;
  checkedBtnColor?: string;
  btnStyle?: any; // custom style for button
}

const ButtonCheckBox = ({
  text,
  disableRipple,
  btnColor,
  checkedBtnColor,
  btnStyle,
  ...props
}: ButtonCheckBoxProps) => {
  return (
    <RgCustomCheckbox
      icon={
        <RgButton buttoncolor={btnColor} style={btnStyle}>
          {text}
        </RgButton>
      }
      checkedIcon={
        <RgButtonChecked checkedcolor={checkedBtnColor} style={btnStyle}>
          {text}
        </RgButtonChecked>
      }
      disableRipple={disableRipple}
      {...props}
    />
  );
};

export default ButtonCheckBox;
