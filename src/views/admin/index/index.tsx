import React from "react";

import SidebarCategoriesAdmin from "ui-component/sidebar/admin-panel/index";

import { Grid } from "@mui/material";
import MainGrid from "ui-component/MainGrid";

import { styled, Theme } from "@mui/material/styles";

const Index = () => {
  return (
    <>
      <MainGrid>
        <Grid
          item
          xs={12}
          lg={3}
          xl={3}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <SidebarCategoriesAdmin text="Panel administracyjny2" />
        </Grid>
        <Grid item xs={12} md={9} lg={6} xl={6}>
          <p>Środek</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <p>Coś tutaj dajemy?</p>
        </Grid>
      </MainGrid>
    </>
  );
};

export default Index;
