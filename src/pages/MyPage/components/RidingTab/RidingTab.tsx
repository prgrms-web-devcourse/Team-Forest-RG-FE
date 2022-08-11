import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { userState } from "@/recoil/state/authState";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import useUserInfo from "../../hooks/useUserInfo";
import {
  RIDING_TAB_PANELS,
  DEFAULT_RIDING_TAB_ITEM_LIST,
} from "../../mypageService";
import RidingRecords from "../RidingRecords";
import { Container, TabContainer } from "./RidingTab.style";

interface TabDataType {
  value: string;
  targetData: JSX.Element;
}
function RidingTab() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, loading] = useUserInfo(myUserId);
  const [TabData, setTabData] = useState(DEFAULT_RIDING_TAB_ITEM_LIST);

  useEffect(() => {
    const makeTabData = (user: any) =>
      TabData.map((tab: TabDataType) => ({
        value: tab.value,
        targetData: <RidingRecords ridings={user.ridings[tab.value]} />,
      }));

    if (userInfo) {
      const newTabData = makeTabData(userInfo);
      setTabData(newTabData);
    }
  }, [myUserId, userInfo]);

  if (loading) return <div>Loading</div>;
  return (
    <Container>
      <Text variant="h4">{myUserId}의 라이딩 내역</Text>
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
