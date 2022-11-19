import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// project imports
import MainCard from "ui-component/MainCard";
import axios from "utils/axios";
import { useAppDispatch, useAppSelector } from "store";

//material ui
import { User } from "types";
import Avatar from "ui-component/extended/Avatar";
import { gridSpacing } from "config/theme";
import { borderRadius as themeBorderRadius } from "config/theme";

// material-ui
import {
  Grid,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  ButtonBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppContext from "contexts/AppContext";

//assets
import PersonAddTwoToneIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";

const Header = ({ avatar, cover, login, id }: User) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { setIsGuardModal } = useContext(AppContext);
  const { userInfo } = useAppSelector((state) => state.user);
  const isOwner = userInfo && userInfo.id === id ? true : false;
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  console.log("anchorEl", anchorEl);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setAnchorEl(null);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <MainCard
      border={true}
      sx={{
        mb: 4,
      }}
    >
      <CardMedia
        component="img"
        image={cover}
        sx={{
          borderRadius: `${themeBorderRadius}px`,
          overflow: "hidden",
          // m: 0.1
        }}
      />

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={2}>
          <Avatar
            alt="User 1"
            src={avatar}
            sx={{
              margin: "-70px 0 0 30px",
              borderRadius: "16px",
              [theme.breakpoints.down("lg")]: {
                margin: "-70px auto 0",
              },
              [theme.breakpoints.down("md")]: {
                margin: "-60px auto 0",
              },
              width: { xs: 72, sm: 100, md: 140 },
              height: { xs: 72, sm: 100, md: 140 },
            }}
          />
        </Grid>
        {/* width: { xs: 72, sm: 80, md: 90 }, */}
        <Grid sx={{ mt: matchDownMD ? 0 : 3.5 }} item xs={12} md={10}>
          <Grid container alignItems={"center"} spacing={gridSpacing}>
            <Grid item xs={7} md={8}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: matchDownMD ? 17 : 20,
                  // textAlign: matchDownMD ? "center" : "left",
                }}
                variant="h3"
              >
                {login}
              </Typography>
            </Grid>
            <Grid item xs={5} md={4}>
              <Grid
                container
                spacing={1}
                sx={{
                  justifyContent: "flex-end",
                  // [theme.breakpoints.down("lg")]: {
                  //   justifyContent: "center",
                  // },
                }}
              >
                <Grid item>
                  {isOwner ? (
                    <>
                      {matchDownMD ? (
                        <>
                          <ButtonBase
                            sx={{ borderRadius: "12px" }}
                            onClick={handleClick}
                            aria-controls={
                              Boolean(anchorEl) ? "basic-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                              Boolean(anchorEl) ? "true" : undefined
                            }
                          >
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
                                p:2
                              }}
                            >
                              <SettingsIcon fontSize="small" />
                            </Avatar>
                          </ButtonBase>
                          <Menu
                            id="menu-setting"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleCloseModal}
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
                            <MenuItem onClick={handleCloseMenu}>Zgłoś</MenuItem>
                          </Menu>
                        </>
                      ) : (
                        <Button
                          component={Link}
                          to="/ustawienia"
                          variant="contained"
                          startIcon={<SettingsIcon />}
                        >
                          Ustawienia
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      startIcon={<PersonAddTwoToneIcon />}
                      onClick={() => setIsGuardModal(true)}
                    >
                      Obserwuj
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Header;
