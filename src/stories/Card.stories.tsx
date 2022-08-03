import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "@emotion/styled";
import Card from "@/components/Card";
import Text from "@/components/Text";

export default {
  title: "MUI/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Content = (
  <div>
    <Text variant="subtitle1" align="center">
      This is Test
    </Text>
  </div>
);

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Default: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={Content} />
  </Wrapper>
);

const MediaOptions = {
  image: "https://source.unsplash.com/random/500x500",
  alt: "Random Image",
  component: "img",
  height: "140px",
};

export const WithMeida: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={Content} useMedia mediaOptions={MediaOptions} />
  </Wrapper>
);

const RgContent = (
  <>
    <Text variant="h3">Title</Text>
    <Text variant="subtitle1" marginBottom>
      Subtitle
    </Text>
    <Text variant="body1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Text>
  </>
);

export const RgCard: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={RgContent} useMedia mediaOptions={MediaOptions} />
  </Wrapper>
);
