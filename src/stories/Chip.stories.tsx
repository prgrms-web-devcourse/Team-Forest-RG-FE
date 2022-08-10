/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "@mui/material";
import Chip from "@/components/Chip";

export default {
  title: "MUI/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStory<typeof Chip> = () => (
  <Chip label="Default" />
);

export const Outlined: ComponentStory<typeof Chip> = () => (
  <Chip label="Outlined" variant="outlined" />
);

export const ActionChips: ComponentStory<typeof Chip> = () => (
  <Chip label="Action" onClick={() => console.log("clicked!")} />
);

export const DeleteableChips: ComponentStory<typeof Chip> = () => (
  <Chip label="Deleteable" onDelete={() => console.log("deleted!")} />
);

export const IconChips: ComponentStory<typeof Chip> = () => (
  <Chip
    label="Icon"
    icon={<Icon>account_circle</Icon>}
    onDelete={() => console.log("deleted!")}
    deleteIcon={<Icon>favorite</Icon>}
  />
);

export const Color: ComponentStory<typeof Chip> = () => (
  <Chip label="Color" color="primary" />
);

export const CustomColor: ComponentStory<typeof Chip> = () => (
  <Chip label="Custom Color" bgColor="#f50057" textColor="white" />
);
