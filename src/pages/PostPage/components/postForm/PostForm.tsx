import styled from "@emotion/styled";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import ExpandableInput from "./ExpandableInput/ExpandableInput";
import DatePicker from "@/components/DatePicker";
import MinMaxInput from "./MinMaxInput/MinMaxInput";
import BicycleTypeInput from "./BicycleTypeInput/BicycleTypeInput";
import LevelInput from "./LevelInput";
import Button from "@/components/Button";
import FeeInput from "./FeeInput/FeeInput";
import LocationInput from "./LocationInput/LocationInput";
import Text from "@/components/Text";
import RegionInput from "./RegionInput/RegionInput";
import EstimatedTime from "./EstimatedTime/EstimatedTime";
import Divider from "@/components/Divider";

type Section = {
  title: string;
  image: Array<string>;
  content: string;
};

type FormValue = {
  title: string;
  ridingDate: string;
  min: number;
  max: number;
  bicycleTypes: string[];
  level: string;
  estimatedTime: string;
  regionCode: number;
  departurePlace: {
    lat: number;
    lng: number;
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
  const methods = useForm<FormValue>({
    defaultValues: {
      detail: [{ title: "", image: [], content: "" }],
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    const postData = {
      imformation: {
        title: data.title,
        ridingDate: data.ridingDate,
        min: data.min,
        max: data.max,
        bicycleTypes: data.bicycleTypes,
        level: data.level,
        estimatedTime: data.estimatedTime,
        regionCode: data.regionCode,
        departurePlace: data.departurePlace,
      },
      detail: data.detail,
    };
    console.log(postData);
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
            {...register("title", {
              required: true,
              maxLength: 30,
            })}
          />
        </div>
        <TwoColumnContainer>
          <div>
            <Text variant="h6" marginBottom>
              모임날짜 및 시간
            </Text>
            <DatePicker {...register("ridingDate", { valueAsDate: true })} />
          </div>
          <MinMaxInput required />
          <EstimatedTime />
          <RegionInput />
          <LevelInput required />
          <FeeInput />
        </TwoColumnContainer>
        <BicycleTypeInput required />
        <LocationInput />
        <Divider />
        <ExpandableInput />
        <Button type="submit">완료</Button>
      </Form>
    </FormProvider>
  );
}

export default PostForm;
