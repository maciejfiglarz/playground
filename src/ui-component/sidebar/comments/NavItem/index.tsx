import { Comment } from "types";

//project import
import Avatar from "ui-component/extended/Avatar";

//material ui
import {
  Box,
  ButtonBase,
  Grid,
  Typography,
  ListItemButton,
} from "@mui/material";

const Item = ({ id, user, text }: Comment) => {
  const { avatar, login, id: userId } = user;
  return (
    <ListItemButton component="a" href={`/profil/${userId}`}>
      <Grid container wrap="nowrap">
        <Avatar
          sx={{ width: 34, height: 34, mr: 1.5 }}
          alt="Comment"
          src={avatar}
        />
        <Box>
          {/* <Typography align="left" variant="h5" component="div">
            {login}
          </Typography> */}
          <ButtonBase
            sx={{ fontSize: 14 }}
            component="a"
            href={`profil/${userId}`}
          >
            {login}
          </ButtonBase>
          <Typography align="left" variant="body2">
            {text}
          </Typography>
        </Box>
      </Grid>
    </ListItemButton>
  );
};
export default Item;
