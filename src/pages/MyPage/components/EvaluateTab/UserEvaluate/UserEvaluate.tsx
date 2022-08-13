import dayjs from "dayjs";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledForm, UserIamge, UserListContainer } from "./UserEvaluate.style";
import Text from "@/components/Text";
import Radio from "@/components/Radio";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import { RadioIconButton } from "@/pages/RegisterPage/registerService";
import { PostMockData } from "@/api/post";

export const recommendedOptions = [
  { value: "true", dataLabel: "추천" },
  { value: "false", dataLabel: "비추천" },
];

const UserEvaluate = () => {
  const { riding } = PostMockData;
  const { participants } = riding;

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const numToDay = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Text variant="h6" textStyle={{ fontWeight: 800 }}>
          {`${dayjs(riding.ridingDate).get("M") + 1}월
            ${dayjs(riding.ridingDate).get("D")}일
            ${numToDay[dayjs(riding.ridingDate).get("d")]}요일
            ${dayjs(riding.ridingDate).get("h")}:00`}
        </Text>
        <Text variant="body1" marginBottom>
          {riding.zone.name} {riding.ridingCourses[0]}
        </Text>
      </Stack>
      <Text variant="h6" textStyle={{ fontWeight: 800 }}>
        좋았거나 아쉬웠던 라이딩멤버를 알려주세요.
      </Text>
      <Text variant="caption">
        비매너 리포트를 통해 같은 리뷰가 반복될 때 알림을 보내드리고 있어요.
      </Text>

      <UserListContainer>
        {participants.map((userInfo, idx) => (
          <Stack
            key={userInfo.id}
            direction="row"
            justifyContent="space-evenly"
            width="100%"
          >
            <Stack direction="row">
              <Stack direction="column">
                {idx === 0 && (
                  <Text variant="caption" textStyle={{ fontWeight: 800 }}>
                    노쇼여부
                  </Text>
                )}
                <CheckBox
                  customColor="red"
                  sx={{ marginBottom: "1.5rem", marginRight: "1rem" }}
                  {...register(`${userInfo.id} noShow`)}
                />
              </Stack>
              <Stack direction="column">
                <UserIamge src={userInfo.profileImage} />
                <Text>{userInfo.nickname}</Text>
              </Stack>
            </Stack>
            <Radio
              id={`${userInfo.id} recommended`}
              data={recommendedOptions}
              row
              useCustomIcon
              icon={RadioIconButton}
              defaultValue="recommended"
              checkedIcon={RadioIconButton}
              sx={{ justifyContent: "center" }}
              {...register(`${userInfo.id} recommended`, {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue(`${userInfo.id} recommended`, e.target.value);
                },
              })}
            />
          </Stack>
        ))}
      </UserListContainer>

      <Button type="submit" size="large" sx={{ width: "60%" }}>
        제출
      </Button>
    </StyledForm>
  );
};

export default UserEvaluate;
