/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { BicycleTypeInput } from "@/pages/PostPage/components/postForm/components";
import Input from "@/components/Input";
import Select from "@/components/Select";
import WithLabel from "@/components/WithLabel";
import Radio from "@/components/Radio";
import { levelData } from "@/constants/data";
import { RegisterData } from "@/api/user";
import {
  getYearOptions,
  MenuProps,
  RadioIconButton,
  regionOptions,
} from "@/pages/RegisterPage/registerService";
import { StyledForm } from "./ProfileModifyForm.style";
import Button from "@/components/Button";
import Text from "@/components/Text";
import ProfileImageInput from "./ProfileImageInput/ProfileImageInput";

interface ProfileModifyFormProps {
  profileData: any;
  onSubmit?: SubmitHandler<RegisterData>;
}
const ProfileModifyForm = ({
  profileData,
  onSubmit,
}: ProfileModifyFormProps) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  useEffect(() => {
    const data = profileData;
    if (!data) return;
    data.ridingLevel = data.level;
    delete data.level;
    reset(data);
  }, [profileData]);

  return (
    <>
      <Text variant="h4">프로필 수정</Text>
      <StyledForm>
        <WithLabel
          label="프로필 이미지"
          variant="h6"
          wd={200}
          labelProps={{ gutterBottom: true }}
        >
          <Controller
            control={control}
            name="profileImageId"
            render={({ field }) => <ProfileImageInput {...field} />}
          />
        </WithLabel>
        <WithLabel
          label="닉네임"
          variant="h6"
          labelProps={{ gutterBottom: true }}
          isRequired
          errorMessage={errors?.nickname?.message}
        >
          <Input
            {...register("nickname", {
              required: "필수 입력사항입니다.",
              minLength: { value: 2, message: "최소 2글자 이상 작성해주세요" },
              maxLength: {
                value: 8,
                message: "최대 8글자 이하로 작성해주세요",
              },
            })}
            error={!!errors?.nickname}
          />
        </WithLabel>

        <WithLabel
          label="시작년도"
          variant="h6"
          labelProps={{ gutterBottom: true }}
          isRequired
          errorMessage={errors?.ridingStartYear?.message}
          wd={200}
        >
          <Controller
            name="ridingStartYear"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                data={getYearOptions(1980, 2022)}
                value={value}
                MenuProps={MenuProps}
                onChange={onChange}
                placeholder="라이딩을 시작한 연도"
                placeholderValue={0}
                ref={ref}
                error={!!errors?.ridingStartYear}
              />
            )}
            rules={{
              validate: {
                required: (value) => value !== 0 || "필수 입력사항입니다.",
              },
            }}
            defaultValue={0}
          />
        </WithLabel>
        <WithLabel
          label="선호지역"
          variant="h6"
          labelProps={{ gutterBottom: true }}
          isRequired
          errorMessage={errors?.favoriteRegionCode?.message}
          wd={200}
        >
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
                placeholder="선호하는 지역"
                placeholderValue={0}
                error={!!errors?.favoriteRegionCode}
              />
            )}
            rules={{
              validate: {
                required: (value) => value !== 0 || "필수 입력사항입니다.",
              },
            }}
            defaultValue={0}
          />
        </WithLabel>
        <WithLabel
          label="실력"
          variant="h6"
          isRequired
          labelProps={{ gutterBottom: true }}
        >
          <Controller
            control={control}
            name="ridingLevel"
            render={({ field }) => (
              <Radio
                data={levelData}
                row
                useCustomIcon
                icon={RadioIconButton}
                checkedIcon={RadioIconButton}
                {...field}
              />
            )}
            defaultValue={profileData?.ridingLevel || levelData[1].value}
          />
        </WithLabel>
        <WithLabel
          label="자전거 종류"
          variant="h6"
          isRequired
          errorMessage={errors?.bicycles?.message}
          labelProps={{ gutterBottom: true }}
        >
          <Controller
            control={control}
            name="bicycles"
            render={({ field }) => <BicycleTypeInput {...field} />}
            rules={{ required: "1개 이상 선택해주세요." }}
            defaultValue={[]}
          />
        </WithLabel>
        <Button size="large" onClick={onSubmit && handleSubmit(onSubmit)}>
          수정 완료
        </Button>
      </StyledForm>
    </>
  );
};

export default ProfileModifyForm;
