import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";

interface FormStepperProps {
  steps: { id: number; label: string }[];
  stepContents: { id: number; content: React.ReactNode }[];
  redirect?: { to: string };
  finishComponent?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: any) => void;

  validationSchema?: any[];
}

const FormStepper = ({
  finishComponent,
  onSubmit,
  steps = [],
  stepContents = [],
  validationSchema = [],
}: FormStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    mode: "onChange",
    resolver: yupResolver(currentSchema),
  });
  const { handleSubmit, trigger } = methods;

  const handleNext = async () => {
    const stepValid = await trigger();
    console.log(stepValid);
    if (stepValid) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onFinalSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map(({ id, label }) => (
          <Step key={id}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        finishComponent
      ) : (
        <FormProvider {...methods}>
          <form>
            {stepContents[activeStep].content}
            <div className="form-actions">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                이전
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleSubmit(onFinalSubmit)}>완료</Button>
              ) : (
                <Button onClick={handleNext}>다음</Button>
              )}
            </div>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default FormStepper;
