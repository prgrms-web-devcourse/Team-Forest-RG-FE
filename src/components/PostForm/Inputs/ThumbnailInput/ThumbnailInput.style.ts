import styled from "@emotion/styled";

export const Container = styled.div``;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: auto;
  height: 20rem;
  & label {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 1;
  }
  &::after {
    content: "";
    background-color: transparent;
    transition-property: background-color;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
  }
  &:hover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;
