import React from "react";
import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";
import StringToColor from "@/utils/StringToColor";

interface CustomAvatarProps extends AvatarProps {
  width?: number;
  height?: number;
  bgColor?: string;
  name?: string;
  useLetter?: boolean;
  children?: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, CustomAvatarProps>(
  (
    { width, height, bgColor, useLetter, name = "", children, ...props },
    ref
  ) => {
    return (
      <MuiAvatar
        sx={{
          width,
          height,
          bgColor: useLetter ? bgColor || StringToColor(name) : undefined,
          display: "inline-flex",
        }}
        // eslint-disable-next-line react/no-children-prop
        children={useLetter ? name[0] : children}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Avatar;
