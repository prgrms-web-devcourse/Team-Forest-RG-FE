import { Card, Grid, CardContent } from "@mui/material";
import Chip from "@/components/Chip";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";
import { OuterCard } from "./ListCard.style";

interface props {
  thumbnail: string;
  profileImage: string;
  nickname: string;
  ridingStatus: boolean;
  ridingTitle: string;
  subtitle: string;
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
  nickname,
  ridingStatus,
  ridingTitle,
  subtitle,
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
              <Text variant="h5" color="white" noWrap>
                {nickname}
              </Text>
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
                        <Text variant="h4" noWrap>
                          {ridingTitle}
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Text variant="subtitle1">{subtitle}</Text>
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
                      <Text variant="caption">최소 {minParticipants}</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">•</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">최대 {maxParticipants}</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">•</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">현재 {currentParticipants}</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">•</Text>
                    </Grid>
                    <Grid item xs="auto">
                      <Text variant="caption">{region}</Text>
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
