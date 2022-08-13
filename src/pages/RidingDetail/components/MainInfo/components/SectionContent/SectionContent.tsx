import React from "react";
import { Grid, Box } from "@mui/material";
import Text from "@/components/Text";

interface SectionContentProps {
  contents: string;
  images: {
    id: number;
    imageUrl: string;
  }[];
}

const SectionContent = ({ contents, images }: SectionContentProps) => {
  return (
    <Grid container item direction="column">
      <Grid item>
        <Text variant="body1">{contents}</Text>
      </Grid>
      <Grid item container spacing={3}>
        {images.map(({ id, imageUrl }) => (
          <Grid item xs={6} key={id}>
            <Box
              component="img"
              src={imageUrl}
              alt={`${id}`}
              sx={{
                width: "100%",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default React.memo(SectionContent);
