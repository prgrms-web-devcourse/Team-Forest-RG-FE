import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";
import FormStepper from "@/components/FormStepper";
import Input from "@/components/Input";

export default {
  title: "MUI/FormStepper",
  component: FormStepper,
} as ComponentMeta<typeof FormStepper>;

const Step1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ firstName: string; lastName: string }>();

  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <Input
            {...field}
            label="First Name"
            error={!!errors?.firstName}
            errorMessage={errors?.firstName?.message}
          />
        )}
        defaultValue=""
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => <Input {...field} />}
        defaultValue=""
      />
    </>
  );
};

const Step2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ address: string }>();

  return (
    <Controller
      control={control}
      name="address"
      render={({ field }) => (
        <Input
          {...field}
          error={!!errors.address}
          errorMessage={errors?.address?.message}
        />
      )}
      defaultValue=""
    />
  );
};

const Step3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<{ location: string }>();

  return (
    <Controller
      control={control}
      name="location"
      render={({ field }) => (
        <Input
          {...field}
          error={!!errors.location}
          errorMessage={errors?.location?.message}
        />
      )}
      defaultValue=""
    />
  );
};

const validationSchema = [
  yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  }),
  yup.object({
    address: yup.string().required(),
  }),
  yup.object({
    location: yup.string().required(),
  }),
];

export const Default: ComponentStory<typeof FormStepper> = () => {
  const steps = [
    { id: 0, label: "Step 1" },
    { id: 1, label: "Step 2" },
    { id: 2, label: "Step 3" },
  ];
  const contents = [
    { id: 0, content: <Step1 /> },
    { id: 1, content: <Step2 /> },
    { id: 2, content: <Step3 /> },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormStepper
      steps={steps}
      stepContents={contents}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};
