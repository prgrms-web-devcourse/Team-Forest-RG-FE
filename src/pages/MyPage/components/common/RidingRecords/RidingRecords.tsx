import { Post } from "response";
import RidingCard from "@/pages/MyPage/components/common/RidingCard";
import RidingLongCard from "@/pages/MyPage/components/common/RidingLongCard";
import { CardWrapper, Container } from "./RidingRecords.style";

interface RidingRecordsProps {
  ridings: Post[];
  status: "scheduled" | "finished" | "leading" | "canEvaluated";
  onClickCard: (e: React.MouseEvent, id: number) => void;
  onCancelRiding?: (e: React.MouseEvent, id: number) => void;
}

const RidingRecords = ({
  ridings,
  status,
  onClickCard,
  onCancelRiding,
}: RidingRecordsProps) => {
  return (
    <Container>
      {ridings.map((data) => (
        <CardWrapper key={data.id}>
          {/* <RidingCard data={data} /> */}
          <RidingLongCard
            data={data}
            scheduled={status === "scheduled"}
            onClickCard={onClickCard}
            onCancelRiding={onCancelRiding}
          />
        </CardWrapper>
      ))}
    </Container>
  );
};
export default RidingRecords;
