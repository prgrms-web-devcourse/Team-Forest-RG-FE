import RidingCard from "@/pages/MyPage/components/RidingCard";
import RidingLongCard from "@/pages/MyPage/components/RidingLongCard";
import { Riding } from "../../mypageService";
import { CardWrapper, Container } from "./RidingRecords.style";

interface RidingRecordsProps {
  ridings: Riding[];
  status: "scheduled" | "finished" | "leading";
}

const RidingRecords = ({ ridings, status }: RidingRecordsProps) => {
  return (
    <Container>
      {ridings.map((data) => (
        <CardWrapper key={data.riding.title}>
          {/* <RidingCard data={data} /> */}
          <RidingLongCard data={data} scheduled={status === "scheduled"} />
        </CardWrapper>
      ))}
    </Container>
  );
};
export default RidingRecords;
