import { useParams } from "react-router-dom";

function RatingTab() {
  const { id } = useParams();

  return <div>라이딩 평가탭 id: {id}</div>;
}

export default RatingTab;
