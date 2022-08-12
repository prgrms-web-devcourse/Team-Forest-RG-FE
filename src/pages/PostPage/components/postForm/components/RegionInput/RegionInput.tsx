import { forwardRef, useMemo } from "react";
import Select from "@/components/Select";
import { regionCode } from "@/constants/region";
import { Container } from "./RegionInput.style";

interface RegionInputProps {
  onChange?: (...event: any[]) => void;
  value?: number;
}

const RegionInput = forwardRef<HTMLInputElement, RegionInputProps>(
  ({ onChange, value }, ref) => {
    const cityCode = value && Math.floor(value / 1000);

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
      <Container>
        <Select
          label="시/도"
          data={regionCode.map(({ code, name }) => ({
            key: code,
            value: code,
            text: name,
          }))}
          value={value && Math.floor(value / 1000)}
          onChange={(e) => {
            if (onChange) onChange(Number(e.target.value) * 1000);
          }}
          ref={ref}
        />

        <Select
          label="시/군/구"
          data={detailData}
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </Container>
    );
  }
);

export default RegionInput;
