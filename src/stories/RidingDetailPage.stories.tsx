import { ComponentMeta, ComponentStory } from "@storybook/react";
import RidingDetail from "@/pages/RidingDetail";

export default {
  title: "PAGE/RidingDetail",
  component: RidingDetail,
} as ComponentMeta<typeof RidingDetail>;

export const Page: ComponentStory<typeof RidingDetail> = () => <RidingDetail />;
