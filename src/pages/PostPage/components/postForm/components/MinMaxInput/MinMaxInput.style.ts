import styled from "@emotion/styled";
import Input from "@/components/Input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledInput = styled(Input)`
  flex-grow: 1;
`;
