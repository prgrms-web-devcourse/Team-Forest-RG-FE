import { forwardRef, useMemo, useState } from "react";
import Select from "@/components/Select";
import { regionCode } from "@/constants/region";
import { Container } from "./RegionInput.style";

interface RegionInputProps {
  onChange?: (...event: any[]) => void;
  value?: number;
}

const RegionInput = forwardRef<HTMLInputElement, RegionInputProps>(
  ({ onChange, value }, ref) => {
    const [city, setCity] = useState<number>(0);

    const detailData = useMemo(() => {
      const result = regionCode
        .find(({ code }) => code === city)
        ?.detail.map(({ code, name }) => ({
          key: code,
          value: code,
          text: name,
        }));
      return result || [{ key: 0, value: 0, text: "" }];
    }, [city]);

    return (
      <Container>
        <Select
          placeholder="시/도"
          data={regionCode.map(({ code, name }) => ({
            key: code,
            value: code,
            text: name,
          }))}
          value={city || "none"}
          onChange={(e) => {
            setCity(Number(e.target.value));
            if (onChange) onChange(0);
          }}
          ref={ref}
        />

        <Select
          placeholder="시/군/구"
          disabled={city === 0}
          data={detailData}
          value={value || "none"}
          onChange={onChange}
          ref={ref}
        />
      </Container>
    );
  }
);

export default RegionInput;
