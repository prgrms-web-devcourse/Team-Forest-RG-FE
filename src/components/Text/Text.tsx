import { Typography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps {
  variant?: TypographyProps["variant"];
  marginBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  align?: TypographyProps["align"];
  textStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Text = ({
  variant,
  marginBottom,
  noWrap,
  paragraph,
  align,
  textStyle,
  children,
}: CustomTypographyProps) => (
  <Typography
    variant={variant}
    gutterBottom={marginBottom}
    noWrap={noWrap}
    paragraph={paragraph}
    align={align}
    style={textStyle}
  >
    {children}
  </Typography>
);

export default Text;
