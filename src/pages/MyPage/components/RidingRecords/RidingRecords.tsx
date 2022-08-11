import RidingCard from "@/components/RidingCard/RidingCard";
import { Riding } from "../../mypageService";
import { CardWrapper, Container } from "./RidingRecords.style";

interface RidingRecordsProps {
  ridings: Riding[];
}

const RidingRecords = ({ ridings }: RidingRecordsProps) => {
  return (
    <Container>
      {ridings.map((data) => (
        <CardWrapper key={data.riding.title}>
          <RidingCard data={data} />
        </CardWrapper>
      ))}
    </Container>
  );
};
export default RidingRecords;
