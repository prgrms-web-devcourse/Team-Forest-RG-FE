/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
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
} from "@/pages/RegisterPage/registerService";
import { StyledForm } from "./ProfileModifyForm.style";
import Button from "@/components/Button";

interface ProfileModifyFormProps {
  userInfo: any;
}
const ProfileModifyForm = (props: ProfileModifyFormProps) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterData>({
    defaultValues: useMemo(() => {
      console.log("user Changed");
      console.log(props.userInfo);
      return props.userInfo;
    }, [props]),
  });

  useEffect(() => {
    console.log("reset");
    reset(props.userInfo);
  }, [props.userInfo]);

  // const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data);
    // await user.register(data);
    // navigate("/", { replace: true });
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

      <WithLabel label="시작년도" wd={200}>
        <Controller
          name="ridingStartYear"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              data={getYearOptions(1980, 2022)}
              value={value}
              MenuProps={MenuProps}
              onChange={onChange}
              ref={ref}
              {...register("ridingStartYear")}
            />
          )}
        />
      </WithLabel>
      <WithLabel label="선호지역" wd={200}>
        <Controller
          name="favoriteRegionCode"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              data={regionOptions}
              MenuProps={MenuProps}
              value={value}
              onChange={onChange}
              ref={ref}
              {...register("favoriteRegionCode")}
            />
          )}
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
          defaultValue={props.userInfo.level || levelData[1].value}
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

export default ProfileModifyForm;
