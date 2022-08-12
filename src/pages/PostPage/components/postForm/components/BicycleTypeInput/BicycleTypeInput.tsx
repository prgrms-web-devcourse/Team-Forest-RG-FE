import { ChangeEvent, forwardRef } from "react";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import { bicycleTypeData } from "@/constants/data";

interface BicycleTypeInputProps {
  onChange?: (...event: any[]) => void;
  value?: string[];
}

const BicycleTypeInput = forwardRef<HTMLButtonElement, BicycleTypeInputProps>(
  ({ onChange, value }, ref) => {
    return (
      <ButtonCheckBoxGroup
        direction="horizontal"
        data={bicycleTypeData.map((item) => ({
          ...item,
          others: {
            btnStyle: { width: "6rem" },
            checked: value && value.includes(item.value),
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              if (!onChange) return;
              if (e.target.checked)
                onChange(value ? [...value, item.value] : [item.value]);
              else onChange(value?.filter((val) => val !== item.value));
            },
          },
        }))}
        variant="outlined"
        btnColor="#999"
        checkedBtnColor="primary"
        ref={ref}
      />
    );
  }
);

export default BicycleTypeInput;
