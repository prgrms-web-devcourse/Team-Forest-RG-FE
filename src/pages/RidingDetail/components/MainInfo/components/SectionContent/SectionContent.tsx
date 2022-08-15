import React from "react";
import { Grid, CardMedia, Card } from "@mui/material";
import Text from "@/components/Text";

interface SectionContentProps {
  title: string;
  contents: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
}

const SectionContent = ({ title, contents, images }: SectionContentProps) => {
  return (
    <Grid container item direction="column" rowSpacing={3}>
      <Grid item>
        <Text variant="h5">{title}</Text>
      </Grid>
      <Grid item container spacing={3}>
        {images.map(({ id, imageUrl }) => (
          <Grid item xs={6} key={id}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                image={imageUrl}
                alt={`${id}`}
                sx={{
                  width: "100%",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Text variant="body1">{contents}</Text>
      </Grid>
    </Grid>
  );
};

export default React.memo(SectionContent);
