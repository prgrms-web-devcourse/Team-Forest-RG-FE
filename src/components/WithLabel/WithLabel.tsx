import { TypographyProps } from "@mui/material";
import Text from "@/components/Text";
import { Container } from "./WithLabel.style";

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
