import { useFormContext } from "react-hook-form";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import { bicycleTypeData } from "@/constants/data";

type BicycleTypesValue = {
  bicycleTypes: string[];
};

function BycicleTypeInput({ required = false }: { required: boolean }) {
  const { register } = useFormContext<BicycleTypesValue>();
  return (
    <ButtonCheckBoxGroup
      direction="horizontal"
      data={bicycleTypeData.map((type) => ({
        ...type,
        others: { btnStyle: { width: "6rem" } },
      }))}
      label="자전거 종류"
      variant="outlined"
      btnColor="#999"
      checkedBtnColor="primary"
      {...register("bicycleTypes", { required })}
    />
  );
}

export default BycicleTypeInput;
