import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";
import StringToColor from "@/utils/StringToColor";

interface CustomAvatarProps extends AvatarProps {
  width?: number;
  height?: number;
  bgColor?: string;
  name?: string;
  useLetter?: boolean;
}

const Avatar = ({
  alt,
  children,
  src,
  variant,
  width,
  height,
  bgColor,
  useLetter,
  name = "",
  ...props
}: CustomAvatarProps) => {
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      variant={variant}
      sx={{
        width,
        height,
        bgColor: useLetter ? bgColor || StringToColor(name) : undefined,
        display: "inline-flex",
      }}
      // eslint-disable-next-line react/no-children-prop
      children={useLetter ? name[0] : children}
      {...props}
    />
  );
};

export default Avatar;
