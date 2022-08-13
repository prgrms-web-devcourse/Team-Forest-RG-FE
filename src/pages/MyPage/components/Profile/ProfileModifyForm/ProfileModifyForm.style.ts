import styled from "@emotion/styled";

export const StyledForm = styled.form`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  column-gap: 5rem;

  div:first-of-type {
    grid-column: 1 / span 2;
  }

  div:nth-of-type(7) {
    grid-column: 1 / span 2;
  }

  button {
    grid-column: 1 / span 2;
    justify-self: flex-end;
    align-self: center;
  }
`;

export const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 2rem;
`;
