import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const CustomInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ customcolors }: { customcolors?: string }) =>
        customcolors};
    }
  }
`;

export default CustomInput;
