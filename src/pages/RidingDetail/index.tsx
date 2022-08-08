import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import { getDetailPage } from "@/api/mock";
import Header from "./components/Header";

const RidingDetail = () => {
  const { data: detailData } = useQuery(["riding-detail"], getDetailPage, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <Grid container direction="column" alignItems="center">
      <Header
        leader={detailData?.leader}
        thumbnail={detailData?.riding?.thumbnail}
      />
    </Grid>
  );
};

export default RidingDetail;
