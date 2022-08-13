import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "@/recoil/state/authState";
import RidingRecords from "../common/RidingRecords";
import {
  DEFAULT_EVALUATED_TAB_ITEM_LIST,
  EVALUATED_TAB_PANELS,
  UserInfoType,
} from "../../mypageService";
import useUserInfo from "../../hooks/useUserInfo";
import { Container, TabContainer } from "./EvaluateTab.style";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";

function EvaluateTab() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  const [TabData, setTabData] = useState(DEFAULT_EVALUATED_TAB_ITEM_LIST);
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
          />
        ),
      }));

    if (userInfo) {
      const newTabData = makeTabData(userInfo);
      setTabData(newTabData);
    }
  }, [myUserId, userInfo]);

  const handleCardClick = (e: React.MouseEvent, id: number) => {
    navigate(`/mypage/evaluate/${id}`);
  };

  if (loading) return <div>Loading</div>;
  return (
    <Container>
      <Text variant="h5" textStyle={{ fontWeight: 600 }}>
        평가
      </Text>
      <TabContainer>
        <Tabs
          data={EVALUATED_TAB_PANELS}
          renderData={TabData}
          tabStyle={{ fontWeight: 700, fontSize: "1rem" }}
          centered
          fullWidth
        />
      </TabContainer>
    </Container>
  );
}

export default EvaluateTab;
