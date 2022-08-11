import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import { InputContainer } from "./ExpandableInput.style";
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
    <>
      {fields.map((field, index) => (
        <section className="section" key={field.id}>
          <InputContainer>
            <Input
              placeholder="소제목"
              {...register(`detail.${index}.title` as const, {
                required: true,
                maxLength: 30,
              })}
            />
            <Controller
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <ImageInput onChange={onChange} value={value} inputRef={ref} />
              )}
              name={`detail.${index}.images`}
            />
            <Input
              multiline
              rows={6}
              placeholder="내용"
              {...register(`detail.${index}.content` as const, {
                required: true,
                maxLength: 500,
              })}
            />
          </InputContainer>
          <Button onClick={() => remove(index)}>문단 삭제</Button>
        </section>
      ))}
      <Button
        type="button"
        onClick={() => append({ title: "", images: [], content: "" })}
      >
        문단 추가
      </Button>
    </>
  );
}

export default ExpandableInput;
