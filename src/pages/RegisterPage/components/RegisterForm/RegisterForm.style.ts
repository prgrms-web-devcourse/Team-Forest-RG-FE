import styled from "@emotion/styled";

export const StyledForm = styled.form`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  div:nth-of-type(5) {
    grid-column: 1 / span 2;
  }

  div:nth-of-type(6) {
    grid-column: 1 / span 2;
  }

  & > button {
    grid-column: 1 / span 2;
    width: 8rem;
    justify-self: end;
  }
`;
