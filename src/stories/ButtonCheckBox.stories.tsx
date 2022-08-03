import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import ButtonCheckBox from "@/components/ButtonCheckBox";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";

export default {
  title: "Custom/ButtonCheckBox",
  component: ButtonCheckBox,
} as ComponentMeta<typeof ButtonCheckBox>;

const Template: ComponentStory<typeof ButtonCheckBox> = (args) => (
  <ButtonCheckBox {...args} />
);

export const Default: ComponentStory<typeof ButtonCheckBox> = () => (
  <ButtonCheckBox text="ButtonCheckBox" disableRipple />
);

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: "ButtonCheckBox",
  disableRipple: true,
  btnColor: "red",
  checkedBtnColor: "blue",
};

const customStyle = {
  borderRadius: "20px",
};

export const CustomButtonStyle = Template.bind({});
CustomButtonStyle.args = {
  text: "ButtonCheckBox",
  disableRipple: true,
  btnColor: "red",
  checkedBtnColor: "blue",
  btnStyle: customStyle,
};

const DATA = [
  { id: 0, text: "One", value: "one" },
  { id: 1, text: "Two", value: "two" },
  { id: 2, text: "Three", value: "three" },
  { id: 3, text: "Four", value: "four" },
];

type GroupTypes = {
  test: (string | number | undefined)[];
};

export const CustomButtonStyleGroup: ComponentStory<
  typeof ButtonCheckBoxGroup
> = () => {
  const { register, handleSubmit } = useForm<GroupTypes>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ButtonCheckBoxGroup
        label="ButtonCheckBoxGroup"
        data={DATA}
        {...register("test")}
      />
      <button type="submit">submit</button>
    </form>
  );
};
