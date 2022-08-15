import { forwardRef, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ButtonContainer, Container } from "./FeeInput.style";
import Text from "@/components/Text";

interface FeeInputProps {
  value: number;
  onChange?: (...event: any[]) => void;
}

const FeeInput = forwardRef<HTMLInputElement, FeeInputProps>(
  ({ value, onChange }, ref) => {
    const [isPaid, setPaid] = useState<boolean>(value !== 0);
    return (
      <Container>
        <ButtonContainer>
          <Button
            customColor={isPaid ? "#999" : "primary"}
            onClick={() => {
              setPaid(false);
              if (onChange) onChange();
            }}
          >
            없음
          </Button>
          <Button
            customColor={isPaid ? "primary" : "#999"}
            onClick={() => setPaid(true)}
          >
            있음
          </Button>
        </ButtonContainer>
        {isPaid && (
          <Input
            ref={ref}
            fullWidth
            value={value}
            onChange={onChange}
            usePrefix
            prefixPosition="end"
            prefixComponent={<Text>원</Text>}
          />
        )}
      </Container>
    );
  }
);

export default FeeInput;
