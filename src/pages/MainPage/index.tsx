import { Grid, Stack } from "@mui/material";
import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import mainCarouselData from "./constants/CarouselData";
import Carousel from "@/components/Carousel";
import { CarouselWrapper, Container } from "./MainPage.style";
import RecommendList from "./components/RecommendList";
import { getPostList } from "@/api/postList";
import { userState } from "@/recoil/state/authState";
import useUserInfo from "../MyPage/hooks/useUserInfo";
import { convertToParameterKey, getBicycleNumber } from "./mainpageService";

function MainPage() {
  const myUserId = useRecoilValue(userState);
  const [userInfo, userLoading] = useUserInfo(myUserId);
  const [loading, setLoading] = useState(true);
  const [preference, setPreference] = useState({
    level: "하",
    bicycle: 1,
    region: 11,
  });
  const [recommendPostList, setRecommendPostList] = useState({
    level: [],
    bicycle: [],
    region: [],
  });

  useEffect(() => {
    if (!myUserId || !userInfo) return;
    setPreference((prev) => ({
      ...prev,
      level: userInfo!.ridingProfile.level || "하",
      bicycle: getBicycleNumber.indexOf(
        userInfo!.ridingProfile.bicycles[0] || "로드"
      ),
      region: userInfo!.ridingProfile.favoriteRegionCode || 11,
    }));
  }, [userInfo]);

  useEffect(() => {
    const fetchPosts = async (key: "level" | "bicycle" | "region") => {
      const parameter = {
        [convertToParameterKey[key]]: preference[key],
      };
      const { content } = await getPostList(parameter);
      await setRecommendPostList((prev) => ({
        ...prev,
        [key]: [...content],
      }));
    };

    const fetchAllList = async () => {
      await fetchPosts("level");
      await fetchPosts("bicycle");
      await fetchPosts("region");
      setLoading(false);
    };
    if (userLoading) return;
    fetchAllList();
  }, [userLoading, preference]);

  if (loading) return <div>Loading</div>;

  return (
    <Container>
      <Grid container item justifyContent="center">
        <CarouselWrapper>
          <Carousel
            data={mainCarouselData}
            options={{
              navigation: true,
              modules: [Navigation],
            }}
          />
        </CarouselWrapper>
      </Grid>
      <Grid container item direction="column">
        <Stack direction="column" marginY="3rem">
          <RecommendList
            data={recommendPostList.bicycle}
            label={
              myUserId
                ? `내가 좋아하는 ${
                    userInfo!.ridingProfile.bicycles[0]
                  } 라이딩 가보자!`
                : "요즘 대세 MTB 라이딩 가보자!"
            }
          />
          <RecommendList
            data={recommendPostList.level}
            label={
              myUserId
                ? "나와 비슷한 실력의 사람과 마음껏 라이딩!"
                : "자전거 입문자들 끼리 모여 천천히 달려요!"
            }
          />
          <RecommendList
            data={recommendPostList.region}
            label={
              myUserId
                ? `나와 가장 가까운 곳에서 열리는 라이딩!`
                : "지금 '서울'에서 진행 중인 라이딩!"
            }
          />
        </Stack>
      </Grid>
    </Container>
  );
}

export default MainPage;
