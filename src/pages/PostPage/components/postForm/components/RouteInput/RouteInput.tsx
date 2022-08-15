import { ChangeEvent, forwardRef, useCallback, useState } from "react";
import { Breadcrumbs, Icon } from "@mui/material";
import { Container } from "./RouteInput.style";
import Input from "@/components/Input";
import Chip from "@/components/Chip";

interface RouteInputProps {
  onChange: (...event: any) => void;
  onBlur?: (...event: any) => void;
  value?: string[];
  error?: boolean;
  errorMessage?: string;
}

const RouteInput = forwardRef<HTMLInputElement, RouteInputProps>(
  ({ onChange, onBlur, value = [], error, errorMessage }, ref) => {
    const [customError, setCustomError] = useState<{
      error: boolean;
      message: string;
    }>({ error: false, message: "" });
    const [inputValue, setInputValue] = useState<string>("");

    const handleKeydown = useCallback(
      (e: any) => {
        setCustomError({ error: false, message: "" });
        if (e.key !== "Enter") return;
        e.preventDefault();

        if (inputValue.length < 1) {
          setCustomError({ error: true, message: "1글자 이상 입력해주세요" });
        } else if (inputValue.length >= 15) {
          setCustomError({
            error: true,
            message: "최대 15자 입력 가능합니다.",
          });
        } else if (value.length >= 5) {
          setCustomError({
            error: true,
            message: "5개까지 추가할 수 있습니다.",
          });
        } else {
          onChange([...value, inputValue]);
          setInputValue("");
        }
      },
      [inputValue, onChange, value]
    );

    return (
      <>
        <Container>
          <Input
            fullWidth
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={handleKeydown}
            onBlur={() => {
              if (onBlur) onBlur();
              setCustomError({ error: false, message: "" });
            }}
            placeholder="행선지 추가 (최대 15자)"
            error={customError.error || error}
            errorMessage={customError.message || errorMessage}
          />
          <Breadcrumbs
            separator={<Icon fontSize="small">arrow_forward_ios_icon</Icon>}
          >
            {value.map((item, index) => (
              <Chip
                label={item}
                key={item}
                variant="outlined"
                onDelete={() => {
                  onChange(value.filter((_, prevIndex) => index !== prevIndex));
                }}
              />
            ))}
          </Breadcrumbs>
        </Container>
        <input hidden readOnly ref={ref} />
      </>
    );
  }
);

export default RouteInput;
