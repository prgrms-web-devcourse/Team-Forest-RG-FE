import { Grid, Stack } from "@mui/material";
import { Navigation } from "swiper";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import mainCarouselData from "./constants/CarouselData";
import Carousel from "@/components/Carousel";
import { CarouselWrapper } from "./MainPage.style";
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
  });
  const [recommendPostList, setRecommendPostList] = useState({
    level: [],
    bicycle: [],
  });

  useEffect(() => {
    if (!myUserId || !userInfo) return;
    setPreference((prev) => ({
      ...prev,
      level: userInfo!.ridingProfile.level,
      bicycle: getBicycleNumber.indexOf(
        userInfo!.ridingProfile.bicycles[0] || "로드"
      ),
    }));
  }, [userInfo]);

  useEffect(() => {
    const fetchPosts = async (key: "level" | "bicycle") => {
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
      setLoading(false);
    };
    if (userLoading) return;
    fetchAllList();
  }, [userLoading, preference]);
  if (loading) return <div>Loading</div>;

  return (
    <Grid container direction="column">
      <Grid container item justifyContent="center">
        <Grid item xs={6}>
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
        </Stack>
      </Grid>
    </Grid>
  );
}

export default MainPage;
