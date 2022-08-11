import Button from "@/components/Button";
import Text from "@/components/Text";

interface ButtonProps extends React.ComponentProps<typeof Button> {
  content: string;
}

const CustomButton = ({ content, ...props }: ButtonProps) => (
  <Button
    variant="text"
    size="small"
    disableRipple
    sx={{
      padding: 0,
      minWidth: "unset",
    }}
    customHoverColor="transparent"
    customTextColor="gray"
    {...props}
  >
    <Text variant="overline">{content}</Text>
  </Button>
);

export default CustomButton;
