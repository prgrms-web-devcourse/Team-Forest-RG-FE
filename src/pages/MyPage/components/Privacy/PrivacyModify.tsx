import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";

function PrivacyModify() {
  const myUserId = useRecoilValue(userState);

  return <div>개인정보 수정 탭 id: {myUserId}</div>;
}

export default PrivacyModify;
