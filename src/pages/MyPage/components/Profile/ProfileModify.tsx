import { useParams } from "react-router-dom";

function ProfileModify() {
  const { id } = useParams();

  return <div>프로필 수정 탭 id: {id}</div>;
}

export default ProfileModify;
