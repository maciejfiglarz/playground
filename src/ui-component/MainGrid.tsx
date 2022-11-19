import React from "react";

//import projets
import { gridSpacing } from "config/theme";

// material-ui
import { Grid } from "@mui/material";

type PropsType = {
  children: React.ReactNode;
  maxWidth?: "lg" |  "xl"
};

const MainGrid = ({ children , maxWidth = "xl" }: PropsType) => {
  return (
    <Grid
      maxWidth={maxWidth}
      //   sx={{ margin: "0 auto" }}
      // sx={{ outline: "1px solid pink" }}
      container
      justifyContent="justify-content"
      spacing={gridSpacing}
    >
      {children}
    </Grid>
  );
};

export default MainGrid;
