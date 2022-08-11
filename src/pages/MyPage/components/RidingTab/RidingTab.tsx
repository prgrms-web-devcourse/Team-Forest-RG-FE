import { useParams } from "react-router-dom";

function RidingTab() {
  const { id } = useParams();

  return <div>라이딩 현황탭 id: {id}</div>;
}

export default RidingTab;
