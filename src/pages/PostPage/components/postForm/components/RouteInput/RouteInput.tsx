import { useFormContext } from "react-hook-form";
import { createRef, useCallback, useEffect, useState } from "react";
import { Breadcrumbs, Icon } from "@mui/material";
import { RidingFormValues } from "../../PostForm";
import { InputContainer, InvisibleWrapper } from "./RouteInput.style";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Chip from "@/components/Chip";

function RouteInput() {
  const { register, setValue, setError } = useFormContext<RidingFormValues>();
  const [route, setRoute] = useState<string[]>([]);
  const inputRef = createRef<HTMLInputElement>();

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if (e.target instanceof HTMLInputElement) {
        const inputValue = e.target.value;
        if (inputValue.length < 1) {
          setError("information.routes", {
            type: "custom",
            message: "1글자 이상 입력해주세요",
          });
        } else if (route.length >= 5) {
          setError("information.routes", {
            type: "custom",
            message: "5개까지 입력 가능합니다.",
          });
        } else {
          setRoute((prev) => [...prev, inputValue]);
          e.target.value = "";
        }
      }
    },
    [route, setError]
  );

  useEffect(() => {
    const chipInput = inputRef.current;
    chipInput?.addEventListener("keypress", handleKeydown);
    return () => {
      chipInput?.removeEventListener("keypress", handleKeydown);
    };
  }, [handleKeydown, inputRef]);

  useEffect(() => {
    setValue("information.routes", route, { shouldValidate: true });
  }, [route, setValue]);

  return (
    <div>
      <Text variant="h6">
        라이딩 코스<Text variant="caption"> (최대 5개)</Text>
      </Text>

      <InputContainer>
        <Input fullWidth ref={inputRef} />
        <Breadcrumbs
          separator={<Icon fontSize="small">arrow_forward_ios_icon</Icon>}
        >
          {route.map((item, index) => (
            <Chip
              label={item}
              key={item}
              variant="outlined"
              onDelete={() => {
                setRoute((prev) =>
                  prev.filter((_, prevIndex) => index !== prevIndex)
                );
              }}
            />
          ))}
        </Breadcrumbs>
      </InputContainer>
      <InvisibleWrapper>
        <Input
          {...register("information.routes", {
            required: true,
            validate: { maxLength: (value) => value.length <= 5 },
          })}
        />
      </InvisibleWrapper>
    </div>
  );
}

export default RouteInput;
