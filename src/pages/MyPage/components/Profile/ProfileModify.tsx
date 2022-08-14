import { useRecoilValue } from "recoil";
import { SubmitHandler } from "react-hook-form";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import ProfileModifyForm from "@/pages/MyPage/components/Profile/ProfileModifyForm";
import user, { RegisterData } from "@/api/user";

function ProfileModify() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    if (!myUserId) return;
    await user.setUserInfo(myUserId, data);
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
