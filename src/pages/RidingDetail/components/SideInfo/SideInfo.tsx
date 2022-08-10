import { useMemo, useState, useEffect } from "react";
import { Grid, AvatarGroup, Stack } from "@mui/material";
import dayjs from "dayjs";
import Text from "@/components/Text";
import Card from "@/components/Card";
import Avatar from "@/components/Avatar";
import ToolTip from "@/components/ToolTip";
import Chip from "@/components/Chip";
import Button from "@/components/Button";
import { keyToLabel } from "./utils/handleData";

export interface SideInfoProps {
  data: {
    ridingLevel: string;
    zone: {
      code: number;
      name: string;
    };
    fee: number;
    estimatedTime: string;
    ridingDate: string;
    bicycleType: string[];
    maxParticipant: number;
    minParticipant: number;
    participants: {
      id: number;
      nickname: string;
      profileImage: string;
    }[];
  };
}

type SideInfoDataType = SideInfoProps["data"];

export type dataObjectType = {
  label: string;
  key: keyof SideInfoDataType;
  value: SideInfoDataType[keyof SideInfoDataType];
};

const handleValue = (
  key: dataObjectType["key"],
  value: dataObjectType["value"]
): JSX.Element => {
  switch (key) {
    case "ridingDate":
      return (
        <Text variant="body1">
          {dayjs(value as SideInfoDataType["ridingDate"]).format(
            "YYYY-MM-DD HH:mm"
          )}
        </Text>
      );
    case "bicycleType":
      return (
        <Stack spacing={2} direction="row">
          {(value as SideInfoDataType["bicycleType"]).map((type) => (
            <Chip key={type} label={type} />
          ))}
        </Stack>
      );
    case "zone":
      return (
        <Text variant="body1">{(value as SideInfoDataType["zone"]).name}</Text>
      );
    case "participants":
      return (
        <AvatarGroup max={5}>
          {(value as SideInfoDataType["participants"]).map(
            ({ id, nickname, profileImage }) => (
              <ToolTip key={id} title={nickname}>
                <Avatar src={profileImage} alt={nickname} />
              </ToolTip>
            )
          )}
        </AvatarGroup>
      );
    default:
      return <Text variant="body1">{value as string | number}</Text>;
  }
};

const SideInfo = ({ data }: SideInfoProps) => {
  const [processedData, setProcessedData] = useState<Array<dataObjectType>>([]);

  useEffect(() => {
    const newData = (
      Object.keys(data) as Array<keyof SideInfoProps["data"]>
    ).map((key) => ({
      label: keyToLabel(key),
      key,
      value: data[key],
    }));
    setProcessedData(newData);
  }, [data]);

  const SideInfoBlock = useMemo(() => {
    return (
      <Grid direction="column" container spacing={2}>
        {processedData.map(({ label, key, value }) => (
          <Grid container item spacing={2} key={label} alignItems="center">
            <Grid item xs={5}>
              <Text variant="body1">{label}</Text>
            </Grid>
            <Grid item xs>
              {handleValue(key, value)}
            </Grid>
          </Grid>
        ))}
        <Grid container item alignItems="center">
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary">
              참여하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }, [processedData]);

  return <Card content={SideInfoBlock} />;
};

export default SideInfo;
