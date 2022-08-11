import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";

function RatingTab() {
  const myUserId = useRecoilValue(userState);

  return <div>라이딩 평가탭 id: {myUserId}</div>;
}

export default RatingTab;
