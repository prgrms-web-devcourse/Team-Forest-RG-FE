import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import dayjs from "dayjs";
import { ChangeEvent } from "react";
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
} from "@/components/PostForm/Inputs";
import { Form, TwoColumnContainer } from "@/components/PostForm/PostForm.style";
import WithLabel from "@/components/WithLabel";
import { estimatedTime } from "@/constants/data";
import Select from "@/components/Select";

type Section = {
  title: string;
  images: number[];
  content: string;
};
type FormImageUrl = {
  details?: string[][];
  thumbnail?: string;
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
  defaultUrl?: FormImageUrl;
}

function PostForm({
  onSubmit,
  defaultValues = {
    details: [{ title: "", images: [], content: "" }],
  },
  defaultUrl,
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
  return (
    <FormProvider {...methods}>
      <Form>
        <Controller
          control={control}
          name="information.thumbnail"
          render={({ field }) => (
            <ThumbnailInput
              {...field}
              defaultUrl={
                defaultUrl?.thumbnail ||
                "https://team-05-storage.s3.ap-northeast-2.amazonaws.com/static/RG_Logo.png"
              }
            />
          )}
          defaultValue={null}
        />
        <WithLabel
          variant="h6"
          label="제목"
          isRequired
          errorMessage={errors.information?.title?.message}
          labelProps={{ gutterBottom: true }}
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
            labelProps={{ gutterBottom: true }}
          >
            <Controller
              control={control}
              name="information.ridingDate"
              render={({ field: { onChange, ...props } }) => (
                <DatePicker
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(
                      dayjs(e.target.value).format("YYYY-MM-DDTHH:mm:ss.SSS")
                    );
                  }}
                  error={!!errors.information?.ridingDate}
                  {...props}
                />
              )}
              rules={{
                validate: {
                  afterNow: (value) =>
                    dayjs(value).diff(dayjs().add(1, "day")) > 0 ||
                    "24시간 이후 시간만 가능합니다.",
                },
              }}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="참가자 수"
            caption="(5~30 명)"
            isRequired
            labelProps={{ gutterBottom: true }}
          >
            <MinMaxInput required />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="소요 시간"
            isRequired
            errorMessage={errors.information?.estimatedTime?.message}
            labelProps={{ gutterBottom: true }}
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
            labelProps={{ gutterBottom: true }}
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
            labelProps={{ gutterBottom: true }}
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
            labelProps={{ gutterBottom: true }}
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
            labelProps={{ gutterBottom: true }}
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
          labelProps={{ gutterBottom: true }}
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
          labelProps={{ gutterBottom: true }}
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
          labelProps={{ gutterBottom: true }}
        >
          <ExpandableInput imageUrls={defaultUrl?.details} />
        </WithLabel>
        <Button type="button" onClick={handleSubmit(onSubmit)}>
          저장하기
        </Button>
      </Form>
    </FormProvider>
  );
}

export default PostForm;
