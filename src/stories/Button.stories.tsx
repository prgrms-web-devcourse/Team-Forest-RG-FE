import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";

export default {
  title: "MUI/Button",
  component: Button,
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error"],
    },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>test</Button>
);

export const Default: ComponentStory<typeof Button> = () => (
  <Button variant="contained">Hello</Button>
);

export const Variants = Template.bind({});
Variants.args = {
  variant: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ColorButton = Template.bind({});
ColorButton.args = {
  color: "primary",
};

export const Size = Template.bind({});
Size.args = {
  size: "small",
};

export const FileUpload: ComponentStory<typeof Button> = () => (
  <Button variant="contained" color="primary" component="label">
    Upload
    <input hidden accept="image/*" multiple type="file" />
  </Button>
);

export const IconButtonFileUpload: ComponentStory<typeof Button> = () => (
  <IconButton iconName="add_circle" component="label" color="primary">
    <input hidden accept="image/*" multiple type="file" />
  </IconButton>
);

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  customColor: "#e67e22",
  customHoverColor: "#d35400",
  customTextColor: "#fff",
};
