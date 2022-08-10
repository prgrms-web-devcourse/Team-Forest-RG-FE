import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Chip } from "@mui/material";

const StyledChip = styled(Chip)`
  ${({ bgcolor, textcolor }: { bgcolor?: string; textcolor?: string }) =>
    bgcolor &&
    textcolor &&
    css`
      background-color: ${bgcolor};
      color: ${textcolor};
    `}
`;

export default StyledChip;
