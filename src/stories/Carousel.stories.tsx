import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navigation } from "swiper";
import styled from "@emotion/styled";
import Carousel from "@/components/Carousel";

export default {
  title: "others/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const DATA = [
  {
    id: 0,
    component: (
      <img
        src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg"
        alt="test"
      />
    ),
  },
  {
    id: 1,
    component: (
      <img
        src="https://cdn.pixabay.com/photo/2020/04/30/03/26/rufous-5111261_960_720.jpg"
        alt="test"
      />
    ),
  },
  {
    id: 2,
    component: (
      <img
        src="https://cdn.pixabay.com/photo/2022/07/24/11/26/fallow-deer-7341424_960_720.jpg"
        alt="test"
      />
    ),
  },
];

export const Default: ComponentStory<typeof Carousel> = () => (
  <Carousel data={DATA} />
);

const navOptions = {
  navigation: true,
  modules: [Navigation],
};

export const NavigationExample: ComponentStory<typeof Carousel> = () => (
  <Carousel data={DATA} options={navOptions} />
);

const Wrapper = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const WithStyle: ComponentStory<typeof Carousel> = () => (
  <Wrapper>
    <Carousel data={DATA} options={navOptions} />
  </Wrapper>
);
