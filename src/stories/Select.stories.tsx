import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material/Select";
import Select from "@/components/Select";

export default {
  title: "MUI/Select",
  component: Select,
  argTypes: {
    size: { control: "select", options: ["small", "medium"] },
  },
} as ComponentMeta<typeof Select>;

const selectData = [
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "2", text: "2" },
  { key: "3", value: "3", text: "3" },
  { key: "4", value: "4", text: "4" },
];

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: "150px" }}>
    <Select {...args} data={selectData} />
  </div>
);

export const Default: ComponentStory<typeof Select> = () => (
  <div style={{ width: "150px" }}>
    <Select label="default" data={selectData} />
  </div>
);

export const Sized = Template.bind({});
Sized.args = {
  size: "small",
};

export const ErroWithMessage: ComponentStory<typeof Select> = () => (
  <div style={{ width: "150px" }}>
    <Select label="default" data={selectData} error errorMessage="Error!" />
  </div>
);

export const Disabled: ComponentStory<typeof Select> = () => (
  <div style={{ width: "150px" }}>
    <Select label="default" data={selectData} disabled />
  </div>
);

type SelectType = {
  test: (string | number)[];
};

export const Multiple: ComponentStory<typeof Select> = () => {
  const { register, handleSubmit, setValue } = useForm<SelectType>({
    defaultValues: {
      test: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "150px" }}>
      <Select
        label="multiple"
        data={selectData}
        multiple
        {...register("test", {
          onChange: (e: SelectChangeEvent<SelectType["test"]>) => {
            const {
              target: { value },
            } = e;
            const newValue =
              typeof value === "string" ? value.split(",") : value;
            setValue("test", newValue);
          },
          value: [],
        })}
      />
    </form>
  );
};
