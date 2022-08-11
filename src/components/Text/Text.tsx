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
    {...props}
  >
    {children}
  </Typography>
);

export default Text;
