import { RegisterOptions, useFormContext } from "react-hook-form";
import { Container, InputContainer, StyledInput } from "./MinMaxInput.style";
import Divider from "@/components/Divider";
import { RidingFormValues } from "../../PostForm";

interface MinMaxInputProps {
  required?: boolean;
}
function MinMaxInput({ required = false }: MinMaxInputProps) {
  const { register } = useFormContext<RidingFormValues>();
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const maxInputOptions: RegisterOptions = {
    valueAsNumber: true,
    required,
    max: { value: 30, message: "최대 참가자 수는 30명입니다." },
    validate: {
      lessThanMax: (v) =>
        !min || v >= min || "최대 참가자가 최소 참가자보다 적을 수 없습니다.",
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
        !max || v <= max || "최소 참가자가 최대 참가자보다 많을 수 없습니다.",
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      setMin(Number(e.target.value)),
  };

  return (
    <Container>
      <InputContainer>
        <StyledInput
          label="최소"
          type="number"
          {...register("information.minParticipantCount", minInputOptions)}
        />
        <Divider direction="vertical" />
        <StyledInput
          label="최대"
          type="number"
          {...register("information.maxParticipantCount", maxInputOptions)}
        />
      </InputContainer>
    </Container>
  );
}

export default MinMaxInput;
