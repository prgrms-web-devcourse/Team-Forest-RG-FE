import { useMemo } from "react";
import { Grid, AvatarGroup } from "@mui/material";
import Text from "@/components/Text";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import Avatar from "@/components/Avatar";

interface SideInfoProps {
  data: {
    riding_level: string;
    zone: string;
    fee: number;
    estimated_time: string;
    riding_date: string;
    bicycle_type: string[];
    max_participant: number;
    min_participant: number;
    participants?: {
      id: number;
      nickname: string;
      profile_image: string;
    }[];
  };
}

const SideInfo = ({ data }: SideInfoProps) => {
  const SideInfoBlock = useMemo(() => {
    const mainData: Array<{
      label: string;
      data: Exclude<keyof typeof data, "participants">;
    }> = [
      { label: "라이딩 레벨", data: "riding_level" },
      { label: "지역", data: "zone" },
      { label: "요금", data: "fee" },
      { label: "예상 소요 시간", data: "estimated_time" },
      { label: "라이딩 날짜", data: "riding_date" },
      { label: "자전거 유형", data: "bicycle_type" },
      { label: "최대 참여 인원", data: "max_participant" },
      { label: "최소 참여 인원", data: "min_participant" },
    ];
    return (
      <Grid direction="column" container spacing={2}>
        {mainData.map(({ label, data: key }) => (
          <Grid container item spacing={2} key={label}>
            <Grid item xs={5}>
              <Text variant="body1">{label}</Text>
            </Grid>
            <Grid item xs>
              <Text variant="body1">{data[key]}</Text>
            </Grid>
          </Grid>
        ))}
        <Grid container item>
          <Grid item xs={12}>
            <Divider variant="middle">
              <Text variant="body1">참여자</Text>
            </Divider>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <AvatarGroup max={6}>
              {data.participants?.map(
                ({ id, nickname, profile_image: profileImage }) => (
                  <Avatar key={id} src={profileImage} alt={nickname} />
                )
              )}
            </AvatarGroup>
          </Grid>
        </Grid>
      </Grid>
    );
  }, [data]);

  return <Card content={SideInfoBlock} />;
};

export default SideInfo;
