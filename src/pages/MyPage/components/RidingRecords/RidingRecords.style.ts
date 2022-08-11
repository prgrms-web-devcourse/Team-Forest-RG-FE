import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const CardWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;
