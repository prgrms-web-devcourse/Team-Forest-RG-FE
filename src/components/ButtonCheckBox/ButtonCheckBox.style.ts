import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";

export const RgCustomCheckbox = styled(CheckBox)`
  &:hover {
    background-color: transparent;
  }
`;

export const RgButton = styled(Button)`
  ${({ buttoncolor }: { buttoncolor?: string }) =>
    buttoncolor &&
    css`
      background-color: ${buttoncolor};
    `}
`;

export const RgButtonChecked = styled(RgButton)`
  background-color: ${({ checkedcolor }: { checkedcolor?: string }) =>
    checkedcolor || "#ffc107"};
`;
