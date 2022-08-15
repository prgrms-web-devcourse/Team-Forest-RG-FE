import styled from "@emotion/styled";
import Text from "@/components/Text";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Section = styled.section`
  margin: 1rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > button {
    align-self: flex-end;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  & button {
    flex-shrink: 0;
    max-height: 3.5rem;
  }
`;

export const LengthText = styled(Text)`
  position: absolute;
  right: 2.5rem;
  bottom: 1rem;
`;
