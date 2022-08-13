import axios from "axios";
import { Grid } from "@mui/material";
import axiosInstance from "@/api/axiosInstance";
import mainCarouselData from "./constants/CarouselData";
import { Navigation } from "swiper";
import Carousel from "@/components/Carousel";
import { CarouselWrapper } from "./MainPage.style";

function MainPage() {
  const getUser = async () => {
    const data = await axiosInstance({
      method: "GET",
      url: "/user/me",
    });
  };

  const postWringToken = async () => {
    try {
      await axios.get("http://192.168.0.22:8080/user/me", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjU5NTg3MDUzLCJpYXQiOjE2NTk1ODcwNTMsInVzZXJJZCI6MTAwfQ.lIadExSbzsvYCB7CzS_KbcA6eWnIjVHn0U6PpDNFsl0lX1wmJJ4ziRj8TN_5TgpSF1re-s37UrrGiEYF-le2lQ",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

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
        <Grid item>
          <h1>여행 정보</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainPage;
