import dayjs from "dayjs";
import { DialogContentText, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { StyledForm, UserIamge, UserListContainer } from "./EvaluateForm.style";
import Text from "@/components/Text";
import Radio from "@/components/Radio";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import { RadioIconButton } from "@/pages/RegisterPage/registerService";
import { userState } from "@/recoil/state/authState";
import usePost from "@/pages/MyPage/hooks/usePost";
import {
  getEvaluateListFrom,
  numToDay,
  recommendedOptions,
} from "./evaluateFormService";
import user from "@/api/user";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

export interface EvaluateFormValues {
  [key: string]: boolean | string | null;
}

const EvaluateForm = () => {
  const myUserId = useRecoilValue(userState);
  const { postId } = useParams();
  const [post, loading] = usePost(Number(postId));
  const { register, handleSubmit, setValue } = useForm();
  const { open, handleOpen, handleClose } = useModal();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EvaluateFormValues> = async (formData) => {
    const evaluatedMemberList = getEvaluateListFrom(formData);

    await user.evaluate({
      postId,
      evaluatedMemberList,
    });
  };

  const onConfirm = () => {
    navigate("/mypage", { replace: true });
    handleClose();
  };
  useEffect(() => {
    if (loading) return;

    const isMyRiding =
      post.riding.participants.filter(({ id }) => id === myUserId).length > 0;
    if (!isMyRiding) navigate("/mypage", { replace: true });
  }, [myUserId, loading]);

  if (loading) return <div>Loading</div>;
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Text variant="h6" textStyle={{ fontWeight: 800 }}>
            {`${dayjs(post?.riding.ridingDate).get("M") + 1}월
            ${dayjs(post?.riding.ridingDate).get("D")}일
            ${numToDay[dayjs(post?.riding.ridingDate).get("d")]}요일
            ${dayjs(post?.riding.ridingDate).get("h")}:${dayjs(
              post?.riding.ridingDate
            ).get("m")}`}
          </Text>
          <Text variant="body1" marginBottom>
            {post?.riding.zone.name} {post?.riding.ridingCourses[0]}
          </Text>
        </Stack>
        <Text variant="h6" textStyle={{ fontWeight: 800 }}>
          좋았거나 아쉬웠던 라이딩멤버를 알려주세요.
        </Text>
        <Text variant="caption">
          비매너 리포트를 통해 같은 리뷰가 반복될 때 알림을 보내드리고 있어요.
        </Text>
        <UserListContainer>
          {post?.riding.participants
            .filter((participant) => participant.id !== myUserId)
            .map((userInfo, idx) => (
              <Stack
                key={userInfo.id}
                direction="row"
                justifyContent="space-evenly"
                width="100%"
              >
                <Stack direction="row">
                  {myUserId === post.leader.id && (
                    <Stack direction="column">
                      {idx === 0 && (
                        <Text variant="caption" textStyle={{ fontWeight: 800 }}>
                          노쇼여부
                        </Text>
                      )}
                      <CheckBox
                        customColor="red"
                        sx={{ marginBottom: "1.5rem", marginRight: "1rem" }}
                        {...register(`${userInfo.id} noshow`)}
                      />
                    </Stack>
                  )}
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

        <Button
          type="submit"
          size="large"
          sx={{ width: "60%" }}
          onClick={handleOpen}
        >
          제출
        </Button>
      </StyledForm>
      <Modal open={open} onSubmit={onConfirm} label="라이딩 멤버 평가">
        <DialogContentText>평가가 잘 제출되었습니다.</DialogContentText>
      </Modal>
    </>
  );
};

export default EvaluateForm;
