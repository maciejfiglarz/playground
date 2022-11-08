import { useEffect } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import PostsList from "ui-component/posts/list";
import { gridSpacing } from "config/theme";
import SidebarComments from "ui-component/sidebar/comments";
import SidebarCategories from "ui-component/sidebar/categories";
import MainGrid from "ui-component/MainGrid";

// ==============================|| HOMEPAGE ||============================== //

const Homepage = () => {
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  // const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  // const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

  return (
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
        <SidebarCategories text="Popularne grupy" />
      </Grid>
      <Grid item xs={12} md={9} lg={6} xl={6}>
        <PostsList />
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
        <SidebarComments text="Ostatnie komentarze" />
      </Grid>
    </MainGrid>
  );
};

export default Homepage;
