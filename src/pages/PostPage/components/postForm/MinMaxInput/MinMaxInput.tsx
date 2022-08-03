import { ChangeEvent, useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { Container, StyledInput } from "./MinMaxInput.style";

type MinMax = {
  min: number;
  max: number;
};
interface MinMaxInputProps {
  required?: boolean;
}
function MinMaxInput({ required = false }: MinMaxInputProps) {
  const { register } = useFormContext<MinMax>();
  const [min, setMin] = useState<number>(30);
  const [max, setMax] = useState<number>(5);

  const maxInputOptions: RegisterOptions = {
    valueAsNumber: true,
    required,
    max: { value: 30, message: "최대 참가자 수는 30명입니다." },
    validate: {
      lessThanMax: (v) =>
        v >= min || "최대 참가자가 최소 참가자보다 적을 수 없습니다.",
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      setMax(Number(e.target.value)),
  };

  const minInputOptions: RegisterOptions = {
    valueAsNumber: true,
    required,
    min: { value: 5, message: "최소 참가자 수는 5명입니다." },
    validate: {
      biggerThanMax: (v) =>
        v <= max || "최소 참가자가 최대 참가자보다 많을 수 없습니다.",
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      setMin(Number(e.target.value)),
  };

  return (
    <Container>
      <StyledInput
        label="최소"
        type="number"
        {...register("min", minInputOptions)}
      />
      <StyledInput
        label="최대"
        type="number"
        {...register("max", maxInputOptions)}
      />
    </Container>
  );
}

export default MinMaxInput;
