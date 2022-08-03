import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import { InputContainer } from "./ExpandableInput.style";
import Button from "@/components/Button";

type Section = {
  title: string;
  image: string[];
  content: string;
};

type Sections = {
  sections: Section[];
};

function ExpandableInput() {
  const { control, register } = useFormContext<Sections>();
  const { fields, append, remove } = useFieldArray({
    name: "sections",
    control,
  });
  return (
    <>
      {fields.map((field, index) => (
        <section className="section" key={field.id}>
          <InputContainer>
            <Input
              label="소제목"
              {...register(`sections.${index}.title` as const, {
                required: true,
                maxLength: 30,
              })}
            />
            <input
              type="file"
              placeholder="image"
              multiple
              {...register(`sections.${index}.image` as const)}
            />
            <Input
              multiline
              rows={6}
              {...register(`sections.${index}.content` as const, {
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
        onClick={() => append({ title: "", image: [], content: "" })}
      >
        문단 추가
      </Button>
    </>
  );
}

export default ExpandableInput;
