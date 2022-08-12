import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import Select from "@/components/Select";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import WithLabel from "@/components/WithLabel";
import Radio from "@/components/Radio";
import { bicycleTypeData, levelData } from "@/constants/data";
import user, { RegisterData } from "@/api/user";
import {
  getYearOptions,
  MenuProps,
  RadioIconButton,
  regionOptions,
} from "../../registerService";
import { StyledForm } from "./RegisterForm.style";
import Button from "@/components/Button";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterData>();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const parsedData = { ...data };
    if (!parsedData.bicycles) {
      parsedData.bicycles = [];
    }
    if (!parsedData.favoriteRegionCode) {
      parsedData.favoriteRegionCode = 0;
    }
    await user.register(data);
    navigate("/", { replace: true });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <WithLabel label="닉네임">
        <Input
          {...register("nickname", {
            required: "필요 데이터",
            minLength: { value: 2, message: "최소 2글자 이상 작성해주세요" },
            maxLength: { value: 8, message: "최대 8글자 이하로 작성해주세요" },
          })}
          error={!!errors?.nickname}
          errorMessage={errors?.nickname?.message}
        />
      </WithLabel>
      <WithLabel label="전화번호">
        <Input
          {...register("phoneNumber", {
            required: "필요 데이터",
            pattern: {
              value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
              message: "올바른 핸드폰 번호를 입력해주세요",
            },
          })}
          error={!!errors?.phoneNumber}
          errorMessage={errors?.phoneNumber?.message}
        />
      </WithLabel>
      <WithLabel label="시작년도" wd={200}>
        <Select
          data={getYearOptions(1980, 2022)}
          MenuProps={MenuProps}
          {...register("ridingStartYear")}
        />
      </WithLabel>
      <WithLabel label="선호지역" wd={200}>
        <Select
          data={regionOptions}
          MenuProps={MenuProps}
          {...register("favoriteRegionCode")}
        />
      </WithLabel>
      <WithLabel label="실력">
        <Radio
          id="level"
          data={levelData}
          row
          useCustomIcon
          icon={RadioIconButton}
          checkedIcon={RadioIconButton}
          defaultValue={levelData[1].value}
          {...register("level", {
            required: "필요 데이터",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("level", e.target.value);
            },
          })}
        />
      </WithLabel>
      <WithLabel label="자전거 종류">
        <ButtonCheckBoxGroup
          data={bicycleTypeData.map((type) => ({
            ...type,
            others: { btnStyle: { width: "6rem" }, style: {} },
          }))}
          variant="outlined"
          btnColor="#999"
          checkedBtnColor="primary"
          direction="horizontal"
          {...register("bicycles")}
        />
      </WithLabel>
      <Button type="submit" size="large">
        제출
      </Button>
    </StyledForm>
  );
};

export default RegisterForm;
