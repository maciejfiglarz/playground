import { useState } from "react";
import { useParams } from "react-router-dom";

//project imports
import { useAppSelector } from "store";
import { gridSpacing } from "config/theme";
import MainGrid from "ui-component/MainGrid";
import MainCard from "ui-component/MainCard";
import Profile from "ui-component/user/settings/Profile";
import ChangePassword from "ui-component/user/settings/security/ChangePassword";
import Menu from "ui-component/user/settings/Menu";

//material ui
import Header from "ui-component/user/Header";
import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import ChangeEmail from "ui-component/user/settings/security/ChangeEmail";

const UserSettings = () => {
  const { page } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);
  const theme = useTheme();
  return (
    <>
      <MainGrid maxWidth="lg">
        <Grid item xs={12} lg={12} xl={12}>
          {userInfo && (
            <>
              <Header user={userInfo} />
              <Grid
                justifyContent="space-between"
                container
                spacing={gridSpacing}
              >
                <Grid
                  sx={{ display: { xs: "none", md: "block" } }}
                  item
                  xs={12}
                  md={3}
                >
                  <MainCard border={true}>
                    <Menu />
                  </MainCard>
                </Grid>
                <Grid item xs={12} md={9}>
                  <MainCard border={true}>
                    <Box sx={{ maxWidth: 700, margin: "0 auto" }}>
                      {page === "profil" && <Profile />}
                      {page === "zmien-haslo" && <ChangePassword />}
                      {page === "zmien-email" && <ChangeEmail />}
                    </Box>
                  </MainCard>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </MainGrid>
    </>
  );
};

export default UserSettings;
