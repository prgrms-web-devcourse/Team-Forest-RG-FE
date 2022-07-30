import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  customcolor?: string;
  hovercolor?: string;
  fontcolor?: string;
}

const CustomButton = styled(Button)<CustomButtonProps>`
  ${({ customcolor, hovercolor }) => css`
    background-color: ${customcolor};
    &:hover {
      background-color: ${hovercolor || customcolor};
    }
  `}
  ${({ fontcolor }) =>
    !!fontcolor &&
    css`
      color: ${fontcolor};
    `}
`;

export default CustomButton;
