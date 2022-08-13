import styled from "@emotion/styled";

export const Img = styled.img`
  border-radius: 0.5rem;
  width: 12rem;
  height: 9rem;
  object-fit: cover;
`;

export const ButtonWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -12px;
  right: -12px;
`;

export const Container = styled.div`
  position: relative;
  & button {
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
`;
