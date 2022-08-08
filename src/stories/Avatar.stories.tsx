import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "@/components/Avatar";

export default {
  title: "MUI/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const imgUrl = "https://mygbs.s3.ap-northeast-2.amazonaws.com/selfi.jpg";

export const Default: ComponentStory<typeof Avatar> = () => (
  <Avatar alt="자신사진" src={imgUrl} />
);

export const WithLetter: ComponentStory<typeof Avatar> = () => (
  <Avatar useLetter name="James Cameron" />
);
