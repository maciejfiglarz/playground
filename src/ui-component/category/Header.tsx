import { useContext, useEffect, useState } from "react";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";

//material ui
import { Category } from "types";
import Avatar from "ui-component/extended/Avatar";
import { gridSpacing } from "config/theme";
import { borderRadius as themeBorderRadius } from "config/theme";

// material-ui
import {
  Grid,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppContext from "contexts/AppContext";

//assets
import PersonAddTwoToneIcon from "@mui/icons-material/People";

const Header = ({ thumb, cover, name }: Category) => {
  const theme = useTheme();
  const { setIsGuardModal } = useContext(AppContext);
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MainCard
      border={true}
      sx={{
        mb: 4,
      }}
    >
      <CardMedia
        component="img"
        image={cover}
        sx={{
          borderRadius: `${themeBorderRadius}px`,
          overflow: "hidden",
          // m: 0.1
        }}
      />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={2}>
          <Avatar
            alt="User 1"
            src={thumb}
            sx={{
              margin: "-70px 0 0 30px",
              borderRadius: "16px",
              [theme.breakpoints.down("lg")]: {
                margin: "-70px auto 0",
              },
              [theme.breakpoints.down("md")]: {
                margin: "-60px auto 0",
              },
              width: { xs: 72, sm: 100, md: 140 },
              height: { xs: 72, sm: 100, md: 140 },
            }}
          />
        </Grid>
        <Grid sx={{ mt: matchDownMD ? 0 : 3.5 }} item xs={12} md={10}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  fontWeight: 600,
                  textAlign: matchDownMD ? "center" : "left",
                }}
                variant="h3"
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                container
                spacing={1}
                sx={{
                  justifyContent: "flex-end",
                  [theme.breakpoints.down("lg")]: {
                    justifyContent: "center",
                  },
                }}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<PersonAddTwoToneIcon />}
                    onClick={() => setIsGuardModal(true)}
                  >
                    Obserwuj
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Header;
