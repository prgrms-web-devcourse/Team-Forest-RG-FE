import { RegisterOptions, useFormContext } from "react-hook-form";
import { Container, InputContainer, StyledInput } from "./MinMaxInput.style";
import Divider from "@/components/Divider";
import { RidingFormValues } from "../../PostForm";

interface MinMaxInputProps {
  required?: boolean;
}
function MinMaxInput({ required = false }: MinMaxInputProps) {
  const { register, getValues, getFieldState } =
    useFormContext<RidingFormValues>();

  const maxError = getFieldState("information.maxParticipantCount").error;
  const minError = getFieldState("information.minParticipantCount").error;

  const maxInputOptions: RegisterOptions = {
    valueAsNumber: true,
    required: required && "필수 입력사항입니다.",
    min: { value: 5, message: "최소 참가자 수는 5명입니다." },
    max: { value: 30, message: "최대 참가자 수는 30명입니다." },
    validate: {
      lessThanMax: (v) => {
        const minValue = getValues("information.minParticipantCount");
        return (
          !minValue ||
          v >= minValue ||
          "최대 참가자가 최소 참가자보다 적을 수 없습니다."
        );
      },
    },
  };

  const minInputOptions: RegisterOptions = {
    valueAsNumber: true,
    required: required && "필수 입력사항입니다.",
    min: { value: 5, message: "최소 참가자 수는 5명입니다." },
    max: { value: 30, message: "최대 참가자 수는 30명입니다." },
    validate: {
      biggerThanMax: (v) => {
        const maxValue = getValues("information.maxParticipantCount");
        return (
          !maxValue ||
          v <= maxValue ||
          "최소 참가자가 최대 참가자보다 많을 수 없습니다."
        );
      },
    },
  };

  return (
    <Container>
      <InputContainer>
        <StyledInput
          label="최소"
          type="number"
          {...register("information.minParticipantCount", minInputOptions)}
          error={!!maxError}
          errorMessage={maxError?.message}
        />
        <Divider direction="vertical" />
        <StyledInput
          label="최대"
          type="number"
          {...register("information.maxParticipantCount", maxInputOptions)}
          error={!!minError}
          errorMessage={minError?.message}
        />
      </InputContainer>
    </Container>
  );
}

export default MinMaxInput;
