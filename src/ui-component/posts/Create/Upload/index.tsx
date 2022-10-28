import React from "react";

//project imports
import Image from "./Image";

//material ui
import { Box } from "@mui/system";
import { Grid, Button } from "@mui/material";

//assets
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Upload = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item>
        <Image />
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="inherit"
          startIcon={<YouTubeIcon />}
        >
          Youtube
        </Button>
      </Grid>
    </Grid>
  );
};

export default Upload;
