/* eslint-disable no-use-before-define */
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { Post } from "response";
import Text from "@/components/Text";
import Chip from "@/components/Chip";
import Button from "@/components/Button";

interface RidingLongCardProps {
  data: Post;
  scheduled?: boolean;
  onClickCard: (e: React.MouseEvent, id: number) => void;
  onCancelRiding?: (e: React.MouseEvent, id: number) => void;
}
const RidingLongCard = ({
  data,
  scheduled,
  onClickCard,
  onCancelRiding,
}: RidingLongCardProps) => {
  return (
    <Container onClick={(e) => onClickCard(e, data.id)}>
      <Stack direction="row" spacing={1} mb={1}>
        <StyledImg src={data.thumbnail} alt={data.title} />
        <Stack direction="column">
          <Text variant="subtitle2" textStyle={{ color: "#878D91" }}>
            {`${dayjs(data.ridingDate).get("M") + 1}월
            ${dayjs(data.ridingDate).get("D")}일 / `}
            {data.zone.name}
          </Text>
          <Text variant="h6" textStyle={{ fontWeight: 800 }}>
            {data.title}
          </Text>
          <Stack direction="row" spacing={1} mb={1}>
            {data.bicycles.map((bicycle) => (
              <Chip
                key={bicycle}
                label={bicycle}
                bgColor="#FFF4F7"
                textColor="#E21D47"
                size="small"
              />
            ))}
          </Stack>
          <Stack direction="row" spacing={1} mb={1}>
            <Text
              variant="body2"
              textStyle={{ color: "black", fontWeight: 700 }}
            >
              {data.estimatedTime}
            </Text>
            {data.ridingCourses.map((course, idx, ridings) => (
              <Text
                variant="body2"
                textStyle={{ color: "black", fontWeight: 700 }}
                key={course}
              >
                {idx === 0 && "( "}
                {course} {ridings.length - 1 !== idx ? ">" : ")"}
              </Text>
            ))}
          </Stack>

          <Text
            variant="body2"
            textStyle={{ color: "#E21D47", fontWeight: 700 }}
          >
            {data.fee ? `${data.fee}원` : "무료"}
          </Text>
        </Stack>
      </Stack>
      {scheduled && (
        <ButtonWrapper>
          <Button
            variant="outlined"
            customTextColor="black"
            size="small"
            onClick={(e) => onCancelRiding && onCancelRiding(e, data.id)}
          >
            신청취소
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default RidingLongCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
const StyledImg = styled.img`
  min-width: 250px;
  height: 140px;
  object-fit: fill;
`;
const ButtonWrapper = styled.div`
  height: 30%;
  z-index: 999;
`;
