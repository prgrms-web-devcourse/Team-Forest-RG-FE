import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";

function ProfileModify() {
  const myUserId = useRecoilValue(userState);

  return <div>프로필 수정 탭 id: {myUserId}</div>;
}

export default ProfileModify;
