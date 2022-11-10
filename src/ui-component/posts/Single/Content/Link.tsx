//project imports
import { Post } from "types";

//material ui
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Link = (post: Post) => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, image, description, linkSiteUrl } = post;
  return (
    <Grid
      container
      wrap={matchDownSm ? "wrap" : "nowrap"}
      spacing={2}
      justifyContent={"space-between"}
    >
      <Grid item>
        <img
          style={{ maxWidth: matchDownSm ? "100%" : "150px" }}
          src={image}
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
