import React from "react";

//project imports
import { Post as PostType } from "types";
import { apiURL } from "config";

//material ui
import { Grid, Typography } from "@mui/material";

const Post = (post: PostType) => {
  const { title, description, image, prefix } = post;
  return (
    <Grid container wrap="nowrap" spacing={2} flexDirection={"column"}>
      <Grid item>
        <Typography sx={{ mb: 1 }} variant="h4">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </Grid>
      <Grid item>
        {image && (
          <img
            style={{ width: "100%" }}
            src={`${apiURL}posts/${prefix}/${image}`}
            alt={title}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Post;
