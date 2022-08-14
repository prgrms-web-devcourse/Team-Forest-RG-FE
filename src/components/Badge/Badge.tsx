import { BadgeProps } from "@mui/material";
import { StyledBadge } from "./Badge.style";

const Badge = (props: BadgeProps) => {
  return <StyledBadge {...props} />;
};

export default Badge;
