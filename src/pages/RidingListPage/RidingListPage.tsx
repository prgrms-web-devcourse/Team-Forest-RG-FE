import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Filter from "./components/Filter";
import {
  bicycleTypeData,
  recruitTypeData,
  levelData,
  regionData,
} from "./constants/filterData";
import Lists from "./components/Lists";
import Text from "@/components/Text";
import Spinner from "@/components/Spinner";
import { getPostList } from "@/api/postList";

type dataType = {
  key: string | number;
  value: string | number;
  text: string | number;
};

const RidingListPage = () => {
  const [cityCode, setCityCode] = useState<string | number>(0);
  const [cityRegionData, setCityRegionData] = useState<dataType[]>([]);

  const { data, isLoading } = useQuery(["postList"], () => getPostList(), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    if (cityCode) {
      const detailsIndex = regionData.findIndex(
        (item) => item.value === cityCode
      );
      // eslint-disable-next-line no-unused-expressions
      setCityRegionData(regionData[detailsIndex].details);
    }
  }, [cityCode]);

  const filters: { id: number; data: any[]; placeholder?: string }[] = [
    { id: 1, data: bicycleTypeData, placeholder: "자전거 종류" },
    { id: 2, data: recruitTypeData, placeholder: "모집 상태" },
    { id: 3, data: levelData, placeholder: "레벨" },
  ];

  return (
    <Grid container direction="column" spacing={3}>
      <Grid container item spacing={2}>
        {filters.map(({ id, data, placeholder }) => (
          <Grid item key={id} xs={2}>
            <Filter filterData={data} placeholder={placeholder} />
          </Grid>
        ))}
        <Grid item xs={2}>
          <Filter
            filterData={regionData}
            setData={setCityCode}
            placeholder="시"
            disableFetch
          />
        </Grid>
        <Grid item xs={2}>
          <Filter filterData={cityRegionData} placeholder="군/구" />
        </Grid>
      </Grid>
      {isLoading ? (
        <Spinner />
      ) : data?.content?.length ? (
        <Lists data={data?.content} />
      ) : (
        <Grid container item>
          <Grid item xs={12}>
            <Text variant="h3">🤦‍♂️ 아직 데이터가 존재하지 않습니다!</Text>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RidingListPage;
