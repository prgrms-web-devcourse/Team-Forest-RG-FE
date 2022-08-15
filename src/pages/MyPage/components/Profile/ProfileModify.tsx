import { useRecoilValue } from "recoil";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import ProfileModifyForm from "@/pages/MyPage/components/Profile/ProfileModifyForm";
import user, { ProfileData } from "@/api/user";
import { Container } from "./ProfileModify.style";
import Text from "@/components/Text";

function ProfileModify() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);

  const onSubmit: SubmitHandler<ProfileData> = async (data) => {
    if (!myUserId) return;
    await user.setUserInfo(myUserId, data);
    queryClient.invalidateQueries(["user-fetch"]);
    navigate("/mypage");
  };

  if (loading) return <div>Loading</div>;
  return (
    userInfo && (
      <Container>
        <Text variant="h5" textStyle={{ fontWeight: 600 }}>
          프로필 수정
        </Text>
        <ProfileModifyForm profileData={userInfo} onSubmit={onSubmit} />
      </Container>
    )
  );
}

export default ProfileModify;
