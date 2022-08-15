import styled from "@emotion/styled";
import { Grid, Stack } from "@mui/material";
import { PostDetail } from "response";
import { Link, useNavigate } from "react-router-dom";
import Text from "@/components/Text";
import ListCard from "@/components/ListCard";

interface RecommendListProps {
  data: PostDetail[];
  label: string;
  subLabel?: string;
}
const RecommendList = ({ data, label, subLabel }: RecommendListProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title> {label}</Title>
      <Stack
        direction="row"
        justifyContent="space-between"
        marginTop="0.5rem"
        marginBottom="1rem"
      >
        <Text variant="body1" color="#9e9e9e">
          {subLabel}
        </Text>
        <ListLink to="/posts">전체보기</ListLink>
      </Stack>
      <Grid container item spacing={2} justifyContent="center">
        {data
          .filter(({ riding }) => !riding.bicycleType.includes("상관없음"))
          .slice(0, 4)
          .map(({ leader, riding }) => {
            return (
              <Grid key={riding.id} item xs="auto">
                <ListCard
                  leaderId={leader.id}
                  thumbnail={riding.thumbnail}
                  ridingLevel={riding.ridingLevel}
                  ridingData={riding.ridingDate}
                  nickname={leader.nickname}
                  profileImage={leader.profileImage}
                  ridingStatus={riding.recruiting}
                  ridingTitle={riding.title}
                  tags={riding.bicycleType}
                  minParticipants={riding.minParticipant}
                  maxParticipants={riding.maxParticipant}
                  currentParticipants={riding.participants.length}
                  region={riding.zone.name}
                  onClick={() => navigate(`/post/${riding.id}`)}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
export default RecommendList;

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled(Text)`
  font-size: 1.5rem;
  font-weight: 800;
`;

const ListLink = styled(Link)`
  color: #9e9e9e;
  font-size: 1rem;
  font-weight: 600;

  border: none;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
`;
