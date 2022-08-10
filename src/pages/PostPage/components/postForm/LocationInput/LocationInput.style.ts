import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  & button {
    flex-shrink: 0;
  }
`;
export const PostSearchWrapper = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 2;
  top: 4rem;
  width: 42rem;
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;
`;
