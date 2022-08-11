import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Divider from "@/components/Divider";
import {
  BicycleTypeInput,
  EstimatedTimeInput,
  ExpandableInput,
  FeeInput,
  LevelInput,
  LocationInput,
  MinMaxInput,
  RegionInput,
  RouteInput,
} from "./components";
import { Form, TwoColumnContainer } from "./PostForm.style";

type Section = {
  title: string;
  images: number[];
  content: string;
};

export type RidingFormValues = {
  information: {
    title: string;
    ridingDate: string;
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
    thumbnail: number;
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
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Text variant="h6" marginBottom>
            제목
          </Text>
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
        </div>
        <TwoColumnContainer>
          <div>
            <Text variant="h6" marginBottom>
              모임날짜 및 시간
            </Text>
            <DatePicker
              {...register("information.ridingDate", { valueAsDate: true })}
            />
          </div>
          <MinMaxInput required />
          <EstimatedTimeInput />
          <RegionInput />
          <RouteInput />
          <LevelInput required />
          <FeeInput />
        </TwoColumnContainer>
        <BicycleTypeInput />
        <LocationInput />
        <Divider />
        <ExpandableInput />
        <Button type="submit">완료</Button>
      </Form>
    </FormProvider>
  );
}

export default PostForm;
