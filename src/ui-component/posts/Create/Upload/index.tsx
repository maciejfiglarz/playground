import React from "react";

//project imports
import Image from "./Image";
import Youtube from "./Youtube";

//material ui
import { Box } from "@mui/system";
import { Grid, Button } from "@mui/material";

//assets

const Upload = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item>
        <Image />
      </Grid>
      <Grid item>
        <Youtube />
      </Grid>
    </Grid>
  );
};

export default Upload;
