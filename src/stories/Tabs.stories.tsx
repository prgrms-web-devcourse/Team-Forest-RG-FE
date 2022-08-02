import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "@/components/Tabs";

export default {
  title: "MUI/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const DATA = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
  { label: "Three", value: "three" },
];

const RENDER_DATA = [
  { value: "one", targetData: <span>Hello!</span> },
  { value: "two", targetData: <span>World!</span> },
  { value: "three", targetData: <span>Goodbye!</span> },
];

export const Default: ComponentStory<typeof Tabs> = () => (
  <Tabs data={DATA} renderData={RENDER_DATA} />
);
