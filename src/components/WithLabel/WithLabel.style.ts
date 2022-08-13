import styled from "@emotion/styled";

interface WithLabelProps {
  width?: number;
}

export const Container = styled.div<WithLabelProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
