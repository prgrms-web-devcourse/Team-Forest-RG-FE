import { useParams } from "react-router-dom";

function PrivacyModify() {
  const { id } = useParams();

  return <div>개인정보 수정 탭 id: {id}</div>;
}

export default PrivacyModify;
