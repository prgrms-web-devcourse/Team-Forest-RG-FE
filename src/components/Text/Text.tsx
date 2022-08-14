import { Typography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps {
  variant?: TypographyProps["variant"];
  gutterBottom?: boolean;
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
  gutterBottom,
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
    gutterBottom={gutterBottom}
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
