import { useEffect, useState } from "react";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { Category } from "types";
import Avatar from "ui-component/extended/Avatar";

import { gridSpacing } from "config/theme";
import { useParams } from "react-router-dom";
import SidebarCategories from "ui-component/sidebar/categories";
import { borderRadius as themeBorderRadius } from "config/theme";
import PostsList from "ui-component/posts/list";
import SidebarComments from "ui-component/sidebar/comments";
import MainGrid from "ui-component/MainGrid";

// material-ui
import { Grid, CardMedia, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//assets
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
// import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';

// const tabOptions = [
//     {
//         to: '/user/social-profile/posts',
//         icon: <IconInbox stroke={1.5} size="1.1rem" />,
//         label: 'Profile'
//     },
//     {
//         to: '/user/social-profile/follower',
//         icon: <IconUsers stroke={1.5} size="1.1rem" />,
//         label: 'Followers'
//     },
//     {
//         to: '/user/social-profile/friends',
//         icon: <IconFriends stroke={1.5} size="1.1rem" />,
//         label: (
//             <>
//                 {/* friends <Chip label="100" size="small" chipcolor="secondary" sx={{ ml: 1.5 }} /> */}
//             </>
//         )
//     },
//     {
//         to: '/user/social-profile/gallery',
//         icon: <IconPhoto stroke={1.5} size="1.1rem" />,
//         label: 'Gallery'
//     },
//     {
//         to: '/user/social-profile/friend-request',
//         icon: <IconUserPlus stroke={1.5} size="1.1rem" />,
//         label: 'Friend Request'
//     }
// ];

const CategorySingle = () => {
  const { id: idParam } = useParams();
  const theme = useTheme();
  // const dispatch = useAppDispatch();
  const [category, setCategory] = useState<Category | null>(null);

  const getCategory = async () => {
    const response = await axios.get(`/api/category/${idParam}`);
    setCategory(response.data);
  };

  console.log("category", category);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <MainGrid>
      {/* <Grid item lg={2} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarCategories />
      </Grid> */}
      <Grid item xs={12} lg={10} xl={12}>
        {category && (
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
                image={category.cover}
                sx={{
                  borderRadius: `${themeBorderRadius}px`,
                  overflow: "hidden",
                  // m: 0.1
                }}
              />

              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={2}>
                  {/* {isLoading ? (
                                    <ImagePlaceholder
                                        sx={{
                                            margin: '-70px 0 0 auto',
                                            borderRadius: '16px',
                                            [theme.breakpoints.down('lg')]: {
                                                margin: '-70px auto 0'
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                margin: '-60px auto 0'
                                            },
                                            width: { xs: 72, sm: 100, md: 140 },
                                            height: { xs: 72, sm: 100, md: 140 }
                                        }}
                                    />
                                ) : (
                                    <Avatar
                                        alt="User 1"
                                        src={User1}
                                        sx={{
                                            margin: '-70px 0 0 auto',
                                            borderRadius: '16px',
                                            [theme.breakpoints.down('lg')]: {
                                                margin: '-70px auto 0'
                                            },
                                            [theme.breakpoints.down('md')]: {
                                                margin: '-60px auto 0'
                                            },
                                            width: { xs: 72, sm: 100, md: 140 },
                                            height: { xs: 72, sm: 100, md: 140 }
                                        }}
                                    />
                                )} */}
                  <Avatar
                    alt="User 1"
                    src={category.thumb}
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
                        {category.name}
                      </Typography>
                      {/* <Typography variant="subtitle2">
                                                {category.description}
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
            <SidebarComments text="Ostatnie komentarze" />
          </Grid>
        </Grid>
      </Grid>
    </MainGrid>
  );
};

export default CategorySingle;
