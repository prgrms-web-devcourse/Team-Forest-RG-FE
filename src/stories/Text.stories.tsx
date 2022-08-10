import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "@/components/Text";

export default {
  title: "MUI/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = () => (
  <>
    <Text>Default</Text>
    <Text variant="h1">h1</Text>
    <Text variant="h2">h2 타이포 그래피 테스트</Text>
  </>
);
