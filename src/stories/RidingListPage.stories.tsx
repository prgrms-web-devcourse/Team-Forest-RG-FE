import { ComponentMeta, ComponentStory } from "@storybook/react";
import RidingListPage from "@/pages/RidingListPage";

export default {
  title: "Pages/RidingListPage",
  component: RidingListPage,
} as ComponentMeta<typeof RidingListPage>;

export const Default: ComponentStory<typeof RidingListPage> = () => (
  <RidingListPage />
);
