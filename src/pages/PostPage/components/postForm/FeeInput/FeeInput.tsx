import { useFormContext } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { ButtonContainer, StyledContainer } from "./FeeInput.style";
import Text from "@/components/Text";
import { RidingFormValues } from "../PostForm";

function FeeInput() {
  const { register } = useFormContext<RidingFormValues>();
  const [isPaid, setPaid] = useState<boolean>(false);
  return (
    <StyledContainer>
      <Text variant="h6">참가비</Text>
      <ButtonContainer>
        <Button
          customColor={isPaid ? "#999" : "primary"}
          onClick={() => setPaid(false)}
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
          fullWidth
          label="참가비"
          defaultValue={0}
          {...register("information.fee", { valueAsNumber: true })}
        />
      )}
    </StyledContainer>
  );
}

export default FeeInput;
