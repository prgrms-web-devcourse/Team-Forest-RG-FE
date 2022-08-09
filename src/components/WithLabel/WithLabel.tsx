import { TypographyProps } from "@mui/material";
import styled from "@emotion/styled";
import Text from "@/components/Text";

const Container = styled.div`
  width: ${({ width }: { width?: number }) => `${width}px`};
`;

interface WithLabelProps {
  variant?: TypographyProps["variant"];
  label: string;
  children: any;
  wd?: number;
}

const WithLabel = ({
  variant = "h5",
  label,
  children,
  wd,
  ...props
}: WithLabelProps) => {
  return (
    <Container width={wd} {...props}>
      <Text variant={variant}>{label}</Text>
      {children}
    </Container>
  );
};

export default WithLabel;
