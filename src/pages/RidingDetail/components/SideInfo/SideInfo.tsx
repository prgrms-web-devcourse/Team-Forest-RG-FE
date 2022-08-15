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
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state/authState";
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
            "YYYY-MM-DD A hh:mm"
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
        <Text variant="body1">
          {(value as SideInfoDataType["participants"]).length} 명
        </Text>
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
  const { open, modalOpen, modalClose } = useModal();
  const queryClient = useQueryClient();
  const userId = useRecoilValue(userState);

  const onSnackBarClose = useCallback(() => {
    setSnackBarOpen(false);
  }, []);

  const joinRiding = useMutation(() => joinPost(postId), {
    onSuccess: () => {
      setSnackBarOptions({
        message: "참가 신청이 완료 되었습니다",
        isError: false,
      });
      setSnackBarOpen(true);
      queryClient.invalidateQueries(["riding-detail", postId]);
    },
    onError: (error: any) => {
      setSnackBarOptions({
        message: error.response.data.message,
        isError: true,
      });
      setSnackBarOpen(true);
    },
  });

  const onSubmit = () => {
    joinRiding.mutate();
    modalClose();
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

  const isJoinDisable = useMemo(() => {
    return (
      !!data.participants.find((item) => item.id === userId) ||
      data.maxParticipant <= data.participants.length
    );
  }, [data, userId]);

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
                  {key === "participants" && (
                    <Grid item xs={12}>
                      <AvatarGroup max={5}>
                        {(value as SideInfoDataType["participants"]).map(
                          ({ id, nickname, profileImage }) => (
                            <ToolTip key={id} title={nickname}>
                              <Avatar src={profileImage} alt={nickname} />
                            </ToolTip>
                          )
                        )}
                      </AvatarGroup>
                    </Grid>
                  )}
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
                onClick={modalOpen}
                disabled={isJoinDisable}
              >
                참여하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={modalClose}
          onSubmit={onSubmit}
          label="라이딩 신청"
        >
          <DialogContentText>이 라이딩을 신청하시겠습니까?</DialogContentText>
        </Modal>
      </>
    );
  }, [processedData, modalOpen, open, modalClose, onSubmit]);

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
