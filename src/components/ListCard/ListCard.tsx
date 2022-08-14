import { Card, Grid, CardContent } from "@mui/material";
import dayjs from "dayjs";
import Chip from "@/components/Chip";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";
import { OuterCard, StyledLink } from "./ListCard.style";

interface props {
  thumbnail: string;
  profileImage: string;
  nickname: string;
  leaderId: number;
  ridingStatus: boolean;
  ridingTitle: string;
  ridingLevel: string;
  ridingData: string;
  tags: string[];
  minParticipants: number;
  maxParticipants: number;
  currentParticipants: number;
  region: string;
  onClick?: () => void;
}

const ListCard = ({
  thumbnail,
  profileImage,
  leaderId,
  nickname,
  ridingStatus,
  ridingTitle,
  ridingLevel,
  ridingData,
  tags,
  minParticipants,
  maxParticipants,
  currentParticipants,
  region,
  onClick,
}: props) => (
  <OuterCard thumbnail={thumbnail} onClick={onClick}>
    <CardContent sx={{ height: "100%" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Grid container item spacing={1} alignItems="center">
          <Grid item xs="auto">
            <Avatar src={profileImage} alt={nickname} />
          </Grid>
          <Grid container item xs>
            <Grid item xs zeroMinWidth>
              <StyledLink
                to={`/profile/${leaderId}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Text variant="h6" color="white" noWrap>
                  {nickname}
                </Text>
              </StyledLink>
            </Grid>
            <Grid item xs="auto">
              <Chip
                label={ridingStatus ? "모집 중" : "모집 완료"}
                color={ridingStatus ? "primary" : "error"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={1}>
                  <Grid container item direction="column">
                    <Grid item zeroMinWidth sx={{ width: "100%" }}>
                      <Grid container item zeroMinWidth>
                        <Text variant="h5" noWrap>
                          {ridingTitle}
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Text variant="subtitle1">{region}</Text>
                      <Text variant="subtitle2">
                        {dayjs(ridingData).format("MM월DD일")}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={1}>
                    {tags.map((tag) => (
                      <Grid item xs="auto" key={tag}>
                        <Chip color="primary" textColor="white" label={tag} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item spacing={1}>
                    <Grid item xs="auto">
                      <Text variant="caption">
                        인원 {`${minParticipants}~${maxParticipants} 명`}
                      </Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">•</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">
                        현재 {currentParticipants} 명
                      </Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">•</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">레벨 {ridingLevel}</Text>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </OuterCard>
);

export default ListCard;
