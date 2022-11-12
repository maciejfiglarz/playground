import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { User } from "types";
import Avatar from "ui-component/extended/Avatar";

import { gridSpacing } from "config/theme";
import { borderRadius as themeBorderRadius } from "config/theme";
import PostsList from "ui-component/posts/list";
import SidebarComments from "ui-component/sidebar/comments";
import MainGrid from "ui-component/MainGrid";

// material-ui
import { Grid, CardMedia, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";

const ProfileIndex = () => {
  const { id: idParam } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const theme = useTheme();

  const getUser = async () => {
    const response = await axios.get(`/api/user/${idParam}`);
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <MainGrid>
      {/* <Grid item lg={2} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
    <SidebarCategories />
  </Grid> */}
      <Grid item xs={12} lg={10} xl={12}>
        {user && (
          <>
            <MainCard
              border={true}
              sx={{
                mb: 4,
                // textAlign: 'center',
                // [theme.breakpoints.down('lg')]: {
                //     textAlign: 'center'
                // }
              }}
            >
              <CardMedia
                component="img"
                image={user.cover}
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
                    src={user.avatar}
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
                <Grid sx={{ mt: 3.5 }} item xs={12} md={10}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 600 }} variant="h3">
                        {user.login}
                      </Typography>
                      {/* <Typography variant="subtitle2">
                                            {user.description}
                                        </Typography> */}
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                        {/* <Grid item>
                                                <Button variant="outlined">
                                                    Message
                                                </Button>
                                            </Grid> */}
                        <Grid item>
                          <Button
                            variant="contained"
                            startIcon={<PersonAddTwoToneIcon />}
                          >
                            Obserwuj
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* <Grid
                                    container
                                    justifyContent="flex-end"
                                >co to</Grid> */}
                </Grid>
              </Grid>
            </MainCard>
          </>
        )}
        <Grid justifyContent="space-between" container spacing={gridSpacing}>
          <Grid item xs={12} md={3}>
            <MainCard border={true} sx={{}}>
              <>
                Europe: 50 (+6) countries, 230 languages, 746M people… 1
                subreddit.
              </>
              <Stack></Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <PostsList />
          </Grid>
          <Grid item xs={12} md={3}>
            Right
          </Grid>
        </Grid>
      </Grid>
    </MainGrid>
  );
};

export default ProfileIndex;
