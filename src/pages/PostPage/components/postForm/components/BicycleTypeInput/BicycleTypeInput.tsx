import { useFormContext } from "react-hook-form";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import { bicycleTypeData } from "@/constants/data";
import Text from "@/components/Text";
import { RidingFormValues } from "../../PostForm";

function BicycleTypeInput({ required = false }: { required?: boolean }) {
  const { register } = useFormContext<RidingFormValues>();
  return (
    <div>
      <Text variant="h6">자전거 종류</Text>
      <ButtonCheckBoxGroup
        direction="horizontal"
        data={bicycleTypeData.map((type) => ({
          ...type,
          others: { btnStyle: { width: "6rem" }, style: {} },
        }))}
        variant="outlined"
        btnColor="#999"
        checkedBtnColor="primary"
        {...register("information.bicycleTypes", { required })}
      />
    </div>
  );
}

export default BicycleTypeInput;
