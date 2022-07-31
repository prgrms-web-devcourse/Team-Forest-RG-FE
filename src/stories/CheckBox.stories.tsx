import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "@/components/CheckBox";

export default {
  title: "Mui/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const IconCheckBox: ComponentStory<typeof CheckBox> = () => (
  <CheckBox useIcon iconName="favorite_border" checkedIconName="favorite" />
);
