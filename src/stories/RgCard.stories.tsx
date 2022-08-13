import styled from "@emotion/styled";
import { Card, CardContent, Grid } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";
import Chip from "@/components/Chip";
import ListCard from "@/components/ListCard";

export default {
  title: "CUSTOM/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const StyledCard = styled(Card)`
  background: linear-gradient(rgba(0, 0, 0, 0.8), 40%, transparent),
    url("https://source.unsplash.com/random");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 300px;
  height: 300px;
`;

export const Card1: ComponentStory<typeof Card> = () => (
  <StyledCard>
    <CardContent sx={{ height: "100%" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Grid item container spacing={1} alignItems="center">
          <Grid item xs="auto">
            <Avatar src="https://source.unsplash.com/random/100x100" />
          </Grid>
          <Grid container item direction="column" xs>
            <Grid item>
              <Text variant="h5" color="white">
                author
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container direction="column">
                  <Grid container item direction="column">
                    <Grid item>
                      <Text variant="h4">Riding Title</Text>
                    </Grid>
                    <Grid>
                      <Text variant="subtitle1">Subtitle</Text>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={1}>
                    <Grid item xs="auto">
                      <Chip color="primary" textColor="white" label="따릉이" />
                    </Grid>
                    <Grid item xs="auto">
                      <Chip color="primary" textColor="white" label="MTB" />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </StyledCard>
);

export const ListCardComponent: ComponentStory<typeof ListCard> = () => (
  <ListCard
    thumbnail="https://source.unsplash.com/random"
    profileImage="https://source.unsplash.com/random/100x100"
    nickname="author"
    ridingStatus={false}
    ridingTitle="Riding Title"
    subtitle="Subtitle"
    tags={["따릉이", "MTB"]}
    minParticipants={1}
    maxParticipants={4}
    currentParticipants={1}
    region="서울"
  />
);
