import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { User } from "types";
import Avatar from "ui-component/extended/Avatar";
import Header from "ui-component/user/Header";

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
import Loader from "ui-component/loaders/Content";

const ProfileIndex = () => {
  const { id: idParam } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const getUser = async () => {
    setIsLoading(true);
    const response = await axios.get(`/api/user/${idParam}`);
    setUser(response.data);
    setIsLoading(false);
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
        {user ? (
          <>
            <Header {...user} />
            <Grid
              justifyContent="space-between"
              container
              spacing={gridSpacing}
            >
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
          </>
        ) : (
          <Loader />
        )}
      </Grid>
    </MainGrid>
  );
};

export default ProfileIndex;
