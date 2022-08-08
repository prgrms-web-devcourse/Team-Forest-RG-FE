import { ChipProps } from "@mui/material";
import StyledChip from "./Chip.style";

interface StyleChipProp {
  bgColor?: string;
  textColor?: string;
}

type CustomChipProps = ChipProps & StyleChipProp;

const Chip = ({ bgColor, textColor, ...props }: CustomChipProps) => (
  <StyledChip bgcolor={bgColor} textcolor={textColor} {...props} />
);

export default Chip;
