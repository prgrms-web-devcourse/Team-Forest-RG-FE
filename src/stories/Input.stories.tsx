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

/*
export const Default: ComponentStory<typeof Input> = () => <Input />;

export const WithLabel: ComponentStory<typeof Input> = () => (
  <Input label="hello" />
);

export const Required: ComponentStory<typeof Input> = () => (
  <Input label="required" required />
);

export const Error: ComponentStory<typeof Input> = () => (
  <Input label="error" error errorMessage="error!" />
);

export const Prefix: ComponentStory<typeof Input> = () => (
  <Input
    label="prefix"
    usePrefix
    prefixComponent={<span>@prefix</span>}
    prefixPosition="end"
  />
);
*/
