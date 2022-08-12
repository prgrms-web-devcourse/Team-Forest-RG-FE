import { Typography, TypographyProps } from "@mui/material";

interface CustomTypographyProps {
  variant?: TypographyProps["variant"];
  marginBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  align?: TypographyProps["align"];
  textStyle?: React.CSSProperties;
  children?: React.ReactNode;
  color?: TypographyProps["color"];
  component?: React.ElementType;
}

const Text = ({
  variant,
  marginBottom,
  noWrap,
  paragraph,
  align,
  textStyle,
  children,
  color,
  component = "div",
  ...props
}: CustomTypographyProps & TypographyProps) => (
  <Typography
    variant={variant}
    gutterBottom={marginBottom}
    noWrap={noWrap}
    paragraph={paragraph}
    align={align}
    style={textStyle}
    color={color}
    component={component}
    {...props}
  >
    {children}
  </Typography>
);

export default Text;
