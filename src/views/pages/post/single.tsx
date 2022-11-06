import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";
import axiosApi from "utils/axiosApi";
import { Post } from "types";

//project imports
import SidebarComments from "ui-component/sidebar/comments";
import SidebarCategories from "ui-component/sidebar/categories";
import { useParams } from "react-router-dom";
import Single from "ui-component/posts/Single";
import { gridSpacing } from "config/theme";

const SinglePost = () => {
  const { id: idParam } = useParams();
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
        <SidebarCategories text="Aktywne grupy" />
      </Grid>
      <Grid item xs={12} lg={7} xl={5}>
        {post && <Single {...post} />}
      </Grid>
      <Grid item lg={3} xl={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <SidebarComments text="Ostatnie komentarze" />
      </Grid>
    </Grid>
  );
};

export default SinglePost;
