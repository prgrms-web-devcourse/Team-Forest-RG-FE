import { useFormContext } from "react-hook-form";
import { useMemo, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import Select from "@/components/Select";
import { regionCode } from "@/constants/region";
import Text from "@/components/Text";
import { InputContainer } from "./RegionInput.style";
import { RidingFormValues } from "../../PostForm";

function RegionInput() {
  const { register } = useFormContext<RidingFormValues>();
  const [cityCode, setCityCode] = useState<number>(0);
  const detailData = useMemo(() => {
    const result = regionCode
      .find(({ code }) => code === cityCode)
      ?.detail.map(({ code, name }) => ({
        key: code,
        value: code,
        text: name,
      }));
    return result || [{ key: 0, value: 0, text: "" }];
  }, [cityCode]);
  return (
    <div>
      <Text variant="h6" marginBottom>
        지역 및 장소
      </Text>
      <InputContainer>
        <Select
          label="시/도"
          data={regionCode.map(({ code, name }) => ({
            key: code,
            value: code,
            text: name,
          }))}
          required
          onChange={(e: SelectChangeEvent<unknown>) =>
            setCityCode(Number(e.target.value))
          }
        />
        <Select
          label="시/군/구"
          data={detailData}
          {...register("information.regionCode", {
            required: true,
            disabled: cityCode === 0,
          })}
        />
      </InputContainer>
    </div>
  );
}

export default RegionInput;
