import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const CustomInput = styled(TextField)`
  border-color: ${({ customcolors }: { customcolors?: string }) =>
    customcolors};
`;

export default CustomInput;
