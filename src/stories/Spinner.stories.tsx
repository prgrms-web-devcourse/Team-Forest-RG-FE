import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "@emotion/styled";
import Spinner from "@/components/Spinner";

export default {
  title: "MUI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = () => <Spinner />;

const Dim = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: absolute;
  z-index: 1;
`;

const SpinnerContainer = styled.div`
  postion: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WithDim: ComponentStory<typeof Spinner> = () => (
  <SpinnerContainer>
    <Dim />
    <Spinner sx={{ zIndex: 10 }} />
  </SpinnerContainer>
);
