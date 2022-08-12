import { TypographyProps } from "@mui/material";
import Text from "@/components/Text";
import { Container } from "./WithLabel.style";
import { CustomTypographyProps } from "../Text/Text";

interface WithLabelProps {
  variant?: TypographyProps["variant"];
  label: string;
  caption?: string;
  children: any;
  wd?: number;
  isRequired?: boolean;
  labelProps?: Partial<CustomTypographyProps>;
}

const WithLabel = ({
  variant = "h5",
  label,
  children,
  caption,
  wd,
  isRequired,
  labelProps,
  ...props
}: WithLabelProps) => {
  return (
    <Container width={wd} {...props}>
      <Text variant={variant} {...labelProps}>
        {label}
        {isRequired && (
          <Text variant="caption" textStyle={{ color: "red" }}>
            &nbsp;*
          </Text>
        )}
        {caption && <Text variant="caption">&nbsp;{caption}</Text>}
      </Text>
      {children}
    </Container>
  );
};

export default WithLabel;
