import { useFormContext } from "react-hook-form";
import Select from "@/components/Select";
import Text from "@/components/Text";
import { estimatedTime } from "@/constants/data";
import { RidingFormValues } from "../PostForm";

function EstimatedTimeInput() {
  const { register } = useFormContext<RidingFormValues>();
  return (
    <div>
      <Text marginBottom variant="h6">
        소요 시간
      </Text>
      <Select
        data={estimatedTime.map((value) => ({
          text: value,
          key: value,
          value,
        }))}
        {...register("information.estimatedTime", { required: true })}
      />
    </div>
  );
}

export default EstimatedTimeInput;
