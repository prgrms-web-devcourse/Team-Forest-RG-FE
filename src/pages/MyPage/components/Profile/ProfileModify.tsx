import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../../hooks/useUserInfo";
import ProfileModifyForm from "@/pages/MyPage/components/Profile/ProfileModifyForm";

function ProfileModify() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  console.log(userInfo);
  const dummyUserInfo = {
    nickname: "out",
    ridingStartYear: "2020",
    favoriteRegionCode: 11,
    level: "상",
    bicycles: ["따릉이"],
  };

  if (loading) return <div>Loading</div>;
  return (
    <div>
      프로필 수정 탭 id: {myUserId}
      <ProfileModifyForm userInfo={dummyUserInfo} />
    </div>
  );
}

export default ProfileModify;
