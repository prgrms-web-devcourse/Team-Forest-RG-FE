import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Chip } from "@mui/material";

const StyledChip = styled(Chip)`
  ${({ bgcolor, textcolor }: { bgcolor?: string; textcolor?: string }) =>
    css`
      ${bgcolor && `background-color: ${bgcolor}`}
      ${textcolor && `color: ${textcolor}`}
    `}
`;

export default StyledChip;
