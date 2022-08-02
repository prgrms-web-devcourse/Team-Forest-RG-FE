import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonCheckBox from "@/components/ButtonCheckBox";

export default {
  title: "Custom/ButtonCheckBox",
  component: ButtonCheckBox,
} as ComponentMeta<typeof ButtonCheckBox>;

const Template: ComponentStory<typeof ButtonCheckBox> = (args) => (
  <ButtonCheckBox {...args} />
);

export const Default: ComponentStory<typeof ButtonCheckBox> = () => (
  <ButtonCheckBox text="ButtonCheckBox" disableRipple />
);

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: "ButtonCheckBox",
  disableRipple: true,
  btnColor: "red",
  checkedBtnColor: "blue",
};

const customStyle = {
  borderRadius: "20px",
};

export const CustomButtonStyle = Template.bind({});
CustomButtonStyle.args = {
  text: "ButtonCheckBox",
  disableRipple: true,
  btnColor: "red",
  checkedBtnColor: "blue",
  btnStyle: customStyle,
};
