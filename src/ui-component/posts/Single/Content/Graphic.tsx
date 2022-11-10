import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

//project imports
import { Post as PostType } from "types";
import { apiURL } from "config";

//material ui
import { Grid, Typography, Box } from "@mui/material";

//assets
import iconPlay from "assets/icons/play.png";

const Post = (post: PostType) => {
  const { title, description, image, youtubeID } = post;
  const [isPlayerDisplayed, setIsPlayerDisplayed] = useState(false);

  return (
    <Box sx={{ textAlign: "center" }}>
      <img style={{ maxWidth: "100%" }} src={image} alt={title ? title : ""} />
    </Box>
  );
};

export default Post;
