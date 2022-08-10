import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "@/components/Divider";

export default {
  title: "MUI/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = () => <Divider />;

export const ComponentSample: ComponentStory<typeof Divider> = () => (
  <Divider component="div" />
);
