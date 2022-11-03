import { useEffect } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import PostsList from "ui-component/posts/list";
import { gridSpacing } from "config/theme";
import SidebarTitle from "ui-component/sidebars/Title";
import SidebarComments from "ui-component/sidebars/comments";
import SidebarCategories from "ui-component/sidebars/categories";

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
    <Grid
      maxWidth="xl"
    //   sx={{ margin: "0 auto" }}
      container
      justifyContent="space-around"
      spacing={gridSpacing}
    >
      <Grid item lg={2} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarCategories />
      </Grid>
      <Grid item xs={12} lg={7} xl={5}>
        <PostsList />
      </Grid>
      <Grid item lg={3} xl={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarTitle text={"Komentarze"} />
        <SidebarComments />
      </Grid>
    </Grid>
  );
};

export default Homepage;
