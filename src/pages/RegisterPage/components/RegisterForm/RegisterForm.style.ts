import styled from "@emotion/styled";

export const StyledForm = styled.form`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;
  & > div.text {
    grid-column: 1 / span 2;
  }
  div:nth-of-type(8) {
    grid-column: 1 / span 2;
  }

  div:nth-of-type(4) {
    grid-column: 1 / span 2;
  }
`;
export const ButtonWrapper = styled.div`
  height: 4rem;
  width: 8rem;
  justify-self: end;
`;
