import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import dayjs from "dayjs";
import { ChangeEvent } from "react";
import utc from "dayjs/plugin/utc";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import {
  BicycleTypeInput,
  ExpandableInput,
  FeeInput,
  LevelInput,
  LocationInput,
  MinMaxInput,
  RegionInput,
  RouteInput,
  ThumbnailInput,
} from "./components";
import { Form, TwoColumnContainer } from "./PostForm.style";
import WithLabel from "@/components/WithLabel";
import { estimatedTime } from "@/constants/data";
import Select from "@/components/Select";
import defaultThumbnail from "@/assets/RG_Logo.png";

dayjs.extend(utc);

type Section = {
  title: string;
  images: number[];
  content: string;
};

export interface RidingFormValues {
  information: {
    title: string;
    ridingDate: Date | string;
    minParticipantCount: number;
    maxParticipantCount: number;
    bicycleTypes: string[];
    level: string;
    estimatedTime: string;
    regionCode: number;
    departurePlace: {
      lat: number;
      lng: number;
    };
    thumbnail: number | null;
    fee: number;
    routes: string[];
  };
  details: Section[];
}

interface PostFormProps {
  onSubmit: SubmitHandler<RidingFormValues>;
  defaultValues?: Partial<RidingFormValues>;
}

function PostForm({
  onSubmit,
  defaultValues = {
    details: [{ title: "", images: [], content: "" }],
  },
}: PostFormProps) {
  const methods = useForm<RidingFormValues>({
    defaultValues,
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <Form>
        <Controller
          control={control}
          name="information.thumbnail"
          render={({ field }) => (
            <ThumbnailInput {...field} defaultUrl={defaultThumbnail} />
          )}
          defaultValue={null}
        />
        <WithLabel
          variant="h6"
          label="제목"
          isRequired
          errorMessage={errors.information?.title?.message}
          labelProps={{ marginBottom: true }}
        >
          <Input
            placeholder="제목"
            fullWidth
            {...register("information.title", {
              required: "필수 입력사항입니다.",
              maxLength: { value: 30, message: "최대 길이는 30자 입니다." },
            })}
            error={!!errors.information?.title}
          />
        </WithLabel>

        <TwoColumnContainer>
          <WithLabel
            variant="h6"
            label="모임날짜 및 시간"
            isRequired
            errorMessage={errors.information?.ridingDate?.message}
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.ridingDate"
              render={({ field: { onChange, ...props } }) => (
                <DatePicker
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(
                      dayjs(e.target.value)
                        .utc()
                        .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
                    );
                  }}
                  error={!!errors.information?.ridingDate}
                  {...props}
                />
              )}
              rules={{
                validate: {
                  afterNow: (value) =>
                    dayjs(value).utc().diff(dayjs().utc()) > 0 ||
                    "현재 시간 이전은 선택할 수 없습니다.",
                },
              }}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="참가자 수"
            caption="(5~30 명)"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <MinMaxInput required />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="소요 시간"
            isRequired
            errorMessage={errors.information?.estimatedTime?.message}
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.estimatedTime"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  data={estimatedTime.map((item) => ({
                    text: item,
                    key: item,
                    value: item,
                  }))}
                  placeholder="예상 시간을 골라주세요"
                  value={value}
                  onChange={onChange}
                  error={!!errors.information?.estimatedTime}
                  ref={ref}
                />
              )}
              defaultValue="none"
              rules={{
                required: "필수 입력사항입니다.",
                validate: {
                  required: (value) =>
                    value !== "none" || "필수 입력사항입니다.",
                },
              }}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="지역 및 장소"
            isRequired
            errorMessage={errors.information?.regionCode?.message}
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.regionCode"
              rules={{
                required: "필수 입력사항입니다.",
                validate: {
                  required: (value) => value !== 0 || "필수 입력사항입니다.",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <RegionInput error={!!error} {...field} />
              )}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="라이딩 코스"
            caption="(최대 5개)"
            isRequired
            errorMessage={errors.information?.routes?.message}
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.routes"
              render={({ field }) => (
                <RouteInput {...field} error={!!errors.information?.routes} />
              )}
              rules={{
                required: "필수 입력사항입니다.",
              }}
            />
          </WithLabel>
          <WithLabel
            variant="h6"
            label="난이도"
            isRequired
            errorMessage={errors.information?.level?.message}
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.level"
              render={({ field }) => <LevelInput {...field} />}
              defaultValue="하"
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="참가비"
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.fee"
              render={({ field: { onChange, ...props } }) => (
                <FeeInput
                  {...props}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (!e) onChange(0);
                    else onChange(parseInt(e.target.value, 10) || 0);
                  }}
                />
              )}
              defaultValue={0}
            />
          </WithLabel>
        </TwoColumnContainer>

        <WithLabel
          variant="h6"
          label="자전거 종류"
          isRequired
          errorMessage={errors.information?.bicycleTypes?.message}
          labelProps={{ marginBottom: true }}
        >
          <Controller
            control={control}
            name="information.bicycleTypes"
            render={({ field }) => <BicycleTypeInput {...field} />}
            rules={{ required: "필수 입력사항입니다." }}
            defaultValue={[]}
          />
        </WithLabel>

        <WithLabel
          variant="h6"
          label="출발 위치"
          isRequired
          errorMessage={errors.information?.departurePlace?.message}
          labelProps={{ marginBottom: true }}
        >
          <Controller
            control={control}
            name="information.departurePlace"
            render={({ field }) => (
              <LocationInput
                {...field}
                error={!!errors.information?.departurePlace}
              />
            )}
            rules={{ required: "필수 입력사항입니다." }}
          />
        </WithLabel>
        <Divider />
        <WithLabel
          variant="h5"
          label="상세 내용"
          labelProps={{ marginBottom: true }}
        >
          <ExpandableInput />
        </WithLabel>
        <Button type="button" onClick={handleSubmit(onSubmit)}>
          저장하기
        </Button>
      </Form>
    </FormProvider>
  );
}

export default PostForm;
