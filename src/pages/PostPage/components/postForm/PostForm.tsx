import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import dayjs from "dayjs";
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
import ButtonCheckBoxGroup from "@/components/ButtonCheckBoxGroup";
import { bicycleTypeData } from "@/constants/data";

type Section = {
  title: string;
  images: number[];
  content: string;
};

export type RidingFormValues = {
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
    thumbnail?: number;
    fee: number;
    routes: string[];
  };
  detail: Section[];
};

interface PostFormProps {
  onSubmit: SubmitHandler<RidingFormValues>;
  defaultValues?: Partial<RidingFormValues>;
}

function PostForm({
  onSubmit,
  defaultValues = {
    detail: [{ title: "", images: [], content: "" }],
  },
}: PostFormProps) {
  const methods = useForm<RidingFormValues>({ defaultValues, mode: "onBlur" });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="information.thumbnail"
          render={({ field: { onChange, ref } }) => (
            <ThumbnailInput inputRef={ref} onChange={onChange} />
          )}
        />
        <WithLabel
          variant="h6"
          label="제목"
          isRequired
          labelProps={{ marginBottom: true }}
        >
          <Input
            placeholder="제목"
            fullWidth
            {...register("information.title", {
              required: "필수 입력사항입니다.",
              maxLength: 30,
            })}
            error={!!errors.information?.title}
            errorMessage={errors.information?.title?.message}
          />
        </WithLabel>

        <TwoColumnContainer>
          <WithLabel
            variant="h6"
            label="모임날짜 및 시간"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.ridingDate"
              render={({ field }) => <DatePicker {...field} />}
              rules={{
                validate: {
                  afterNow: (value) => {
                    return dayjs(value).diff(dayjs()) > 0;
                  },
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
            <MinMaxInput
              required
              error={{
                min: !!errors.information?.minParticipantCount,
                max: !!errors.information?.maxParticipantCount,
              }}
              errorMessage={{
                min: errors.information?.minParticipantCount?.message,
                max: errors.information?.maxParticipantCount?.message,
              }}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="소요 시간"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <EstimatedTimeInput />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="지역 및 장소"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.regionCode"
              rules={{
                required: "필수 입력사항입니다.",
                validate: {
                  requiredDetail: (value) => {
                    return value % 1000 !== 0 || "세부 지역을 선택해주세요.";
                  },
                },
              }}
              render={({ field }) => <RegionInput {...field} />}
            />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="라이딩 코스"
            caption="(최대 5개)"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <RouteInput />
          </WithLabel>
          <WithLabel
            variant="h6"
            label="난이도"
            isRequired
            labelProps={{ marginBottom: true }}
          >
            <LevelInput />
          </WithLabel>

          <WithLabel
            variant="h6"
            label="참가비"
            labelProps={{ marginBottom: true }}
          >
            <Controller
              control={control}
              name="information.fee"
              render={({ field }) => <FeeInput {...field} />}
            />
          </WithLabel>
        </TwoColumnContainer>

        <WithLabel
          variant="h6"
          label="자전거 종류"
          isRequired
          labelProps={{ marginBottom: true }}
        >
          <Controller
            control={control}
            name="information.bicycleTypes"
            render={({ field }) => <BicycleTypeInput {...field} />}
            rules={{ required: "필수 입력사항입니다." }}
          />
        </WithLabel>

        <WithLabel
          variant="h6"
          label="출발 위치"
          isRequired
          labelProps={{ marginBottom: true }}
        >
          <LocationInput />
        </WithLabel>
        <Divider />
        <WithLabel
          variant="h5"
          label="상세 내용"
          labelProps={{ marginBottom: true }}
        >
          <ExpandableInput />
        </WithLabel>
        <Button type="submit">저장하기</Button>
      </Form>
    </FormProvider>
  );
}

export default PostForm;
