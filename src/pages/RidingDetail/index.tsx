import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import { getDetailPage } from "@/api/mock";
import Header from "./components/Header";
import SideInfo from "./components/SideInfo";
import MainInfo from "./components/MainInfo";
import Divider from "@/components/Divider";
import Comments from "./components/Comments";

type sideDataType = Pick<React.ComponentProps<typeof SideInfo>, "data">["data"];
type mainDataType = React.ComponentProps<typeof MainInfo>;

const RidingDetail = () => {
  const [sideData, setSideData] = useState<sideDataType | null>(null);
  const [mainData, setMainData] = useState<mainDataType | null>(null);
  const { data: detailData, isSuccess } = useQuery(
    ["riding-detail"],
    getDetailPage,
    {
      onSuccess: (data) => {
        const {
          title,
          thumbnail,
          ridingCourses,
          departurePosition,
          details,
          createdAt,
          ...side
        } = data.riding;
        setSideData(side);
        setMainData({
          ridingCourses,
          departurePosition,
          details,
        });
      },
    }
  );

  return (
    <Grid container direction="column" alignItems="center" spacing={3} px={10}>
      {isSuccess && (
        <>
          <Grid container item>
            <Grid item xs={12}>
              <Header
                leader={detailData?.leader}
                thumbnail={detailData?.riding?.thumbnail}
                title={detailData?.riding?.title}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={8}>
              {mainData && <MainInfo {...mainData} />}
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                position: "relative",
              }}
            >
              {sideData && <SideInfo data={sideData} />}
            </Grid>
          </Grid>
        </>
      )}
      <Grid container item>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Comments />
      </Grid>
    </Grid>
  );
};

export default RidingDetail;
