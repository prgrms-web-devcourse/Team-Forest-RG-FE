import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import { DialogContentText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "response";
import { useQueryClient } from "@tanstack/react-query";
import { userState } from "@/recoil/state/authState";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import useUserInfo from "../../hooks/useUserInfo";
import {
  RIDING_TAB_PANELS,
  DEFAULT_RIDING_TAB_ITEM_LIST,
} from "../../mypageService";
import RidingRecords from "../common/RidingRecords";
import { Container, TabContainer } from "./RidingTab.style";
import useModal from "@/hooks/useModal";
import Modal from "@/components/Modal";
import { cancelPost } from "@/api/posts";

function RidingTab() {
  const quertClient = useQueryClient();
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  const [TabData, setTabData] = useState(DEFAULT_RIDING_TAB_ITEM_LIST);
  const [postId, setPostId] = useState<number | null>(null);
  const { open, modalOpen, modalClose } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const makeTabData = (userData: UserInfo) =>
      TabData.map((tab) => ({
        value: tab.value,
        targetData: (
          <RidingRecords
            ridings={userData.ridings[tab.value]}
            status={tab.value}
            onClickCard={(e: React.MouseEvent, id: number) =>
              navigate(`/post/${id}`)
            }
            onCancelRiding={handleCancelClick}
          />
        ),
      }));

    if (userInfo) {
      const newTabData = makeTabData(userInfo);
      setTabData(newTabData);
    }
  }, [myUserId, userInfo, postId]);

  useEffect(() => {
    console.log(userInfo, loading);
  }, [userInfo, loading]);
  const handleCancelClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setPostId(id!);
    modalOpen();
  };

  const onConfirmModal = async () => {
    await cancelPost(postId!);
    await quertClient.invalidateQueries(["user-fetch"]);
    await setPostId(null);
    modalClose();
  };
  if (loading) return <div>Loading</div>;
  return (
    <>
      <Container>
        <Text variant="h5" textStyle={{ fontWeight: 600 }}>
          나의 라이딩 내역
        </Text>
        <TabContainer>
          <Tabs
            data={RIDING_TAB_PANELS}
            renderData={TabData}
            tabStyle={{ fontWeight: 700, fontSize: "1rem" }}
            centered
            fullWidth
          />
        </TabContainer>
      </Container>
      <Modal
        open={open}
        onSubmit={onConfirmModal}
        onClose={modalClose}
        label="라이딩 취소"
      >
        <DialogContentText>라이딩 예약을 취소하시겠습니까?</DialogContentText>
      </Modal>
    </>
  );
}

export default RidingTab;
