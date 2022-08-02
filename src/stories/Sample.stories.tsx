import { Button } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Sample",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
export const Default: ComponentStory<typeof Button> = () => (
  <Button>Hello</Button>
);
