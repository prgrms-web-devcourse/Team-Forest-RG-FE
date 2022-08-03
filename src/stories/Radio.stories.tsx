import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import React from "react";
import Button from "@/components/Button";
import Radio from "@/components/Radio";

export default {
  title: "MUI/Radio",
  component: Radio,
  argTypes: {
    size: { control: "select", options: ["small", "medium"] },
  },
} as ComponentMeta<typeof Radio>;

const DATA = [
  { value: "1", dataLabel: "Option 1" },
  { value: "2", dataLabel: "Option 2" },
  { value: "3", dataLabel: "Option 3" },
  { value: "4", dataLabel: "Option 4", disabled: true },
];

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} data={DATA} />
);

export const Default: ComponentStory<typeof Radio> = () => (
  <Radio data={DATA} label="default" id="default-radio-example" />
);

export const NoLabel: ComponentStory<typeof Radio> = () => (
  <Radio data={DATA} id="no-label-radio-example" />
);

export const Direction = Template.bind({});
Direction.args = {
  label: "direction",
  id: "direction-radio-example",
  row: true,
};

export const Size = Template.bind({});
Size.args = {
  label: "size",
  id: "size-radio-example",
  size: "small",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  label: "custom size",
  id: "custom-size-radio-example",
  customSize: 20,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: "custom color",
  id: "custom-color-radio-example",
  customColor: "red",
};

export const WithForm: ComponentStory<typeof Radio> = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ test: string | number }>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Radio
        label="form test"
        id="form-test"
        data={DATA}
        {...register("test", {
          required: "필요 데이터",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue("test", e.target.value);
          },
        })}
        error={!!errors}
        errorMessage={errors?.test?.message}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const RadioIconButton = ({
  label,
  type,
}: {
  label: string | number;
  type: string;
}) =>
  type === "checked" ? (
    <Button customColor="#e74c3c">{label}</Button>
  ) : (
    <Button>{label}</Button>
  );

export const CustomIcon: ComponentStory<typeof Radio> = () => (
  <Radio
    label="custom icon"
    id="custom-icon-radio-example"
    useCustomIcon
    icon={RadioIconButton}
    checkedIcon={RadioIconButton}
    data={DATA}
  />
);
