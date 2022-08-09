import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import Select from "@/components/Select";
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import WithLabel from "@/components/WithLabel";
import Radio from "@/components/Radio";
import { bicycleTypeData, levelData } from "@/constants/data";
import user from "@/api/user";
import {
  getYearOptions,
  MenuProps,
  RadioIconButton,
  regionOptions,
} from "../../registerService";

const StyledForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RegisterForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
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
        />
      </WithLabel>
      <WithLabel label="전화번호">
        <Input
          {...register("phoneNumber", {
            required: "필요 데이터",
            // valueAsNumber: true,
            maxLength: { value: 11, message: "최대 11글자 제한" },
          })}
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
          {...register("bicycles")}
        />
      </WithLabel>

      <div>
        <button type="submit">제출</button>
      </div>
    </StyledForm>
  );
};

export default RegisterForm;
