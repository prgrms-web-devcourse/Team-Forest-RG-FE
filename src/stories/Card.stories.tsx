import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Card from "@/components/Card";
import Text from "@/components/Text";
import Chip from "@/components/Chip";

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
  width: 300px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
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
  height: "200px",
};

export const WithMeida: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={Content} useMedia mediaOptions={MediaOptions} />
  </Wrapper>
);

const CHIPS = [
  { id: 0, label: "Chip 1" },
  { id: 1, label: "Chip 2" },
  { id: 2, label: "Chip 3" },
];

const RgContent = (
  <>
    <Text variant="h3">Title</Text>
    <Text variant="subtitle1">Subtitle</Text>
    <Stack direction="row" spacing={2} mb={2}>
      {CHIPS.map(({ id, label }) => (
        <Chip key={id} label={label} color="info" />
      ))}
    </Stack>
    <Text variant="body1" gutterBottom>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text
    </Text>
  </>
);

export const RgCard: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={RgContent} useMedia mediaOptions={MediaOptions} />
  </Wrapper>
);
