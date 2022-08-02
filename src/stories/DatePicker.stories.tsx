import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePicker from "@/components/DatePicker";

export default {
  title: "MUI/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

export const Default: ComponentStory<typeof DatePicker> = () => (
  <DatePicker label="default" />
);
