import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { User } from "types";
import Avatar from "ui-component/extended/Avatar";
import Header from "ui-component/user/Header";
import Modal from "ui-component/Modal";
import { gridSpacing } from "config/theme";
import MainGrid from "ui-component/MainGrid";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InfiniteList from "ui-component/InfinityList";

//assets
import Loader from "ui-component/loaders/Content";

const ProfileIndex = () => {
  const { id: idParam } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("profile");
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
    <MainGrid maxWidth="lg">
      <Grid item xs={12}>
        {user ? (
          <>
            <Header user={user} />
            <Grid
              justifyContent="space-between"
              container
              spacing={gridSpacing}
            >
              <Grid item xs={12} md={4}>
                <MainCard border={true}>
                  <Typography sx={{ mb: 2, fontWeight: 500 }} variant="h4">
                    O mnie
                  </Typography>
                  <Typography paragraph>{user.description}</Typography>
                </MainCard>
              </Grid>
              <Grid item xs={12} md={8}>
                <InfiniteList />
              </Grid>
              {/* <Grid item xs={12} md={2}>
              <MainCard border={true} sx={{}}>
                  <>
                    Europe: 50 (+6) countries, 230 languages, 746M people… 1
                    subreddit.
                  </>
                  <Stack></Stack>
                </MainCard>
              </Grid> */}
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
