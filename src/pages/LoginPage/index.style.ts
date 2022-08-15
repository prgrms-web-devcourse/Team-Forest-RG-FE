import styled from "@emotion/styled";
import Button from "@/components/Button";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const KakaoButton = styled(Button)`
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 1rem 0;
  background-color: #fee500;
  color: black;
`;
