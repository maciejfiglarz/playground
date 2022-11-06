import React from "react";

//import projets
import { gridSpacing } from "config/theme";

// material-ui
import { Grid } from "@mui/material";

type PropsType = {
  children: React.ReactNode;
};

const MainGrid = ({ children }: PropsType) => {
  return (
    <Grid
      maxWidth="xl"
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
