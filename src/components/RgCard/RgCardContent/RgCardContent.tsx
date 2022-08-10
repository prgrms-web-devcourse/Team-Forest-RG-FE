import { Stack } from "@mui/material";
import Text from "@/components/Text";
import Chip from "@/components/Chip";

interface CardContentProps {
  title?: string | number;
  subtitle?: string | number;
  body?: string | number | React.ReactNode;
  tags?: {
    id: number;
    label: string;
  }[];
  chipSpacing?: number;
}

const RgCardContent = ({
  title,
  subtitle,
  body,
  tags,
  chipSpacing = 2,
}: CardContentProps) => (
  <>
    {title && <Text variant="h3">{title}</Text>}
    {subtitle && (
      <Text variant="subtitle1" marginBottom>
        {subtitle}
      </Text>
    )}
    <Stack direction="row" spacing={chipSpacing}>
      {tags?.map(({ id, label }) => (
        <Chip key={id} label={label} />
      ))}
    </Stack>
    {body && <Text variant="body1">{body}</Text>}
  </>
);

export default RgCardContent;
