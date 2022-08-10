import styled from "@emotion/styled";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import DatePicker from "@/components/DatePicker";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Divider from "@/components/Divider";
import MinMaxInput from "./MinMaxInput/MinMaxInput";
import EstimatedTimeInput from "./EstimatedTimeInput/EstimatedTimeInput";
import RegionInput from "./RegionInput/RegionInput";
import LevelInput from "./LevelInput";
import FeeInput from "./FeeInput/FeeInput";
import BicycleTypeInput from "./BicycleTypeInput/BicycleTypeInput";
import LocationInput from "./LocationInput/LocationInput";
import ExpandableInput from "./ExpandableInput/ExpandableInput";

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
  };
  detail: Section[];
};

const Form = styled.form`
  min-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TwoColumnContainer = styled.div`
  display: grid;
  column-gap: 3rem;
  row-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

function PostForm() {
  const methods = useForm<RidingFormValues>({
    defaultValues: {
      detail: [{ title: "", images: [], content: "" }],
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<RidingFormValues> = (data) => {
    console.log(data);
  };
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
