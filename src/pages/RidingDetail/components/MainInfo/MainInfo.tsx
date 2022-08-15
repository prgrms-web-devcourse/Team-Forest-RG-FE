/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { Grid, Breadcrumbs, Icon } from "@mui/material";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import Map from "./components/Map";
import SectionContent from "./components/SectionContent";
import WithLabel from "@/components/WithLabel";
import Button from "@/components/Button";
import { userState } from "@/recoil/state/authState";
import Divider from "@/components/Divider";

interface MainInfoProps {
  postId: number;
  leaderId: number;
  ridingCourses: string[];
  departurePosition: {
    lat: number;
    lng: number;
  };
  details: {
    id: number;
    title: string;
    contents: string;
    images: {
      id: number;
      imageUrl: string;
    }[];
  }[];
}

const MainInfo = ({
  postId,
  leaderId,
  ridingCourses,
  departurePosition,
  details,
}: MainInfoProps) => {
  const userId = useRecoilValue(userState);
  const navigate = useNavigate();
  const tabsData = useMemo(() => {
    return details.map(({ id, title }) => ({
      label: title,
      value: id,
    }));
  }, [details]);

  const renderData = useMemo(() => {
    return details.map(({ id, title, contents, images }) => ({
      value: id,
      targetData: (
        <SectionContent contents={contents} images={images} title={title} />
      ),
    }));
  }, [details]);

  return (
    <Grid container item direction="column" alignItems="center" rowSpacing={2}>
      <Grid item width="100%">
        <WithLabel
          variant="h5"
          label="라이딩 장소"
          labelProps={{ gutterBottom: true }}
        >
          <Map {...departurePosition} />
        </WithLabel>
      </Grid>
      <Grid container item justifyContent="center" rowSpacing={3}>
        <Grid item xs={2}>
          <Text variant="h6" align="center">
            경로
          </Text>
        </Grid>
        <Grid item xs>
          <Breadcrumbs separator={<Icon fontSize="small">arrow_forward</Icon>}>
            {ridingCourses.map((course, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text variant="h6" key={`${course}_${index}`}>
                {course}
              </Text>
            ))}
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Divider />
        <Tabs
          data={tabsData}
          renderData={renderData}
          tabStyle={{
            fontSize: "1rem",
          }}
        />
      </Grid>
      {leaderId === userId && (
        <Button onClick={() => navigate(`/post/edit/${postId}`)}>
          글 수정
        </Button>
      )}
    </Grid>
  );
};

export default MainInfo;
