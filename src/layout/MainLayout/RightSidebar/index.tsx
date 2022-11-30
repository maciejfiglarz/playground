import { useState, useRef, useContext } from "react";
// import { useNavigate } from 'react-router-dom';

//project imports
import { borderRadius } from "config/theme";
import AppContext from "contexts/AppContext";
import Logo from "ui-component/Logo";
import { useAppSelector } from "store";
import { useAppDispatch } from "store";
import MenuList from "./MenuList";
import { setCookie } from "utils/cookies";

//material ui
import Drawer from "@mui/material/Drawer";
import {
  IconButton,
  Theme,
  Chip,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Box,
  useMediaQuery,
  // ButtonBase
} from "@mui/material";

import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

//assets
import { IconLogout } from "@tabler/icons";
import UserImage from "assets/images/users/user-round.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

// styles
const Header = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
}));

const UserSidebar = () => {
  // const navigate = useNavigate();=
  const { mode, setMode, setAuthModal } = useContext(AppContext);
  const { userInfo } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const anchorRef = useRef(null);
  const dispatch = useAppDispatch();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleMode = (
    event: React.MouseEvent<HTMLElement>,
    newMode: "light" | "dark"
  ) => {
    if (newMode !== null) {
      setMode(newMode);
      setCookie("mode", newMode);
    }
  };

  // const handleSetAuthModal = (type: "login" | "register") => {
  //   setAuthModal(type);
  // };

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
            paddingRight: 0,
          },
        }}
        icon={
          <>
            <Avatar
              src={userInfo ? userInfo.avatar : UserImage}
              sx={{
                ...theme.typography.mediumAvatar,
                margin: "6px -6px 6px 6px !important",
                cursor: "pointer",
              }}
              ref={anchorRef}
              aria-haspopup="true"
              color="inherit"
            />
            {/* <SettingsIcon style={{ marginLeft: 10, fontSize: 20 }} /> */}
          </>
        }
        onClick={() => setIsOpen(true)}
      />

      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          style: { padding: 15, width: matchUpMd ? "auto" : "100%" },
        }}
      >
        <Header>
          <Box sx={{ margin: "25px auto" }}>
            <Logo />
          </Box>

          <IconButton
            style={{ position: "absolute", left: 15, top: 15 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <CloseIcon />
          </IconButton>
        </Header>

        {/* <Divider /> */}

        <Divider sx={{ margin: "25px 0" }} />

        <MenuList setIsOpenNavigation={setIsOpen} />

        {/* <Divider sx={{ margin: "25px 0" }} /> */}

        <Box
          sx={{
            position: "absolute",
            bottom: 15,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "calc(100% - 30px)",
            "& > *": {
              // m: 1
            },
          }}
        >
          <ToggleButtonGroup
            style={{ width: "100%" }}
            value={mode}
            exclusive
            onChange={handleMode}
            fullWidth
          >
            <ToggleButton value="light" aria-label="left aligned">
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark" aria-label="right aligned">
              <NightlightRoundIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <Box style={{ marginTop: 20, fontSize: 15 }}>
            © 2022 Portal, Inc. All rights reserved
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default UserSidebar;
