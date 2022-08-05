/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useEffect } from "react";
import { Step, Stepper as MuiStepper, StepLabel } from "@mui/material";
import Button from "@/components/Button";
import { ButtonBlock } from "./Stepper.style";
import ContentBlock from "./ContentBlock";

interface StepperProps {
  steps: string[];
  contents: JSX.Element[];
  finishedContent?: React.ReactNode;
  onFinalSubmit?: () => void;
}

const Stepper = ({
  steps,
  contents,
  finishedContent,
  onFinalSubmit,
}: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [currRefs, setCurrRefs] = useState<any>(null);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const CurrentComp = useMemo(
    () => contents[activeStep],
    [contents, activeStep]
  );

  useEffect(() => {
    setCurrRefs(CurrentComp);
  }, [CurrentComp]);

  return (
    <>
      <MuiStepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
      {activeStep === steps.length ? (
        <>
          {finishedContent}
          <ButtonBlock>
            <Button style={{ justifySelf: "flex-end" }} onClick={handleBack}>
              뒤로
            </Button>
          </ButtonBlock>
        </>
      ) : (
        <>
          {currRefs}
          <ContentBlock
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            stepLength={steps.length}
            ref={currRefs?.ref}
            onSubmit={onFinalSubmit}
          >
            {currRefs}
          </ContentBlock>
        </>
      )}
    </>
  );
};

export default Stepper;
