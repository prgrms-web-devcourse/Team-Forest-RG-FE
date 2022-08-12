/* eslint-disable no-use-before-define */
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import Text from "@/components/Text";
import Chip from "@/components/Chip";
import { Riding } from "@/pages/MyPage/mypageService";
import Button from "@/components/Button";

interface RidingLongCardProps {
  data: Riding;
  scheduled?: boolean;
}
const RidingLongCard = ({ data, scheduled }: RidingLongCardProps) => {
  const { riding } = data;

  return (
    <Container>
      <Stack direction="row" spacing={1} mb={1}>
        <StyledImg src={riding.thumbnail} alt={riding.title} />
        <Stack direction="column">
          <Text variant="subtitle2" textStyle={{ color: "#878D91" }}>
            {`${dayjs(riding.ridingDate).get("M") + 1}월
            ${dayjs(riding.ridingDate).get("D")}일 / `}
            {riding.zone.name}
          </Text>
          <Text variant="h6" textStyle={{ fontWeight: 800 }}>
            {riding.title}
          </Text>
          <Stack direction="row" spacing={1} mb={1}>
            {riding.bicycleType.map((bicycle) => (
              <Chip
                key={bicycle}
                label={bicycle}
                bgColor="#FFF4F7"
                textColor="#E21D47"
                size="small"
              />
            ))}
          </Stack>
          <Text variant="body2" textStyle={{ color: "black", fontWeight: 700 }}>
            <Stack direction="row" spacing={1} mb={1}>
              {riding.estimatedTime} (
              {riding.ridingCourses.map((course, idx, ridings) => (
                <Text
                  variant="body2"
                  textStyle={{ color: "black", fontWeight: 700 }}
                >
                  {course} {ridings.length - 1 !== idx && ">"}
                </Text>
              ))}
              )
            </Stack>
          </Text>
          <Text
            variant="body2"
            textStyle={{ color: "#E21D47", fontWeight: 700 }}
          >
            {riding.fee}원
          </Text>
        </Stack>
      </Stack>
      {scheduled && (
        <ButtonWrapper>
          <Button variant="outlined" customTextColor="black" size="small">
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
`;
