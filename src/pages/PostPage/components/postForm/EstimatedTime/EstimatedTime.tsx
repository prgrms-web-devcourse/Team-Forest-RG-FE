import { useFormContext } from "react-hook-form";
import Select from "@/components/Select";
import Text from "@/components/Text";
import { estimatedTime } from "@/constants/data";

type EstimatedTimeInput = {
  estimatedTime: string;
};
function EstimatedTime() {
  const { register } = useFormContext<EstimatedTimeInput>();
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
        required
        {...register("estimatedTime")}
      />
    </div>
  );
}

export default EstimatedTime;
