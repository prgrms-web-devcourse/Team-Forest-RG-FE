import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import { getDetailPage } from "@/api/mock";
import Header from "./components/Header";
import SideInfo from "./components/SideInfo";

type sideDataType = Pick<React.ComponentProps<typeof SideInfo>, "data">["data"];

const RidingDetail = () => {
  const [sideData, setSideData] = useState<sideDataType | null>(null);
  const { data: detailData, isSuccess } = useQuery(
    ["riding-detail"],
    getDetailPage,
    {
      onSuccess: (data) => {
        console.log(data);
        setSideData({ ...data.riding });
      },
    }
  );

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
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
          <Grid container item>
            <Grid item xs={8}>
              main section
            </Grid>
            <Grid item xs={4}>
              {sideData && <SideInfo data={sideData} />}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default RidingDetail;
