import styled from "@emotion/styled";

export const StyledForm = styled.form`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  div:nth-child(5) {
    grid-column: 1 / span 2;
  }

  div:nth-child(6) {
    grid-column: 1 / span 2;
  }

  button:nth-child(7) {
    grid-column: 1 / span 2;
  }
`;
