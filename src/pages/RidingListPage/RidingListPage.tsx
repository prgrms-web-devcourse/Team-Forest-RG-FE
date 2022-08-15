/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { postList } from "@/recoil/state/PostState";
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
import Button from "@/components/Button";
import { getPostList } from "@/api/postList";
import { NoticeContainer } from "./RidingListPage.style";
import { StyledLink } from "../MyPage/components/MainTab/MainTab.style";

type dataType = {
  key: string | number;
  value: string | number;
  text: string | number;
};

const RidingListPage = () => {
  const [cityCode, setCityCode] = useState<string | number>(0);
  const [cityRegionData, setCityRegionData] = useState<dataType[]>([]);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [posts, setPosts] = useRecoilState(postList);
  const queryClient = useQueryClient();

  const { isLoading } = useQuery(["postList"], () => getPostList(), {
    onSuccess: (postData) => {
      setPosts(postData?.content);
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

  const filters: {
    id: number;
    data: any[];
    placeholder?: string;
    filterName: string;
  }[] = [
    {
      id: 1,
      data: bicycleTypeData,
      placeholder: "자전거 종류",
      filterName: "bicycleCode",
    },
    {
      id: 2,
      data: recruitTypeData,
      placeholder: "모집 상태",
      filterName: "ridingStatusCode",
    },
    { id: 3, data: levelData, placeholder: "레벨", filterName: "ridingLevel" },
  ];

  return (
    <Grid container direction="column" spacing={3} mt={2}>
      <Grid
        container
        item
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {filters.map(({ id, data: filterData, placeholder, filterName }) => (
          <Grid item key={id} xs={2}>
            <Filter
              filterData={filterData}
              placeholder={placeholder}
              filterName={filterName}
              isReset={isReset}
            />
          </Grid>
        ))}
        <Grid item xs={2}>
          <Filter
            filterData={regionData}
            setData={setCityCode}
            placeholder="시/도"
            disableFetch
            filterName=""
            isReset={isReset}
          />
        </Grid>
        <Grid item xs={2}>
          <Filter
            disabled={cityCode === 0 || !cityCode}
            filterData={cityRegionData}
            placeholder="시/군/구"
            filterName="addressCode"
            isReset={isReset}
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            color="error"
            onClick={() => {
              setIsReset(true);
              setTimeout(() => {
                setIsReset(false);
              }, 1000);
              queryClient.invalidateQueries(["postList"]);
            }}
          >
            리셋
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <Spinner />
      ) : posts?.length ? (
        <Lists data={posts} />
      ) : (
        <Grid container item>
          <Grid item xs={12}>
            <NoticeContainer>
              <Text variant="h4">🤦‍♂️ 조건에 맞는 라이딩이 없습니다...</Text>
              <div />
              <Text variant="body1">원하는 라이딩을 만들어 볼까요?</Text>
              <StyledLink to="/post/create">
                <Text variant="body2" color="#4AD395">
                  라이딩 만들기
                </Text>
              </StyledLink>
            </NoticeContainer>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default RidingListPage;
