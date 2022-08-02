import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Radio } from "@mui/material";

interface CustomRadioProps {
  customsize?: number;
  customcolor?: string;
}

const CustomRadio = styled(Radio)<CustomRadioProps>`
  ${({ customsize }) =>
    customsize &&
    css`
      & .MuiSvgIcon-root {
        font-size: ${customsize}px;
      }
    `}
  ${({ customcolor }) =>
    customcolor &&
    css`
      color: ${customcolor};
      &.Mui-checked {
        color: ${customcolor};
      }
    `}
`;

export default CustomRadio;
