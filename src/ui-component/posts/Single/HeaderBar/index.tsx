import React, { useState } from "react";
//project imports
import Avatar from "ui-component/extended/Avatar";
import { Post } from "types";

//material ui
import {
  Button,
  ButtonBase,
  // CardMedia,
  // Collapse,
  // FormHelperText,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";

//assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const HeaderBar = ({ user, createdAt }: Post) => {
  const { login, avatar } = user;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container wrap="nowrap" alignItems="center" spacing={1}>
      <Grid item>
        <Avatar alt="User 1" src={avatar} />
      </Grid>
      <Grid item xs zeroMinWidth>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography align="left" variant="h5" component="div">
              {login}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="left" variant="caption">
              <FiberManualRecordIcon
                sx={{
                  width: "10px",
                  height: "10px",
                  opacity: 0.5,
                  m: "0 5px",
                }}
              />{" "}
              {createdAt}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <ButtonBase sx={{ borderRadius: "12px" }} onClick={handleClick}>
          <Avatar
            variant="rounded"
            size="badge"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.smallAvatar,
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.dark.main
                  : theme.palette.secondary.light,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.dark.light
                  : theme.palette.secondary.dark,
              zIndex: 1,
              transition: "all .2s ease-in-out",
              '&[aria-controls="menu-list-grow"],&:hover': {
                background: theme.palette.secondary.main,
                color: theme.palette.secondary.light,
              },
            }}
          >
            <MoreVertTwoToneIcon fontSize="small" />
          </Avatar>
        </ButtonBase>
        <Menu
          id="menu-post"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          variant="selectedMenu"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Zgłoś</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default HeaderBar;
