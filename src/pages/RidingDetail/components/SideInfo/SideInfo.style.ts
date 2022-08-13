import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Spacer = styled.div`
    ${({ mt = 0, mb = 0 }: { mt?: number; mb?: number }) => css`
      margin-top: ${mt}px;
      margin-bottom: ${mb}px;
    `})}
`;
