/* eslint-disable react/function-component-definition */
import { useForm } from "react-hook-form";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "@/components/Input";

export default {
  title: "MUI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("test")} {...args} />
      <button type="submit">Submit</button>
    </form>
  );
};

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  customColor: "#34495e",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: "Error message",
};

// rows => row수 고정, maxrow => 가변 길이
export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  rows: 4,
  rowsMax: 8,
};

export const Prefix = Template.bind({});
Prefix.args = {
  usePrefix: true,
  prefixPosition: "end",
  prefixComponent: <span>Prefix</span>,
};

export const InputWithReactHookForm: ComponentStory<typeof Input> = () => {
  type formInput = {
    test: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>();

  const onSubmit = (data: formInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("test", {
          required: "필요 데이터",
          maxLength: { value: 5, message: "최대 5글자 제한" },
        })}
        error={!!errors?.test}
        errorMessage={errors?.test?.message}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
