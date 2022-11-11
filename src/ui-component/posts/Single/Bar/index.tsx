import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pl";

//project imports
import Avatar from "ui-component/extended/Avatar";
import { Post } from "types";
import Modal from "ui-component/Modal";
import Report from "./Report";

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


//assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import emptyAvatar from "assets/images/emptyAvatar.png";

const Bar = ({ user, createdAt }: Post) => {
  const { login, avatar } = user;
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(true);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const prepareDate = (value: string) => {
    const date = new Date(value);
    return moment(
      `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`,
      "YYYYMMDD"
    ).fromNow();
  };
  return (
    <>
    
      <Modal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <Typography component="h2">Zgłoś</Typography>
        <TextField
          placeholder="Treść zgłoszenia"
          multiline
          rows={2}
          maxRows={4}
        />
      </Modal>
      <Grid container wrap="nowrap" alignItems="center" spacing={1}>
        <Grid item>
          {<Avatar size="xs" alt={login} src={avatar ? avatar : emptyAvatar} />}
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
                />
                {prepareDate(createdAt)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* <ButtonBase sx={{ borderRadius: "12px" }} onClick={handleClick}>
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
          </ButtonBase> */}
          <Report />
          {/* <Menu
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
          </Menu> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Bar;
