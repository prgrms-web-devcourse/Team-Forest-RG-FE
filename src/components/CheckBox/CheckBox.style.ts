import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Checkbox } from "@mui/material";

const CustomCheckBox = styled(Checkbox)`
  ${({
    customsize,
    customcolor,
  }: {
    customsize?: number;
    customcolor?: string;
  }) =>
    (customsize || customcolor) &&
    css`
      color: ${customcolor};
      &.Mui-checked {
        color: ${customcolor};
      }
      & .MuiSvgIcon-root {
        font-size: ${customsize}px;
      }
    `}
`;

export default CustomCheckBox;
