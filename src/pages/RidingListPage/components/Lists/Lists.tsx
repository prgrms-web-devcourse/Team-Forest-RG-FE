import { Grid } from "@mui/material";
import * as T from "response";
import ListCard from "@/components/ListCard";

type props = T.PostDetail[];

const oneRow = (row: props) =>
  row.map(({ leader, riding }) => (
    <Grid key={riding.id} item xs={3}>
      <ListCard
        thumbnail={riding.thumbnail}
        subtitle={riding.ridingLevel}
        nickname={leader.nickname}
        profileImage={leader.profileImage}
        ridingStatus={riding.maxParticipant === riding.participants.length}
        ridingTitle={riding.title}
        tags={riding.bicycleType}
        minParticipants={riding.minParticipant}
        maxParticipants={riding.maxParticipant}
        currentParticipants={riding.participants.length}
        region={riding.zone.name}
      />
    </Grid>
  ));

const Lists = ({ data }: { data: props }) => {
  const firstRow = data.slice(0, 4);
  const secondRow = data.slice(4, 8);
  const thirdRow = data.slice(8, 12);
  return (
    <Grid container item direction="column" spacing={2}>
      <Grid container item spacing={2}>
        {oneRow(firstRow)}
      </Grid>
      <Grid container item spacing={2}>
        {oneRow(secondRow)}
      </Grid>
      <Grid container item spacing={2}>
        {oneRow(thirdRow)}
      </Grid>
    </Grid>
  );
};

export default Lists;
