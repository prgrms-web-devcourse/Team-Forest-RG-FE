/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { Grid, Breadcrumbs, Icon } from "@mui/material";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import Map from "./components/Map";
import SectionContent from "./components/SectionContent";

interface MainInfoProps {
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
  ridingCourses,
  departurePosition,
  details,
}: MainInfoProps) => {
  const tabsData = useMemo(() => {
    return details.map(({ id, title }) => ({
      label: title,
      value: id,
    }));
  }, [details]);

  const renderData = useMemo(() => {
    return details.map(({ id, contents, images }) => ({
      value: id,
      targetData: <SectionContent contents={contents} images={images} />,
    }));
  }, [details]);

  return (
    <Grid container item direction="column">
      <Grid container item direction="column" alignItems="center">
        <Grid item width="100%">
          <Map {...departurePosition} />
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item xs={2}>
            <Text variant="h6" align="center">
              경로
            </Text>
          </Grid>
          <Grid item xs>
            <Breadcrumbs separator={<Icon>arrow_forward</Icon>}>
              {ridingCourses.map((course, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Text variant="h6" key={index}>
                  {course}
                </Text>
              ))}
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Tabs data={tabsData} renderData={renderData} />
      </Grid>
    </Grid>
  );
};

export default MainInfo;
