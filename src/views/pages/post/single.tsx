import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
// import PostsList from 'ui-component/posts/list';
import axiosApi from "utils/axiosApi";
import { Post } from "types";
// import { fetchById } from 'store/singlePostSlice';
// import { useAppDispatch } from 'store';
import { gridSpacing } from "config/theme";
import SidebarTitle from "ui-component/sidebars/Title";
import SidebarComments from "ui-component/sidebars/comments";
import SidebarCategories from "ui-component/sidebars/categories";
import { useParams } from "react-router-dom";
import Single from "ui-component/posts/Single";

const SinglePost = () => {
  const { id: idParam } = useParams();
  // const dispatch = useAppDispatch();
  const [post, setPost] = useState<Post | null>(null);

  const getPost = async () => {
    const { data } = await axiosApi.get(`/post/${idParam}`);
    console.log("data", data);
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Grid
      maxWidth="xl"
      container
      justifyContent="space-between"
      spacing={gridSpacing}
    >
  <Grid item lg={2} xl={2} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarCategories />
      </Grid>
      <Grid item xs={12} lg={7} xl={5}>
        {post && <Single {...post} />}
      </Grid>
      <Grid item lg={3} xl={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarTitle text={"Komentarze"} />
        <SidebarComments />
      </Grid>
    </Grid>
  );
};

export default SinglePost;
