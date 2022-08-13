import { TypographyProps } from "@mui/material";
import { Container, TextWrapper } from "./WithLabel.style";
import Text, { CustomTypographyProps } from "../Text/Text";

interface WithLabelProps {
  variant?: TypographyProps["variant"];
  label: string;
  caption?: string;
  children: any;
  wd?: number;
  isRequired?: boolean;
  errorMessage?: string;
  labelProps?: Partial<CustomTypographyProps>;
}

const WithLabel = ({
  variant = "h5",
  label,
  children,
  caption,
  wd,
  isRequired,
  labelProps = {},
  errorMessage,
  ...props
}: WithLabelProps) => {
  return (
    <Container width={wd} {...props}>
      <TextWrapper>
        <Text variant={variant} {...labelProps}>
          {label}
        </Text>
        {isRequired && <Text textStyle={{ color: "red" }}>&nbsp;*</Text>}
        {caption && <Text variant="caption">&nbsp;{caption}</Text>}
        {errorMessage && (
          <Text textStyle={{ color: "#d32f2f" }} variant="caption">
            &nbsp;{errorMessage}
          </Text>
        )}
      </TextWrapper>
      {children}
    </Container>
  );
};

export default WithLabel;
