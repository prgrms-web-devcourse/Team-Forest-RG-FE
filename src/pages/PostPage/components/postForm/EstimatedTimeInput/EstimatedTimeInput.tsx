import { useFormContext } from "react-hook-form";
import Select from "@/components/Select";
import Text from "@/components/Text";
import { estimatedTime } from "@/constants/data";

type EstimatedTimeValue = {
  estimatedTime: string;
};
function EstimatedTimeInput() {
  const { register } = useFormContext<EstimatedTimeValue>();
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
        {...register("estimatedTime", { required: true })}
      />
    </div>
  );
}

export default EstimatedTimeInput;
