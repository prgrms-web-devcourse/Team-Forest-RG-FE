/* eslint-disable no-unused-vars */
import { forwardRef, useEffect, useState } from "react";
import { Portal } from "@mui/material";
import Button from "@/components/Button";
import { ButtonBlock, Spacer } from "../Stepper.style";

interface ContentBlockProps {
  children: any;
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  stepLength: number;
  onSubmit?: () => void;
}

const ButtonBlockComp = forwardRef<HTMLElement, ContentBlockProps>(
  (
    { handleNext, handleBack, activeStep, stepLength, children, onSubmit },
    ref
  ) => {
    const [targetForm, setTargetForm] = useState<any>(null);

    useEffect(() => {
      setTargetForm(children?.ref?.current);
    }, [children]);

    const finalSubmit = () => {
      if (onSubmit) {
        onSubmit();
      }
      handleNext();
    };

    return targetForm ? (
      <Portal container={targetForm}>
        <ButtonBlock>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            이전
          </Button>
          <Spacer />
          <Button
            onClick={activeStep === stepLength - 1 ? finalSubmit : handleNext}
            type="submit"
          >
            {activeStep === stepLength - 1 ? "완료" : "다음"}
          </Button>
        </ButtonBlock>
      </Portal>
    ) : (
      <div>fail</div>
    );
  }
);

export default ButtonBlockComp;
