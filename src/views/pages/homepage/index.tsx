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
        // lg={2}
        // xl={2}
        xs={12}
        lg={3}
        xl={3}
        // sx={{
        //   outline: { lg: "1px solid red", md: "1px solid green" },
        //   display: { xs: "none", lg: "block" },
        //   // display: { xs: "none", lg: "block" },
        // }}
      >
        {/* <div style={{ width: "100%", height: "100%", background: "red" }}> */}
        <SidebarCategories text="Popularne grupy" />
        {/* </div> */}
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        lg={6}
        xl={6}
        // sx={{
        //   outline: { lg: "1px solid red", md: "1px solid green" },
        // }}
        // xs={12} lg={7} xl={7}
      >
        {/* <div style={{ width: "100%", height: "100%", background: "red" }}> */}
        <PostsList />
        {/* </div> */}
      </Grid>
      <Grid
        item
        xs={12}
        // lg={3}
        // xl={2}
        md={3}
        lg={3}
        xl={3}
        // sx={{
        //   outline: { lg: "1px solid red", md: "1px solid green" },
        //   display: { xs: "none", md: "block" },
        //   // display: { xs: "none", lg: "block" },
        // }}
      >
        {/* <div style={{ width: "100%", height: "100%", background: "red" }}> */}

        <SidebarComments text="Ostatnie komentarze" />

        {/* </div> */}
      </Grid>
    </MainGrid>
  );
};

export default Homepage;
