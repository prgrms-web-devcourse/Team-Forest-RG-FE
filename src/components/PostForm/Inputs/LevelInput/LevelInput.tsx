import { forwardRef } from "react";
import { levelData } from "@/constants/data";
import Button from "@/components/Button";
import Radio from "@/components/Radio";
import Text from "@/components/Text";
import { Container } from "./LevelInput.style";

const RadioIconButton = ({
  label,
  type,
}: {
  label: string | number;
  type: string;
}) =>
  type === "checked" ? (
    <Button>{label}</Button>
  ) : (
    <Button customColor="#999">{label}</Button>
  );

interface LevelInputProps {
  defaultValue?: number;
  value?: string;
}

const LevelInput = forwardRef<HTMLButtonElement, LevelInputProps>(
  ({ value, ...props }, ref) => {
    return (
      <Container>
        <Radio
          row
          ref={ref}
          data={levelData}
          useCustomIcon
          icon={RadioIconButton}
          checkedIcon={RadioIconButton}
          value={value}
          {...props}
        />
        <Text>
          {levelData.find((item) => item.value === value)?.description}
        </Text>
      </Container>
    );
  }
);

export default LevelInput;
