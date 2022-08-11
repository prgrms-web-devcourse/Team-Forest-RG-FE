import { useFormContext } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { levelData, levelDetail } from "@/constants/data";
import Button from "@/components/Button";
import Radio from "@/components/Radio";
import Text from "@/components/Text";
import { RidingFormValues } from "../PostForm";

const RadioIconButton = ({
  label,
  type,
}: {
  label: string | number;
  type: string;
}) =>
  type === "checked" ? (
    <Button>{label}</Button>
  ) : (
    <Button customColor="#999">{label}</Button>
  );

function LevelInput({ required = false }: { required?: boolean }) {
  const { register } = useFormContext<RidingFormValues>();
  const [index, setIndex] = useState<number>(0);
  return (
    <div>
      <Text variant="h6">난이도</Text>
      <Radio
        row
        data={levelData}
        useCustomIcon
        icon={RadioIconButton}
        checkedIcon={RadioIconButton}
        {...register("information.level", {
          required,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            const nowValue = e.target.value;
            if (nowValue === "하") setIndex(0);
            if (nowValue === "중") setIndex(1);
            if (nowValue === "상") setIndex(2);
          },
        })}
      />
      <Text>{levelDetail[index]}</Text>
    </div>
  );
}

export default LevelInput;
