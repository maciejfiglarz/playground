import React from "react";
import { Post as PostType } from "types";

import { Grid, Typography } from "@mui/material";

const Post = (post: PostType) => {
  const { title, description, image } = post;
  return (
    <Grid container wrap="nowrap" spacing={2} flexDirection={"column"}>
      <Grid item>
        <img style={{ width: "100%" }} src={image} alt={title} />
      </Grid>
      <Grid item>
        <Typography sx={{ mb: 1 }} variant="h4">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default Post;
