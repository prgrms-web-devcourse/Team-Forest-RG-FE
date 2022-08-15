import { useMemo, useState, useEffect, useCallback } from "react";
import {
  Grid,
  AvatarGroup,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  DialogContentText,
  Portal,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { joinPost } from "@/api/posts";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";
import ToolTip from "@/components/ToolTip";
import Card from "@/components/Card";
import Chip from "@/components/Chip";
import Button from "@/components/Button";
import { keyToLabel } from "./utils/handleData";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import SnackBar from "@/components/SnackBar";

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
  postId: number;
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
        <Stack
          spacing={2}
          direction="row"
          sx={{
            flexWrap: "wrap",
            rowGap: 2,
          }}
        >
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

const SideInfo = ({ data, postId }: SideInfoProps) => {
  const [processedData, setProcessedData] = useState<Array<dataObjectType>>([]);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
  const [snackBarOptions, setSnackBarOptions] = useState<{
    message: string;
    isError: boolean;
  }>({ message: "", isError: false });
  const { open, handleOpen, handleClose } = useModal();
  const queryClient = useQueryClient();

  const onSnackBarClose = useCallback(() => {
    setSnackBarOpen(false);
  }, []);

  const joinRiding = useMutation(() => joinPost(postId), {
    onSuccess: (response) => {
      setSnackBarOptions({ message: response?.data, isError: false });
      setSnackBarOpen(true);
      queryClient.invalidateQueries(["riding-detail", postId]);
    },
    onError: (error: any) => {
      setSnackBarOptions({ message: error.message, isError: true });
      setSnackBarOpen(true);
    },
  });

  const onSubmit = () => {
    joinRiding.mutate();
    handleClose();
  };

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
      <>
        <Portal container={document.querySelector("#root")}>
          <SnackBar
            open={snackBarOpen}
            onClose={onSnackBarClose}
            {...snackBarOptions}
          />
        </Portal>
        <Grid direction="column" container spacing={2}>
          {processedData.map(({ label, key, value }) => (
            <Grid container item spacing={2} key={label} alignItems="center">
              {key === "bicycleType" ? (
                <Grid item xs={12} py={0}>
                  <Accordion
                    sx={{
                      maring: 0,
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<Icon>expand_more</Icon>}
                      sx={{ padding: 0 }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Text variant="body1">{label}</Text>
                        <Text variant="body1" color="primary">
                          목록 보기
                        </Text>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      {handleValue(key, value)}
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ) : (
                <>
                  <Grid item xs={5}>
                    <Text variant="body1">{label}</Text>
                  </Grid>
                  <Grid item xs>
                    {handleValue(key, value)}
                  </Grid>
                </>
              )}
            </Grid>
          ))}
          <Grid container item alignItems="center">
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleOpen}
                disabled={data.participants.length === data.maxParticipant}
              >
                참여하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          onSubmit={onSubmit}
          label="라이딩 신청"
        >
          <DialogContentText>이 라이딩을 신청하시겠습니까?</DialogContentText>
        </Modal>
      </>
    );
  }, [processedData, handleOpen, open, handleClose, onSubmit]);

  return (
    <Card
      content={SideInfoBlock}
      sx={{
        position: "sticky",
        top: "200px",
      }}
    />
  );
};

export default SideInfo;
