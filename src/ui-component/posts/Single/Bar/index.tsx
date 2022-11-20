import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const { login, avatar, id } = user;
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
          <ButtonBase component={Link} to={`/profil/${id}`}>
            <Avatar size="xs" alt={login} src={avatar ? avatar : emptyAvatar} />
          </ButtonBase>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <ButtonBase component={Link} to={`/profil/${id}`}>
                <Typography align="left" variant="h5" component="div">
                  {login}
                </Typography>
              </ButtonBase>
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
          <Report />
        </Grid>
      </Grid>
    </>
  );
};

export default Bar;
