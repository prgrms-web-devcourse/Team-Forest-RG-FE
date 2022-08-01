import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "@/components/CheckBox";

export default {
  title: "Mui/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const IconCheckBox: ComponentStory<typeof CheckBox> = () => (
  <CheckBox useIcon iconName="favorite_border" checkedIconName="favorite" />
);

export const WithLabel: ComponentStory<typeof CheckBox> = () => (
  <CheckBox label="With label" />
);

export const DefaultCheck: ComponentStory<typeof CheckBox> = () => (
  <CheckBox defaultCheck />
);

export const Size: ComponentStory<typeof CheckBox> = () => (
  <div>
    <CheckBox size="small" />
    <CheckBox size="medium" />
  </div>
);

export const CustomSize = Template.bind({});
CustomSize.args = {
  fontSize: 20,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  customColor: "red",
};
