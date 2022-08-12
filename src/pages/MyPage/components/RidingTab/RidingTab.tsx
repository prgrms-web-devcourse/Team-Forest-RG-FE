import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "@/recoil/state/authState";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import useUserInfo from "../../hooks/useUserInfo";
import {
  RIDING_TAB_PANELS,
  DEFAULT_RIDING_TAB_ITEM_LIST,
  UserInfoType,
} from "../../mypageService";
import RidingRecords from "../RidingRecords";
import { Container, TabContainer } from "./RidingTab.style";

function RidingTab() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  const [TabData, setTabData] = useState(DEFAULT_RIDING_TAB_ITEM_LIST);
  const navigate = useNavigate();

  useEffect(() => {
    const makeTabData = (userData: UserInfoType) =>
      TabData.map((tab) => ({
        value: tab.value,
        targetData: (
          <RidingRecords
            ridings={userData.ridings[tab.value]}
            status={tab.value}
            onClickCard={handleCardClick}
            onCancelRiding={handleCancelClick}
          />
        ),
      }));

    if (userInfo) {
      const newTabData = makeTabData(userInfo);
      setTabData(newTabData);
    }
  }, [myUserId, userInfo]);

  const handleCardClick = (e: React.MouseEvent, id: number) => {
    navigate(`/post/${id}`);
  };

  const handleCancelClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    alert(`${id}번 라이딩 예약을 취소하시겠습니까?`);
  };

  if (loading) return <div>Loading</div>;
  return (
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
  );
}

export default RidingTab;
