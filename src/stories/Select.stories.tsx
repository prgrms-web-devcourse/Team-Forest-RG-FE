import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ListItemText } from "@mui/material";
import Select from "@/components/Select";
import CheckBox from "@/components/CheckBox";

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

export const Default: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ width: "150px" }}>
      <Select
        label="default"
        value={value}
        onChange={handleChange}
        data={selectData}
      />
    </div>
  );
};

export const Sized = Template.bind({});
Sized.args = {
  size: "small",
};

export const ErrorWithMessage: ComponentStory<typeof Select> = () => (
  <div style={{ width: "150px" }}>
    <Select label="default" data={selectData} error errorMessage="Error!" />
  </div>
);

export const Disabled: ComponentStory<typeof Select> = () => (
  <div style={{ width: "150px" }}>
    <Select label="default" data={selectData} disabled />
  </div>
);

export const Multiple: ComponentStory<typeof Select> = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "150px" }}>
      <Controller
        name="multiple"
        control={control}
        defaultValue={[]}
        render={(field) => (
          <Select
            {...field}
            label="multi"
            data={selectData}
            multiple
            defaultValue={[]}
          />
        )}
      />
      <button type="submit">submit</button>
    </form>
  );
};

const CheckBoxItem = ({
  value,
  values,
}: {
  value: string;
  values: string[];
}) => {
  return (
    <>
      <CheckBox checked={values.indexOf(value) > -1} />
      <ListItemText primary={value} />
    </>
  );
};

type testType = {
  test: string[];
};

export const MultipleWithCheckBox: ComponentStory<typeof Select> = () => {
  const { control, handleSubmit } = useForm<testType>({
    defaultValues: {
      test: [],
    },
  });

  const watchTestData = useWatch({
    control,
    name: "test",
  });

  const checkBoxData = selectData.map((item) => ({
    ...item,
    text: <CheckBoxItem value={item.value} values={watchTestData} />,
  }));

  const onSubmit = (data: testType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "150px" }}>
      <Controller
        name="test"
        control={control}
        defaultValue={[]}
        render={({ field }) => {
          return (
            <Select
              label="tags"
              data={checkBoxData}
              {...field}
              multiple
              renderValue={(selected) => (selected as string[]).join(", ")}
            />
          );
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};
