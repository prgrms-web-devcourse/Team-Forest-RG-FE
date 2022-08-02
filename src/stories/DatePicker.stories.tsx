import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";
import DatePicker from "@/components/DatePicker";

export default {
  title: "MUI/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

export const Default: ComponentStory<typeof DatePicker> = () => (
  <DatePicker label="default" />
);

export const WithForm: ComponentStory<typeof DatePicker> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DatePicker label="hook-form" {...register("date")} />
      <button type="submit">Submit</button>
    </form>
  );
};
