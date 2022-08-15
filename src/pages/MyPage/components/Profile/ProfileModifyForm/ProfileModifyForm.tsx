/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useEffect, useRef } from "react";
import { UserInfo } from "response";
import { BicycleTypeInput } from "@/components/PostForm/Inputs";
import Input from "@/components/Input";
import Select from "@/components/Select";
import WithLabel from "@/components/WithLabel";
import Radio from "@/components/Radio";
import { levelData } from "@/constants/data";
import { ProfileData } from "@/api/user";
import {
  getYearOptions,
  MenuProps,
  RadioIconButton,
  regionOptions,
} from "@/pages/RegisterPage/registerService";
import { HeaderContainer, StyledForm } from "./ProfileModifyForm.style";
import Button from "@/components/Button";
import ProfileImageInput from "./ProfileImageInput/ProfileImageInput";

interface ProfileModifyFormProps {
  profileData: any;
  onSubmit?: SubmitHandler<ProfileData>;
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
  } = useForm<ProfileData>();
  const imageUrl = useRef<string>();
  const nickNameByte = useWatch({ control, name: "nickname" });
  const introductionByte = useWatch({ control, name: "introduction" });

  useEffect(() => {
    const data: UserInfo = profileData;
    if (!data) return;
    const { profileImage, level, ...ridingData } = data.ridingProfile;
    const formData: ProfileData = {
      ...ridingData,
      phoneNumber: data.privacyProfile.phoneNumber,
      ridingLevel: level,
      profileImageId: null,
    };
    imageUrl.current = profileImage;
    reset(formData);
  }, [profileData]);

  return (
    <StyledForm>
      <HeaderContainer>
        <Controller
          control={control}
          name="profileImageId"
          render={({ field: { onChange, ref } }) => (
            <ProfileImageInput
              defaultUrl={imageUrl.current}
              ref={ref}
              onChange={onChange}
            />
          )}
        />
        <WithLabel
          label="한 줄 소개"
          variant="subtitle1"
          caption={
            !errors?.introduction
              ? `최대 255바이트 (${
                  new TextEncoder().encode(introductionByte).length
                }byte)`
              : undefined
          }
          errorMessage={errors?.introduction?.message}
          labelProps={{ gutterBottom: true }}
        >
          <Input
            multiline
            rows={3}
            fullWidth
            placeholder="간단한 소개해보세요😊"
            {...register("introduction")}
          />
        </WithLabel>
      </HeaderContainer>
      <WithLabel
        label="닉네임"
        variant="h6"
        labelProps={{ gutterBottom: true }}
        isRequired
        caption={
          !errors?.nickname
            ? `6~24바이트 (${
                new TextEncoder().encode(nickNameByte).length
              }byte)`
            : undefined
        }
        errorMessage={errors?.nickname?.message}
      >
        <Input
          fullWidth
          {...register("nickname", {
            required: "필수 입력사항입니다.",
            validate: {
              minbyteLength: (value: string) => {
                const byteLength = new TextEncoder().encode(value).length;
                return (
                  byteLength >= 6 ||
                  `6byte 이상 입력해주세요. (현재 ${byteLength}byte)`
                );
              },
              maxbyteLength: (value: string) => {
                const byteLength = new TextEncoder().encode(value).length;
                return (
                  byteLength <= 24 ||
                  `24byte 이하로 입력해주세요. (현재 ${byteLength}byte)`
                );
              },
            },
            pattern: {
              value: /^[가-힣|a-z|A-Z|]+$/,
              message: "한글과 영어만 가능합니다.",
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
        label="전화번호"
        variant="h6"
        isRequired
        labelProps={{ gutterBottom: true }}
        errorMessage={errors?.phoneNumber?.message}
      >
        <Input
          fullWidth
          type="number"
          {...register("phoneNumber", {
            required: "필수 입력사항입니다.",
            pattern: {
              value: /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
              message: "올바르지 않은 형식입니다.",
            },
          })}
          error={!!errors?.phoneNumber}
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
  );
};

export default ProfileModifyForm;
