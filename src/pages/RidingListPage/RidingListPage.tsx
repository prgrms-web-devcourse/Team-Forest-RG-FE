import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Filter from "./components/Filter";
import {
  bicycleTypeData,
  recruitTypeData,
  levelData,
  regionData,
} from "./constants/filterData";

type dataType = {
  key: string | number;
  value: string | number;
  text: string | number;
};

const RidingListPage = () => {
  const [cityCode, setCityCode] = useState<string | number>(0);
  const [cityRegionData, setCityRegionData] = useState<dataType[]>([]);

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
    <Grid container direction="column">
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
          />
        </Grid>
        <Grid item xs={2}>
          <Filter filterData={cityRegionData} placeholder="군/구" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RidingListPage;
