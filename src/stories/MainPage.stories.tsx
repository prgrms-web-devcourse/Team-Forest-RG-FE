import MainPage from "@/pages/MainPage";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "pages/MainPage",
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

export const Default: ComponentStory<typeof MainPage> = () => <MainPage />;
