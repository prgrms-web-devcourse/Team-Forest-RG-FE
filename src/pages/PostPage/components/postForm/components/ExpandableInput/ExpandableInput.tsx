import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import {
  Container,
  InputContainer,
  Section,
  TitleContainer,
} from "./ExpandableInput.style";
import Button from "@/components/Button";
import ImageInput from "./ImageInput";
import { RidingFormValues } from "../../PostForm";

function ExpandableInput() {
  const { control, register } = useFormContext<RidingFormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "detail",
    control,
  });
  return (
    <Container>
      {fields.map((field, index) => (
        <Section className="section" key={field.id}>
          <InputContainer>
            <TitleContainer>
              <Input
                placeholder="소제목 (최대 30자)"
                fullWidth
                {...register(`detail.${index}.title` as const, {
                  required: true,
                  maxLength: 30,
                })}
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
                />
              )}
              rules={{
                validate: {
                  maxImageNum: (value) => {
                    return (
                      value.length <= 2 || "최대 2개까지 추가할 수 있습니다."
                    );
                  },
                },
              }}
              name={`detail.${index}.images`}
            />
            <Input
              multiline
              rows={6}
              placeholder="내용 (최대 500자)"
              {...register(`detail.${index}.content` as const, {
                required: true,
                maxLength: 500,
              })}
            />
          </InputContainer>
        </Section>
      ))}
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
