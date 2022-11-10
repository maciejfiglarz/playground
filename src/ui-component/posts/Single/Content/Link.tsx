import { Grid, Typography } from "@mui/material";
import { Post } from "types";

const Link = (post: Post) => {
  const { title, image, description, linkSiteUrl } = post;
  return (
    <Grid container wrap="nowrap" spacing={2} justifyContent={"space-between"}>
      <Grid item>
        <img style={{ maxWidth: "150px" }} src={image} 
        // alt={title}
         />
      </Grid>
      <Grid item>
        <Typography sx={{ mb: 1 }} variant="h4">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
        <Typography sx={{ mt: 1 }} component="p">
          {linkSiteUrl}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Link;
