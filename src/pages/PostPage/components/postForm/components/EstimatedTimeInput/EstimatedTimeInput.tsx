import { useFormContext } from "react-hook-form";
import Select from "@/components/Select";
import { estimatedTime } from "@/constants/data";
import { RidingFormValues } from "../../PostForm";

function EstimatedTimeInput() {
  const { register } = useFormContext<RidingFormValues>();
  return (
    <Select
      data={estimatedTime.map((value) => ({
        text: value,
        key: value,
        value,
      }))}
      {...register("information.estimatedTime", { required: true })}
    />
  );
}

export default EstimatedTimeInput;
