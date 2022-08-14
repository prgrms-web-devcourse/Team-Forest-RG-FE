import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { PostDetail } from "response";
import { useNavigate } from "react-router-dom";
import Text from "@/components/Text";
import ListCard from "@/components/ListCard";

interface RecommendListProps {
  data: PostDetail[];
  label: string;
}
const RecommendList = ({ data, label }: RecommendListProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text variant="h4"> {label}</Text>
      <Grid container item spacing={2} justifyContent="center">
        {data
          .filter(({ riding }) => !riding.bicycleType.includes("상관없음"))
          .slice(0, 4)
          .map(({ leader, riding }) => {
            return (
              <Grid key={riding.id} item xs="auto">
                <ListCard
                  thumbnail={riding.thumbnail}
                  subtitle={riding.ridingLevel}
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
  width: 100%;
  margin-bottom: 3rem;
`;
