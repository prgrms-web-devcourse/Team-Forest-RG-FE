import { useRecoilValue } from "recoil";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import ProfileModifyForm from "@/pages/MyPage/components/Profile/ProfileModifyForm";
import user, { RegisterData } from "@/api/user";

function ProfileModify() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    if (!myUserId) return;
    await user.setUserInfo(myUserId, data);
    queryClient.invalidateQueries(["user-fetch"]);
    navigate("/mypage");
  };

  if (loading) return <div>Loading</div>;
  return (
    userInfo && (
      <div>
        <ProfileModifyForm profileData={userInfo} onSubmit={onSubmit} />
      </div>
    )
  );
}

export default ProfileModify;
