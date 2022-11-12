import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

//project imports
import { Post as PostType } from "types";
import { apiURL } from "config";

//material ui
import { Grid, Typography, Box, Button } from "@mui/material";

//assets
import iconPlay from "assets/icons/play.png";

const Post = (post: PostType) => {
  const { title, description, image, youtubeID } = post;
  const [isPlayerDisplayed, setIsPlayerDisplayed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Grid container wrap="nowrap" spacing={2} flexDirection={"column"}>
      <Grid item>
        <Typography sx={{ mb: 1 }} variant="h4">
          {title} {youtubeID}
        </Typography>
        <Typography component="p">
          {typeof description === "string" &&
            (isExpanded ? description : `${description.substring(0, 250)}`)}
          {!isExpanded && (
            <Button
              onClick={() => setIsExpanded(true)}
              size="small"
              sx={{ display: "inline" }}
              variant="text"
            >
              więcej...
            </Button>
          )}
        </Typography>
      </Grid>
      <Grid item sx={{ textAlign: "center" }}>
        {!youtubeID && (
          <img
            style={{ maxWidth: "100%" }}
            src={image}
            alt={title ? title : ""}
          />
        )}

        {youtubeID && (
          <>
            {isPlayerDisplayed ? (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Box
                onClick={() => (youtubeID ? setIsPlayerDisplayed(true) : null)}
                sx={{ position: "relative", cursor: "pointer" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 50,
                  }}
                  src={iconPlay}
                />

                <img
                  style={{ maxWidth: "100%" }}
                  src={image}
                  alt={title ? title : ""}
                />
              </Box>
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Post;
