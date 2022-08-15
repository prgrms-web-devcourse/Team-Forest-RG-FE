import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import Input from "@/components/Input";
import {
  Container,
  InputContainer,
  LengthText,
  Section,
  TitleContainer,
} from "./ExpandableInput.style";
import Button from "@/components/Button";
import ImageInput from "./ImageInput";
import { RidingFormValues } from "../..";

interface ExpandableInputProps {
  imageUrls?: string[][];
}

function ExpandableInput({ imageUrls }: ExpandableInputProps) {
  const { control, register, getFieldState } =
    useFormContext<RidingFormValues>();
  const details = useWatch({
    control,
    name: "details",
  });
  const { fields, append, remove } = useFieldArray({
    name: "details",
    control,
  });
  return (
    <Container>
      {fields.map((field, index) => {
        const { error: titleError } = getFieldState(`details.${index}.title`);
        const { error: contentError } = getFieldState(
          `details.${index}.content`
        );
        return (
          <Section className="section" key={field.id}>
            <InputContainer>
              <TitleContainer>
                <Input
                  placeholder="소제목 (최대 30자)"
                  fullWidth
                  {...register(`details.${index}.title` as const, {
                    required: "필수 입력사항입니다.",
                    maxLength: {
                      value: 30,
                      message: "최대 길이는 30자 입니다.",
                    },
                  })}
                  error={!!titleError}
                  errorMessage={titleError?.message}
                />
                <Button color="error" onClick={() => remove(index)}>
                  섹션 삭제
                </Button>
              </TitleContainer>
              <Controller
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <ImageInput
                    onChange={onChange}
                    value={value}
                    inputRef={ref}
                    imageLimit={2}
                    defaultImages={imageUrls?.at(index)}
                  />
                )}
                name={`details.${index}.images`}
              />
              <Input
                multiline
                rows={6}
                placeholder="내용 (최대 500자)"
                {...register(`details.${index}.content` as const, {
                  required: "필수 입력사항입니다.",
                  maxLength: {
                    value: 500,
                    message: "최대 길이는 500자 입니다.",
                  },
                })}
                error={!!contentError}
                errorMessage={contentError?.message}
              />
              <LengthText
                variant="body1"
                color={
                  details[index].content.length <= 500 ? "#888" : "#b00000"
                }
              >
                {details[index].content.length} / 500
              </LengthText>
            </InputContainer>
          </Section>
        );
      })}
      <Button
        type="button"
        onClick={() => append({ title: "", images: [], content: "" })}
      >
        섹션 추가
      </Button>
    </Container>
  );
}

export default ExpandableInput;
