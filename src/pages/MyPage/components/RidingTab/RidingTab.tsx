import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";

function RidingTab() {
  const myUserId = useRecoilValue(userState);

  return <div>라이딩 현황탭 id: {myUserId}</div>;
}

export default RidingTab;
