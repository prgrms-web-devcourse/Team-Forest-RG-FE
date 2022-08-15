import { Controller, useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import Input from "@/components/Input";
import Select from "@/components/Select";
import WithLabel from "@/components/WithLabel";
import Radio from "@/components/Radio";
import { levelData } from "@/constants/data";
import user, { RegisterData } from "@/api/user";
import {
  getYearOptions,
  MenuProps,
  RadioIconButton,
  regionOptions,
} from "../../registerService";
import { ButtonWrapper, StyledForm } from "./RegisterForm.style";
import Button from "@/components/Button";
import { BicycleTypeInput } from "@/components/PostForm/Inputs";
import Text from "@/components/Text";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterData>();
  const navigate = useNavigate();
  const location = useLocation();
  const nickNameByte = useWatch({ control, name: "nickname" });

  const { mutate, isError, error, isLoading } = useMutation(
    (data: any) => user.register(data),
    {
      onSuccess: () => {
        const from = (location.state as any)?.from || "/";
        navigate(from, { replace: true });
      },
    }
  );

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  return (
    <StyledForm>
      <div className="text">
        <Text variant="h6" fontWeight={600}>
          필수 정보
        </Text>
        <Text variant="body1">라이더 등록에 필수적인 정보입니다.</Text>
      </div>
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
        label="전화번호"
        variant="h6"
        isRequired
        labelProps={{ gutterBottom: true }}
        caption={`("-"제외)`}
        errorMessage={errors?.phoneNumber?.message}
      >
        <Input
          fullWidth
          placeholder="01012345678"
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
          name="level"
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
          defaultValue="중"
        />
      </WithLabel>
      <div className="text">
        <Text variant="h6" fontWeight={600}>
          추가 정보
        </Text>
        <Text variant="body1">
          추가 정보를 입력하면 자신에 더 알맞은 라이딩을 추천받을 수 있습니다.
        </Text>
      </div>
      <WithLabel
        label="시작년도"
        variant="h6"
        labelProps={{ gutterBottom: true }}
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
          defaultValue={0}
        />
      </WithLabel>
      <WithLabel
        label="선호지역"
        variant="h6"
        labelProps={{ gutterBottom: true }}
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
          defaultValue={0}
        />
      </WithLabel>

      <WithLabel
        label="자전거 종류"
        variant="h6"
        errorMessage={errors?.bicycles?.message}
        labelProps={{ gutterBottom: true }}
      >
        <Controller
          control={control}
          name="bicycles"
          render={({ field }) => <BicycleTypeInput {...field} />}
          defaultValue={[]}
        />
      </WithLabel>
      <div>
        {isError && (
          <Text variant="caption" color="#d32f2f">
            {(error as Error).message}
          </Text>
        )}
      </div>
      <ButtonWrapper>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button size="large" onClick={handleSubmit(onSubmit)}>
            입력 완료
          </Button>
        )}
      </ButtonWrapper>
    </StyledForm>
  );
};

export default RegisterForm;
