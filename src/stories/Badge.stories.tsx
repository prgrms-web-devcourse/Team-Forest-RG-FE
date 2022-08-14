import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "@/components/Badge";
import IconButton from "@/components/IconButton";

export default {
  title: "MUI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Badge color="primary" badgeContent={2}>
      <IconButton
        iconName="notifications"
        color={clicked ? "error" : undefined}
        onClick={() => setClicked(!clicked)}
      />
    </Badge>
  );
};
